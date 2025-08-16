@echo off
echo Uploading optimized files to young.qirimtatarca.org hosting...

rem Connect to WebDAV
net use W: https://webdisk.qirimtatarca.org:2078/public_html/young /user:qirimtatarca LEt@%29}g^2/hg;GB

rem Copy all files from dist to hosting
robocopy dist\ W:\ /E /Z /R:3 /W:1

rem Show status
echo Upload completed!
net use W: /delete

pause