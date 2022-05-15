---
title: "Modding Oblivion"
link: "https://www.resetera.com/threads/steam-deck-ot-your-games-are-going-places.556834/post-86633702"
section: "Oblivion,The Elder Scrolls,Modding,Steam Deck,Steam,Guides"
og:
  image: "https://sm.ign.com/t/ign_ap/screenshot/default/apps6204614561494258435094d6315fcc-92fc-49c5-ae5f-bcfe4b00d3_5nbh.h960.jpg"
  description: "How to mod Oblivion and use OBSE on the Stema Deck"
---

## Summary
Authored by [canderous](https://www.resetera.com/members/canderous.71764/), original [publication](https://www.resetera.com/threads/steam-deck-ot-your-games-are-going-places.556834/post-86633702)

Run Oblivion at least once before starting so you can go into the launcher and setup your graphics settings etc.  
  
1. Go into Desktop mode  
  
2. Download latest OBSE [here](https://www.nexusmods.com/oblivion/mods/37952) and extract it to a folder somewhere (important to pre-extract it before copying to game folder). Copy and paste the extracted OBSE files/folders to your main Oblivion folder (the folder that has OblivionLauncher.exe). If you don't know where to find this, right click the game in Steam then go to Manage -> Browse local files. You know you did it right if you see the "obse" files in the same folder as OblivionLauncher.exe (there should also be a OBSE folder inside Oblivion\Data).  
  
3. In file manager, right click inside the Oblivion folder and click "Open in Terminal" which opens up Konsole inside that folder.  
  
4. Copy and paste the following lines one at a time into the Konsole (I think only the first line is necessary due to step 5 but I did both anyway)  

Code:

```bash
printf '\x90\x90\x90' | dd conv=notrunc of=obse_loader.exe bs=1 seek=$((0x14cb))
printf 'obse_loader\x00' | dd conv=notrunc of=OblivionLauncher.exe bs=1 seek=$((0x1347c))
```

You can close Konsole now.  
  
5. Rename OblivionLauncher.exe to something like OblivionLauncherBackup.exe and then rename obse_loader.exe to OblivionLauncher.exe  
(this is so it properly uses OBSE when launching from gaming mode -- if you need access to the launcher in the future, just temporarily reverse what you just did)  
  
6. Download [NorthernUI](https://www.nexusmods.com/oblivion/mods/48577) and also get [SkyBSA](https://www.nexusmods.com/oblivion/mods/49568/). Extract each zip file to a temporary folder somewhere (like step 2, it's important to pre-extract before copying into game folder). Reason you do this is there can be weird issues if you extract zips directly into Oblivion folder (no idea why). Copy and paste the extracted NorthernUI and SkyBSA files/folders into the Oblivion\**Data** folder. When you get the pop up just use the "write into" option and apply to all files. Remember to only copy the contents of the temp folders you extracted to, not the temp folder itself.  
  
If you skip any of these steps it probably won't work. You should be able to go back into gaming mode now and when you run Oblivion it will bypass the launcher and go right into the game. You should see the new UI in the main menu. You can adjust controller settings in there.  
  
Steam may have previously set your steam input controller settings to one of the community layouts for the game, so change it back to one of the generic gamepad ones.  
  
I also installed the [unofficial patch](https://www.nexusmods.com/oblivion/mods/5296) mods to fix all the bugs (same process as step 6). In addition to the main one there's also one for shivering isles and the other DLCs. But if you go any deeper into modding you probably need to look into running a mod manager to handle load orders. Just using NorthernUI and unofficial patches there is no need for that.