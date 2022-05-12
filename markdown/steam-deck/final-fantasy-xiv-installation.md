---
title: "Final Fantasy XIV Installation (non-Steam account)"
link: "https://www.reddit.com/r/ffxiv/comments/tegrbw/i_wrote_a_guide_for_how_to_run_ffxiv_on_the_steam/"
section: "Final Fantasy XIV,Steam Deck,Steam,Guides,Non-Steam Game"
og:
  image: "https://img.finalfantasyxiv.com/t/4df4681d0af855b1a77d5d75d86925d7e110206a.png?1646399861"
  description: "Adding Final Fantasy XIV with a non-Steam account to the Steam Deck"
---

## Summary

At the time of writing there were issues with XIVLauncher, they may be resolved at the time of publishing (in which case someone can submit instructions for using that), but in lieu of XIVLauncher, here's how to leverage Final Fantasy XIV in Steam itself without using a Steam account.

## Instructions
Authored by [u/StackTrace86](https://www.reddit.com/user/StackTrace86/), original [publication](https://www.reddit.com/r/ffxiv/comments/tegrbw/i_wrote_a_guide_for_how_to_run_ffxiv_on_the_steam/).

1.  Pick up your Steam Deck and install and run the FFXIV Online Free Trial. It'll load up, but will hang once it tries to display the launcher. This is expected. Close FFXIV by pressing the "STEAM" button and exiting back to the main Steam Deck menu. This step is important so we have the right config files in the right place to modify them later.
2. Go to Desktop Mode
3. Open the "Discover" store (Shopping Bag with a question mark)
4.  Tap on the search bar. Open the keyboard by pressing X + STEAM at the same time
5.  Search for "gedit" (without quotes) and click the install button. This is a text editor, which is much easier than the built-in Vim. I've been a software developer for over a decade, and even I can't wrap my head around Vim - trust me, this editor makes life a lot easier.
6.  Tap on the search bar again. Open the keyboard by pressing X + STEAM at the same time
7.  Search for 'Proton-Up-Qt' and click install. This will allow you to install custom versions of Proton (which is what the Steam Deck uses to run Windows games on linux). Some of these custom versions have useful hooks for running FFXIV through Steam, which is what we're going to do. When I searched for it the description was in German for some reason, but it was still the right application.
8.  After both of the applications have installed, open the "Start" menu (blue and white Steam Deck icon) and click on "All Applications", then open Proton-Up-Qt.
9.  Click on the "Add Version" button
10.  In the window that opens, for "Compatability Tool", select Proton-GE (GE stands for "Glorious Eggroll"). For Version, select the latest version. The video has GE-Proton7-5, but the latest at the time I installed it (March 14, 2022) was GE-Proton7-9. Click "Install".
11.  Once it finishes installing, close ProtonUp-Qt.
12. In the task bar open the Dolphin file explorer (the blue file icon)
13. In the bar on the left, scroll down to "Devices", and select "home" and click on the "deck" folder.
14. Click on the 3 line hamburger icon in the top right of the file explorer window (just beneath the close (X) button) and select "Show Hidden Files"
15. Navigate to .local > share > Steam > steamapps > compatdata > 312060 > pfx > drive_c > users > steamuser > Documents > My Games > FINAL FANTASY XIV - A Realm Reborn
16. In this folder, open `FFXIV_Boot.cfg` by right clicking (clicking the left trackpad) and selecting open with > Text Editor
17. In this file, there will be a lot of settings (Version, Language, Region, etc), followed by a space (or multiple spaces) and then a number. Select the `2` next to `Browser`, open your text editor (Steam + X) and change the `2` to a `1`. Then, select the `0` next to `BrowserType` and change it from a `0` to a `1`. EDIT: You may also need to set `Eulaagreement` to `1` and `Startupcompleted` to `1` as well, if you run into issues starting the game.
18. Click the "Save" button in the top right, and then close the file.
19. Click on the "Return to Gaming Mode" shorcut on the desktop to return to the "normal" Steam Deck OS.
20. Select FFXIV from your list of games, then select the gear icon on the far right of the FFXIV page
21. Select "Properties"
22. Select "Compatibility" and select "Force the use of a specific Steam Play compatibility tool"
23. Tap on the dropdown that appears and select the version of GE-Proton you installed (for me it was GE-Proton7-9)
24. Go back (b button), and navigate to "General" from the menu on the left. Under launch options, type this into the text box: `NOSTEAM=1 %command%`
25. Go back (b button) until you are back on the FFXIV page, and select Play
26.  You're almost there! You should see a window pop up asking you to agree to an EULA. Accept it, and then select the option for "I already have a Square Enix Account". Don't worry about the part that says it has to not be linked to FFXIV. Just enter your account login details (using Steam + X to open the keyboard), and let FFXIV install... all 75 gigs of it.
27.  Once it has installed, click the green "Play" button and then calibrate your controller.
28.  You should be on the FFXIV opening page. You may notice that parts of the top and bottom of the screen are cut off though. Click on "Configuration" and modify your screen resolution to be 1280 x 800.
29.  Click "Play", select your data center and your character, and you should be good to go! Congratulations, you made it!