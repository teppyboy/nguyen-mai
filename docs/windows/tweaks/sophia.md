# Sophia

Sophia is a PowerShell script that is designed to extremely tweak your system.

[GitHub](https://github.com/farag2/Sophia-Script-for-Windows)

## Installation

Installation is straightforward, just follow the guide on GitHub. If your system is blocked by Sophia (by using winutil, removed Windows Defender, etc.) then you can follow here to fix the issues

### Fixing Sophia

Upon executing the download command, it'll download the scripts to a folder called `Sophia_Script_for_Windows_11_v7.0.0` (or something similar to that) in the current directory of your terminal.

1. Navigate to the folder
2. Open `Module/Sophia.psm1`.
3. Delete all `$Global:Failed = 1` and `exit` in the file (use Find & Replace All to do that faster).
4. Save the script.

Now Sophia will not exit when it detects something it doesn't like anymore.
