@echo off
setlocal

rem -------------------------------------------------------
rem  upload_to_hosting.bat
rem  Uploads dist\ to the WebDAV hosting via a mapped drive.
rem
rem  Required environment variables:
rem    FTP_USER      - WebDAV / cPanel username
rem    FTP_PASSWORD  - WebDAV / cPanel password
rem
rem  Optional environment variable:
rem    WEBDAV_URL    - Full WebDAV URL (default below)
rem -------------------------------------------------------

rem --- Validate required variables -----------------------
if "%FTP_USER%"=="" (
    echo ERROR: FTP_USER environment variable is not set.
    echo.
    echo Set it before running this script, for example:
    echo   set FTP_USER=your_username
    echo   set FTP_PASSWORD=your_password
    echo   upload_to_hosting.bat
    exit /b 1
)
if "%FTP_PASSWORD%"=="" (
    echo ERROR: FTP_PASSWORD environment variable is not set.
    echo.
    echo Set it before running this script, for example:
    echo   set FTP_USER=your_username
    echo   set FTP_PASSWORD=your_password
    echo   upload_to_hosting.bat
    exit /b 1
)

rem --- Set default WebDAV URL if not provided ------------
if "%WEBDAV_URL%"=="" (
    set "WEBDAV_URL=https://webdisk.qirimtatarca.org:2078/public_html/young"
)

echo Uploading optimized files to hosting...
echo WebDAV URL: %WEBDAV_URL%

rem --- Store credentials in Windows Credential Manager so that
rem     the password is never passed as a command-line argument to net use
rem     (which could be visible in process listings or logs).
rem     Note: cmdkey itself still receives /pass: on the command line, which
rem     is a limitation of batch-file automation; use an interactive session
rem     or a secrets manager if that exposure is unacceptable.
rem     The credential entry is removed again after the transfer.
rem
rem     Extract just the hostname (strip scheme, port, and path).
set "_WEBDAV_TARGET=%WEBDAV_URL%"
set "_WEBDAV_TARGET=%_WEBDAV_TARGET:https://=%"
set "_WEBDAV_TARGET=%_WEBDAV_TARGET:http://=%"
for /f "tokens=1 delims=/" %%H in ("%_WEBDAV_TARGET%") do set "_WEBDAV_HOST_PORT=%%H"
for /f "tokens=1 delims=:" %%H in ("%_WEBDAV_HOST_PORT%") do set "_WEBDAV_HOST=%%H"
cmdkey /add:"%_WEBDAV_HOST%" /user:"%FTP_USER%" /pass:"%FTP_PASSWORD%" >nul 2>&1
if errorlevel 1 (
    echo ERROR: Failed to store WebDAV credentials for %_WEBDAV_HOST%.
    exit /b 1
)

rem --- Map WebDAV drive using stored credential --------------
net use W: "%WEBDAV_URL%" /persistent:no >nul 2>&1
if errorlevel 1 (
    echo ERROR: Failed to connect to WebDAV at %WEBDAV_URL%.
    echo Check that FTP_USER and FTP_PASSWORD are correct.
    cmdkey /delete:"%_WEBDAV_HOST%" >nul 2>&1
    exit /b 1
)

rem --- Copy files; capture exit code for cleanup ---------
robocopy dist\ W:\ /E /Z /R:3 /W:1
set ROBOCOPY_EXIT=%errorlevel%

rem --- Always unmap the drive and remove stored credential --
net use W: /delete >nul 2>&1
cmdkey /delete:"%_WEBDAV_HOST%" >nul 2>&1

rem --- Evaluate result (robocopy exit codes 0-7 = success)
if %ROBOCOPY_EXIT% leq 7 (
    echo Upload completed successfully.
    exit /b 0
) else (
    echo ERROR: robocopy reported failures ^(exit code %ROBOCOPY_EXIT%^).
    exit /b %ROBOCOPY_EXIT%
)
