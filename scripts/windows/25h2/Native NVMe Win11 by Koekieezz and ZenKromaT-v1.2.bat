@echo off
setlocal EnableExtensions EnableDelayedExpansion

:: =====================================================
:: AUTO ELEVATE ADMIN
:: =====================================================
net session >nul 2>&1
if %errorlevel% neq 0 (
    powershell -NoProfile -Command ^
        "Start-Process '%~f0' -Verb RunAs"
    exit /b
)

:: =====================================================
:: BASIC CONFIG
:: =====================================================
title Native NVMe Commands Support Toggle v1.2 - Made by Koekieezz & ZenKromat

:: REGISTRY CONFIG (EDIT ONLY IF NEEDED)
set "REG_KEY=HKLM\SYSTEM\CurrentControlSet\Policies\Microsoft\FeatureManagement\Overrides"
set REG_LIST=1853569164 156965516 1176759950 1409234060 735209102 2525490830

:: =====================================================
:: MAIN MENU
:: =====================================================
:MENU
cls
echo ======================================================================
echo                Native NVMe Commands Support Toggle v1.2
echo                     Made by Koekieezz and ZenKromaT
echo ======================================================================
echo.
set ENABLED_COUNT=0
echo  NativeNVMe Registry Status:
call :CHECK_ONE 1853569164 "- UxAccOptimization"
call :CHECK_ONE 156965516  "- Standalone_Future"
call :CHECK_ONE 1176759950 "- Servicing_NativeNVME"
call :CHECK_ONE 1409234060 "- NativeNVMeStackEnableForClientOS"
call :CHECK_ONE 735209102  "- NativeNVMeStackForGeClient"
call :CHECK_ONE 2525490830 "- NativeNVMeStackForGeServer"
echo.
echo  SafeMode for NativeNVMe:
call :CHECK_SAFEMODE
echo.
if "%ENABLED_COUNT%"=="6" (
    echo  OVERALL STATUS : FULLY ENABLED
) else if "%ENABLED_COUNT%"=="0" (
    echo  OVERALL STATUS : DISABLED
) else (
    echo  OVERALL STATUS : PARTIALLY ENABLED
)
echo.
echo  [1] Enable Native NVMe Registry
echo  [2] Disable Native NVMe Registry
echo  [0] Exit
echo.
echo * Native NVMe support only from W11 Germanium Build and above (Build 26100+)
echo ** Safe Mode isn't working with this tweak enabled at current state, DWYOR
echo *** PLEASE DO NOT ENABLE THIS IF YOU USE INTEL NVMEs UNTIL FURTHER NOTICE
echo.
set /p CHOICE=Select option: 

if "%CHOICE%"=="1" goto ENABLE
if "%CHOICE%"=="2" goto DISABLE
if "%CHOICE%"=="0" exit
goto MENU

:: =====================================================
:: ENABLE FUNCTION
:: =====================================================
:ENABLE
cls
echo =====================================================================
echo                      Enable Native NVMe Registry
echo =====================================================================
echo.

call :ENABLE_ONE 1853569164 "- UxAccOptimization"
call :ENABLE_ONE 156965516  "- Standalone_Future"
call :ENABLE_ONE 1176759950 "- Servicing_NativeNVME"
call :ENABLE_ONE 1409234060 "- NativeNVMeStackEnableForClientOS"
call :ENABLE_ONE 735209102  "- NativeNVMeStackForGeClient"
call :ENABLE_ONE 2525490830 "- NativeNVMeStackForGeServer"
call :ENABLE_SAFEMODE

echo.
echo Operation completed.
echo.
echo [1] Back to Main Menu
echo [0] Restart System
set /p ACT=Select option: 

if "%ACT%"=="1" goto MENU
if "%ACT%"=="0" shutdown /r /t 0
goto ENABLE

:: =====================================================
:: DISABLE FUNCTION
:: =====================================================
:DISABLE
cls
echo ======================================================================
echo                      Disable Native NVMe Registry
echo ======================================================================
echo.

call :DISABLE_ONE 1853569164 "- UxAccOptimization"
call :DISABLE_ONE 156965516  "- Standalone_Future"
call :DISABLE_ONE 1176759950 "- Servicing_NativeNVME"
call :DISABLE_ONE 1409234060 "- NativeNVMeStackEnableForClientOS"
call :DISABLE_ONE 735209102  "- NativeNVMeStackForGeClient"
call :DISABLE_ONE 2525490830 "- NativeNVMeStackForGeServer"
call :DISABLE_SAFEMODE

echo.
echo Operation completed.
echo.
echo [1] Back to Main Menu
echo [0] Restart System
set /p ACT=Select option: 

if "%ACT%"=="1" goto MENU
if "%ACT%"=="0" shutdown /r /t 0
goto DISABLE

:: =====================================================
::  SUBROUTINE FUNCTION
:: =====================================================
:ENABLE_ONE
reg query "%REG_KEY%" /v "%~1" >nul 2>&1
if errorlevel 1 (
    echo Enabling %~2
    reg add "%REG_KEY%" /v "%~1" /t REG_DWORD /d 1 /f >nul
) else (
    echo %~2 already enabled - skipped
)
timeout /t 1 >nul
exit /b

:ENABLE_SAFEMODE
set "SafeMode_GUID={75416E63-5912-4DFA-AE8F-3EFACCAFFB14}"
echo.
echo Adding SafeMode entries...

