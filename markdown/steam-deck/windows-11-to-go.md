---
title: "Installing Windows 11 to-go"
link: "https://github.com/SteamGridDB/steam-rom-manager"
section: "Windows,Steam Deck,Steam,Guides,Gamepass"
og:
  image: "https://www.bleepstatic.com/content/hl-images/2021/06/15/Windows--11.jpg"
  description: "Instructions to let you install Windows 11 to an external SSD so you can install and play Gamepass games."
---

## Summary

Valve doesn't have an easy way to swap between Windows 11 and Linux easily. Until they do, we'll be installing Windows to an external SSD and booting into it by selecting it in the BIOS (holding down VOL DOWN while pressing power).

## Instructions

### 1. Install Windows 11 to an external SSD

**Downloads:**

1. Download Rufus (a tool to create bootable Windows 11) from [here](https://rufus.ie/en/)
2. Download the Windows 11 ISO from [here](https://www.microsoft.com/en-ca/software-download/windows11)
3. Scroll down to "Download Windows 11 Disk Image (ISO)" and select "Windows 11 (multi-edition ISO)"
4. Click "Download"

**Creating Windows 11 SSD:**

1. Start `Rufus`
2. choose your SSD drive in the `Device` section (if you don't see it, check the `List USB Hard Drives` in the `Advanced` drive properties)
3. Now click the `SELECT` button and find the Windows ISO you just downloaded.
4. Once the Windows ISO is detected, a new section should appear (`Image` option) - you need to select `Windows To Go` there.
5. You might see options like forcing Windows to allow you to use a Local account, privacy, etc. Select what you wanwt (you should select the Local account thing)
6. Click `Start`

Congrats, after this our Windows SSD should be made! Don't have a key? Who cares!

### 2. Start using the SSD

NOTE: It's best to have a keyboard and mouse to _also_ be connected to the Steam Deck, not just the SSD for the purpose of Windows setup. Also, everything on screen might be rotated 90 degrees.

1. Plug the SSD into your Steam Deck.
2. Fully shut down.
3. Hold down the VOL DOWN button and press POWER, keep VOL DOWN held down until you get to the BIOS boot menu
4. Select your SSD in the BIOS menu to boot into that.
5. As the Deck attempts to boot into Windows it might end up rebooting (and likely rebooting back into Linux). This might be annoying, but it's OK, just shut down and boot back into the BIOS with VOL down and POWER and select the Windows drive.
6. Eventually you'll get to Windows 11 setup, pick your wifi and settings and eventually you'll get to your desktop
7. Download your drivers from the Valve site [here](https://help.steampowered.com/en/faqs/view/6121-ECCD-D643-BAA8). This process might require reboots/ shutdowns.

Once you've done all this, you can:

1. Download Steam
2. Download Gamepass
3. Download some Gamepass games!

### 3. Gamepass and Steam

Essentially, the Steam controller inputs on the Deck are a keyboard and mouse and Gamepass games will _not_ recognize it as an actual controller. There's three potential tools you can use to remediate this: [GloSI](https://github.com/Alia5/GlosSI), [GloSC](https://github.com/Thracky/GlosSI), or [steam-deck-windows-usermode-driver](https://github.com/mKenfenheuer/steam-deck-windows-usermode-driver). The first never worked for me, I never tried the last, so we're going to do GloSC.

Install these two before installing GloSC:

1. https://github.com/ViGEm/ViGEmBus/releases
2. https://github.com/ViGEm/HidHide/releases

Phawx actually has decent instructions on how to use GloSC, so I'd recommend watching [this](https://www.youtube.com/watch?v=-_lFmtSSEnQ).
