# Atlas OS

Atlas OS is a playbook script to automatically tweaks your existing Windows installation with preconfigured features.

[GitHub](https://github.com/Atlas-OS/Atlas)

## Precaution

> AME Wizard does NOT uses the publicly released TrustedUninstaller.CLI as its backend in latest versions, much features don't work in the open source version but does work in the proprietary ones, so consider what you'll be using to load the playbook.

## Installation

> It is preferred to use the GitHub Actions build instead, as it provides latest support for the latest Windows versions.

### From GitHub Actions

1. Go to GitHub Actions tab: https://github.com/Atlas-OS/Atlas/actions/workflows/apbx.yaml
2. Click on the latest build.
3. If you have a GitHub account, you can download "Atlas Playbook" immediately, if not then use https://nightly.link to download.
4. Extract the `.zip` file, there will be a .apbx file inside.
5. Open the `.apbx` (password is `malte`)
6. Open `playbook.conf`
7. Edit `<Username>Atlas</Username>` to something invalid (e.g. `<Username>nguyen-mai</Username>`)
8. Save the changes.
9. Now you can use the playbook like normal, just ignore the "malcious" warning from AME Wizard.

### From GitHub Releases

TODO