reg query "HKLM\SYSTEM\CurrentControlSet\Control\SafeBoot\Network\%SafeMode_GUID%" /ve >nul 2>&1
if "!ERRORLEVEL!"=="0" (
    echo SafeMode Network: ALREADY PRESENT
    set "SafeMode_NETWORK_PRESENT=1"
) else (
    reg add "HKLM\SYSTEM\CurrentControlSet\Control\SafeBoot\Network\%SafeMode_GUID%" /ve /d "Storage disks" /f >nul 2>&1
    if "!ERRORLEVEL!"=="0" (
        echo SafeMode Network: ADDED
        set "SafeMode_NETWORK_PRESENT=1"
    ) else (
        echo SafeMode Network: FAILED TO ADD
        set "SafeMode_NETWORK_PRESENT=0"
    )
)

reg query "HKLM\SYSTEM\CurrentControlSet\Control\SafeBoot\Minimal\%SafeMode_GUID%" /ve >nul 2>&1
if "!ERRORLEVEL!"=="0" (
    echo SafeMode Minimal: ALREADY PRESENT
    set "SafeMode_MINIMAL_PRESENT=1"
) else (
    reg add "HKLM\SYSTEM\CurrentControlSet\Control\SafeBoot\Minimal\%SafeMode_GUID%" /ve /d "Storage disks" /f >nul 2>&1
    if "!ERRORLEVEL!"=="0" (
        echo SafeMode Minimal: ADDED
        set "SafeMode_MINIMAL_PRESENT=1"
    ) else (
        echo SafeMode Minimal: FAILED TO ADD
        set "SafeMode_MINIMAL_PRESENT=0"
    )
)

echo.
exit /b

:DISABLE_ONE
reg query "%REG_KEY%" /v "%~1" >nul 2>&1
if errorlevel 0 (
    echo Disabling %~2
    reg delete "%REG_KEY%" /v "%~1" /f >nul
) else (
    echo %~2 already disabled - skipped
)
timeout /t 1 >nul
exit /b

:DISABLE_SAFEMODE
set "SafeMode_GUID={75416E63-5912-4DFA-AE8F-3EFACCAFFB14}"
echo.
echo Removing SafeMode entries (if present)...
reg query "HKLM\SYSTEM\CurrentControlSet\Control\SafeBoot\Network\%SafeMode_GUID%" /ve >nul 2>&1
if NOT "%ERRORLEVEL%"=="0" (
    echo SafeMode Network: NOT FOUND
    set "SafeMode_NETWORK_PRESENT=0"
) else (
    reg delete "HKLM\SYSTEM\CurrentControlSet\Control\SafeBoot\Network\%SafeMode_GUID%" /f >nul 2>&1
    if "%ERRORLEVEL%"=="0" (
        echo SafeMode Network: DELETED
        set "SafeMode_NETWORK_PRESENT=0"
    ) else (
        echo SafeMode Network: FAILED TO DELETE
        set "SafeMode_NETWORK_PRESENT=0"
    )
)

reg query "HKLM\SYSTEM\CurrentControlSet\Control\SafeBoot\Minimal\%SafeMode_GUID%" /ve >nul 2>&1
if NOT "%ERRORLEVEL%"=="0" (
    echo SafeMode Minimal: NOT FOUND
    set "SafeMode_MINIMAL_PRESENT=0"
) else (
    reg delete "HKLM\SYSTEM\CurrentControlSet\Control\SafeBoot\Minimal\%SafeMode_GUID%" /f >nul 2>&1
    if "%ERRORLEVEL%"=="0" (
        echo SafeMode Minimal: DELETED
        set "SafeMode_MINIMAL_PRESENT=0"
    ) else (
        echo SafeMode Minimal: FAILED TO DELETE
        set "SafeMode_MINIMAL_PRESENT=0"
    )
)
echo.
exit /b

:CHECK_ONE
set "RAW="
for /f "tokens=3" %%A in (
    'reg query "%REG_KEY%" /v "%~1" 2^>nul ^| find "%~1"'
) do set "RAW=%%A"

if not defined RAW (
    echo %~2 : DISABLED
)	else (
    if "%RAW%"=="0x1" (
        echo %~2 : ENABLED
        set /a ENABLED_COUNT+=1
    )
)
exit /b

:CHECK_SAFEMODE
set "SafeMode_GUID={75416E63-5912-4DFA-AE8F-3EFACCAFFB14}"
set "RAW="
for /f "tokens=3*" %%A in (
  'reg query "HKLM\SYSTEM\CurrentControlSet\Control\SafeBoot\Network\%SafeMode_GUID%" /ve 2^>nul ^| find "(Default)"'
) do set "RAW=%%A %%B"
if not defined RAW (
  echo - SafeMode Network : NOT FOUND
  set "SafeMode_NETWORK_PRESENT=0"
) else (
  echo - SafeMode Network : PRESENT
  set "SafeMode_NETWORK_PRESENT=1"
)
set "RAW="
for /f "tokens=3*" %%A in (
  'reg query "HKLM\SYSTEM\CurrentControlSet\Control\SafeBoot\Minimal\%SafeMode_GUID%" /ve 2^>nul ^| find "(Default)"'
) do set "RAW=%%A %%B"
if not defined RAW (
  echo - SafeMode Minimal : NOT FOUND
  set "SafeMode_MINIMAL_PRESENT=0"
) else (
  echo - SafeMode Minimal : PRESENT
  set "SafeMode_MINIMAL_PRESENT=1"
)
exit /b

