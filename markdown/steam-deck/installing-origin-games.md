---
title: "Installing Games from Origin"
link: "https://www.reddit.com/r/SteamDeck/comments/tx6srv/guide_installing_origin_on_the_steam_deck_the/"
section: "Origin,EA,Steam Deck,Steam,Guides,Non-Steam Game"
og:
  image: "https://img.finalfantasyxiv.com/t/4df4681d0af855b1a77d5d75d86925d7e110206a.png?1646399861"
  description: "The EA Play app has issues in game mode for the Steam Deck, so this is a good way to install Origin games instead."
---

## Summary

Authored by [u/renssies](https://www.reddit.com/user/renssies/), original [publication](https://www.reddit.com/r/SteamDeck/comments/tx6srv/guide_installing_origin_on_the_steam_deck_the/).

I found that there is no good guide on installing games through Origin on the Steam Deck. Only people that suggest using Lutris which has some issues at the moment. Others only install one game through Origin and the problems start when you install multiple. So I wanted to write up a better guide .

This post is based on the video "STEAM DECK - How to install ORIGIN LAUNCHER" by Mva. However, I found multiple flaws with his method. Mostly that it only installs one game and breaks when you try to update Origin. It also doesn't add the game to Steam separately. Not having games separately in Steam also means you can't have a separate controller layout per game (plus for Origin).

While I don't have the time to give too much support, let me know if there are any questions, other people might be happy to help as well.

This guide has been tested with The Sims 2 and The Sims 4 but likely works for all other Origin games. Tested this with the Sims 3 as well, but some people are reporting problems with the launcher, make sure to use TS3W.exe for the Sims 3.

If anyone wants to make a video on this, feel free. I don't have the face or skills to turn it into a video. Same if you want to make a guide with better writing, feel free to do so :)

This does seem to work with the EA Play/EA App, gaming mode seems to have an issue with how that app is build.

## Instructions

Authored by [u/renssies](https://www.reddit.com/user/renssies/), original [publication](https://www.reddit.com/r/SteamDeck/comments/tx6srv/guide_installing_origin_on_the_steam_deck_the/).

### Installing Origin

1.  Go into Desktop mode, you can do this by opening the Power menu of the Steam Deck.
2.  Download Origin (OriginThinSetup.exe) from the Origin website. You either need to do this on a Windows PC and transfer it to the Steam Deck or fake the User-Agent on the browser on Steam Deck.
3.  Open Steam and click the plus in the bottom left corner, select "Add non steam game"
4.  Click Browse... and in the bottom next to "File type:" select "All Files"
5.  Browse to the OriginThinSetup.exe, it is likely in `/home/deck/downloads`
6.  Click "Add selected program"
7.  Find OriginThinSetup.exe in your Steam Library, Right-Click and choose Properties...
8.  Go to compatibility, check "Force compatibility" and select either Proton 7.0-1 or Proton Experimental from the list.
9.  Close the window and launch OriginThinSetup.exe, walk through the installation, and exit Origin completely once you've logged in.

### Adding Origin to Steam

1.  Go into Desktop mode, you can do this by opening the Power menu of the Steam Deck.
2.  If you've followed the above steps you still have OriginThinSetup.exe in your Steam Library.
3.  Find the OriginThinSetup.exe and once again Right-click and choose Properties...
4.  Scroll down and select Browse.... and in the bottom next to "File type:" select "All Files"
5.  You are now going to look for Origin's "wine prefix" folder, it will be in `/home/deck/.local/share/Steam/steamapps/compatdata.` Look for a folder with a name consisting of 10 numbers, If you have multiple then look at the "Date Modified" or open the folder and subfolders and check the contents. Remember the number, you will need it for adding the games to Steam separately.
6.  Inside the wine prefix folder go to `pfx/drive_c/Program Files (x86)/Origin`. Inside that folder should be "Origin.exe", select it and press open.
7.  Feel free to now name the shortcut "Origin" and close the window
8.  You can now launch Origin and install the games you want. You can also press play from here to play the games, but you might want to directly add them to Steam as well.

**Note:** If you get the insufficient disk space error when installing a game, just select browse, go to the Origin Games folder and press open again the error will now be gone.

### Adding the games to Steam separately

1.  Open Origin and install the games you want to install. See the previous steps
2.  Exit origin fully, this means no Origin logo should appear in the taskbar.
3.  Open Steam and click the plus in the bottom left corner, select "Add non steam game"
4.  Click Browse... and browse to the Wine prefix folder in which Origin is installed. See step 4 from the previous chapter "Adding Origin to Steam"
5.  In the bottom next to "File type:" select "All Files"
6.  Now browse to `pfx/drive_c/Program Files (x86)/Origin Games` and enter the folder of the game you want to add. Look for the .exe of the game, if you can't find it look online. For EA games it is often in 2 subfolders named `Game/Bin`
7.  Select the .exe and click open
8.  Look up the game in you Steam Library, it will likely be called the same as the exe file you've just selected. Right click it and select Properties...
9.  In the window that opens enter the name of the game. If you enter the name exactly as it appears on Steam (if the game is available on Steam) it will help you with finding Community based controller layouts. You can find the name on SteamDB.
10. Now comes a more tricky part, so feel free to read the following steps a few times to be sure.
11. On the shortcut page scroll down to "Launch options" and exactly enter the following but replace `{ORIGIN_NUMBER}` with the number of the wine prefix for Origin: `STEAM_COMPAT_DATA_PATH="/home/deck/.local/share/Steam/steamapps/compatdata/{ORIGIN NUMBER}" %command%`. So if my Origin is installed in folder `2450754673` the full value of "Launch options" becomes `STEAM_COMPAT_DATA_PATH="/home/deck/.local/share/Steam/steamapps/compatdata/2450754673" %command%`. This will point Steam Play/Proton to start in the directory Origin is installed in. This will fix the issue with updating Origin and games, and having to login for each game individually.
12. Do not close the window yet! Instead go to Compatiblity and once again check the "Force compatibility" checkbox and select either "Proton 7.0-1" or "Proton Experimental"
13. You can now close the window and go into gaming mode if you want. The game should now run and you can use the Origin shortcut in Steam to update Origin or the game.

**Note:** If games do not work as expected try disabling Origin in game.

**Note:** If you end up with a black screen after closing the game you can manually click "Close game" on the Steam menu, it simply means Origin is still open in the background, close game will exit origin.

### Origin Can't Find the Game?

Authored by [u/Appoxo](https://www.reddit.com/user/Appoxo/), original [publication](https://www.reddit.com/r/SteamDeck/comments/tx6srv/comment/i5wy6tz/?utm_source=reddit&utm_medium=web2x&context=3).

Use a symlink:  
`ln -s "/home/deck/.local/share/Steam/steamapps/compatdata/{GAME_WINE_PREFIX}/pfx/drive_c/Program Files (x86)/Origin Games/FIFA 17/" "/home/deck/.local/share/Steam/steamapps/compatdata/{ORIGIN_WINE_PREFIX}/pfx/drive_c/Program Files (x86)/Origin Games/"`

If Origin still can't find the game, try to use "Locate Game".