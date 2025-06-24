# Root Hiding

So, you want to use Magisk but without being detected by banking apps? Then this guide is for you :D. Note that for better hiding results, consider using KernelSU/APatch/KernelSU-Next/SukiSU which implemented root hiding in mind.

## Magisk

Magisk doesn't support root hiding or any of the hiding steps, so to get Magisk with those, use [Magisk Alpha](https://t.me/magiskalpha)

## Modules

### Required

+ [ReZygisk](https://github.com/PerformanC/ReZygisk/actions) (use the CI builds)
+ LSPosed (either the mod version or IT is fine for Android 15-, IT for 16+)
+ [Treat Wheel](https://t.me/performancorg) (find the Treat Wheel.zip file here)
+ [MMRL](https://github.com/MMRLApp/MMRL) (An app)

#### Root hiding
Use one of these modules
+ [Nohello](https://github.com/MhmRdd/NoHello/actions) / Nohello Compat (in Telegram)
+ Shamiko

### Play Integrity

Install these 

+ [PIF Fork](https://github.com/osm0sis/PlayIntegrityFork/releases/latest)
+ [Tricky Store](https://github.com/5ec1cff/TrickyStore/releases/latest)
+ [Tricky Addon](https://github.com/KOWX712/Tricky-Addon-Update-Target-List/releases/latest)
> Optionally, not tested but maybe.
> + TSupport Advance

or

+ Integrity Wizard (you'll need to find this module manually)

Then install these

+ [BetterKnownInstalled](https://github.com/Pixel-Props/BetterKnownInstalled)
+ [Sensitive-Props](https://www.pling.com/p/2129780)


After that do the following:

+ Open the manager
+ Tap "Play" button on PIF Fork and wait
+ Tap "Play" button on Tricky Store
+ In Tricky Addon screen: ||| -> Select All -> Deselect Unnecessary -> Set Valid Keybox -> Set Security Patch -> Get Security Patch Date -> Save (in the Security Patch screen) -> Save
+ Reboot and hope it works
