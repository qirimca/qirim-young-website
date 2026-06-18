@echo off
echo Uploading optimized files to young.qirimtatarca.org hosting...

rem Set default FTP user if empty
if "%FTP_USER%"=="" (
    set /p FTP_USER="Enter FTP Username [default: qirimtatarca]: "
)
if "%FTP_USER%"=="" (
    set FTP_USER=qirimtatarca
)

rem Prompt for FTP password if empty
if "%FTP_PASSWORD%"=="" (
    set /p FTP_PASSWORD="Enter FTP Password: "
)

rem Verify password is provided
if "%FTP_PASSWORD%"=="" (
    echo Error: FTP_PASSWORD is required.
    exit /b 1
)

rem Connect to WebDAV
net use W: https://webdisk.qirimtatarca.org:2078/public_html/young /user:%FTP_USER% "%FTP_PASSWORD%"
if %errorlevel% neq 0 (
    echo Connection to WebDAV failed. Cleaning up...
    net use W: /delete 2>nul
    exit /b 1
)

rem Copy all files from dist to hosting
robocopy dist\ W:\ /E /Z /R:3 /W:1
set ROBO_ERR=%errorlevel%

rem Robocopy return code >= 8 indicates copying errors
if %ROBO_ERR% geq 8 (
    echo Robocopy failed with exit code %ROBO_ERR%. Cleaning up network drive...
    net use W: /delete 2>nul
    exit /b 1
)

rem Show status and cleanup
echo Upload completed!
net use W: /delete

pause