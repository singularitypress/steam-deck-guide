---
title: "FSR 2.1 for Cyberpunk 2077 on the Steam OS 3"
link: "https://www.reddit.com/r/SteamDeck/comments/vm95ra/cyberpunk_2077_fsr_20_mod_comparison_screenshots/"
section: "Cyberpunk 2077,Modding,Steam Deck,Steam,Guides,Non-Steam Game"
og:
  image: "https://cdn.vox-cdn.com/thumbor/WxWpWxMtFmObM70u4ZeAVKKGUco=/0x0:2560x1307/1200x675/filters:focal(1043x427:1451x835)/cdn.vox-cdn.com/uploads/chorus_image/image/70722061/ezgif.com_gif_maker.0.jpg"
  description: "Adding FSR 2.1 to replace DLSS on Cyberpunk 2077 for the Steam Deck"
---
1. Switch to Desktop Mode, and install ProtonTricks from the Discover Store.
2. Download the mod from its Nexus page and extract it into your Cyberpunk 2077 install directory (ensure the text files land in your base game directory and the .dll and .ini files land in the `/bin/x64` folder, where the main game executable is)
3. Run ProtonTricks, and select Cyberpunk 2077 from the list that appears and hit OK.
4. If you get a popup warning that you're using a "64-bit WINEPREFIX", just click OK.
5. Select "Select the default wineprefix", and click OK
6. Select "Run regedit", and click OK.
7. Once in Regedit, go to the top bar and click `Registry > Import Registry File...`, and navigate to and select the `EnableSignatureOverride.reg` file in your Cyberpunk directory. This will apply the necessary registry overrides to enable the mod in the game.
8. Close Regedit, click OK on the ProtonTricks window (with no option selected), and close ProtonTricks.
9. Drop back into Gaming Mode, run Cyberpunk 2077, and in the Graphics setting page you should now be able to enable DLSS (this setting is used by the FSR 2.0 mod instead of the normal FSR 1.0 options).