---
sidebar_position: 1
---
# Using modules

This will cover the most basic way to get Play Integrity with STRONG verdict.

> Regarding Google Wallet, please read [FAQ](#faq)

## Required modules

Install these 

+ [PIF-Inject](https://github.com/KOWX712/PlayIntegrityFix/actions) (use GitHub CI builds) / [PIF Fork](https://github.com/osm0sis/PlayIntegrityFork/releases/latest) / [PIF Next](https://github.com/EricInacio01/PlayIntegrityFix-NEXT) (for WebUI)
+ [Tricky Store OSS](https://github.com/beakthoven/TrickyStoreOSS/releases/latest) / [Tricky Store](https://github.com/5ec1cff/TrickyStore/releases/latest) (latest proprietary version is on Telegram)
+ A keybox provider

or

+ Integrity Wizard (you'll need to find this module manually)

#### Keybox provider

Install either one of these modules
+ [Tricky Addon](https://github.com/KOWX712/Tricky-Addon-Update-Target-List/releases/latest) (recommended)
+ [TSupport Advance](https://www.dropbox.com/scl/fi/vaqw80238bp5d7xdvn9kg/TSupport-Advance.zip?rlkey=sx3dl2wea0782alndqj9sz8qi&st=b5zuucjn&dl=1)

### Optional modules

These may be needed if you've done all the steps in the guide but still failing Play Integrity check (please check using Play Store, don't use external apps)

Install these

+ [BetterKnownInstalled](https://github.com/Pixel-Props/BetterKnownInstalled)
+ [Sensitive-Props](https://www.pling.com/p/2129780)

## Installation
### Fetch pif.json

Follow the instruction for the PIF you use below.

#### PIF Inject

Do the following:

0. Install KsuWebUI / MMRL
1. Open "Play Integrity Fix [INJECT]" in the Web UI you use.
2. Enable "Spoof Build" and "Spoof Build (Play Store)"
3. Press "Fetch pif.prop" and wait
4. Force stop Play Store

#### PIF Fork

> Note that this will mostly only works for Pixel devices, for others please use PIF Inject/PIF Next or [PlayStrong](./playstrong.md) method instead.

1. Click the "Play" button in the module manager and wait

#### PIF Next

0. Install KsuWebUI / MMRL
1. Open "Play Integrity Fix [NEXT]" in the Web UI you use.
2. Enable "Spoof vending sdk"
3. Press "Fetch pif.prop" and wait
4. Force stop Play Store

### Set the keybox

Follow the instructions below for the keybox provider you use.

#### Tricky Addon

Do the following:

+ Tap "Play" button on Tricky Store.
+ In Tricky Addon screen: ||| -> Select All -> Deselect Unnecessary -> Set Valid Keybox
+ (Only if you're using proprietary Tricky Store) Set Security Patch -> Get Security Patch Date -> Save (in the Security Patch screen)
+ Save.

#### TSupport Advance

+ Tap "Play" button on TSupport Advance
+ Follow the guide on screen.

And finally for both, reboot and hope it works.

## FAQ

### Google Wallet is not working as intended

Google Wallet does NOT use Play Integrity, instead it uses it's own environment detection. Try testing your environment with Native Detector/Key Attestion/etc. to see if it's normal.
