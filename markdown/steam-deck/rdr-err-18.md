---
title: "Red Dead Redemption 2 - Error 18"
link: "https://www.reddit.com/r/PCRedDead/comments/dyk56f/fix_for_social_club_failed_to_initialize_graphics/"
section: "Red Dead Redemption 2,Rockstar Launcher,Errors,Steam Deck,Steam,Guides"
og:
  image: "https://i.imgur.com/xyyDFCb.png"
  description: "Encountering an error launching Red Dead Redemption 2, Social Club failed to initialize graphics device. Error code: 18"
---

## Summary

Note, the Steam version of Red Dead Redemption 2 [supposedly](https://www.resetera.com/threads/steam-deck-ot-your-games-are-going-places.556834/post-86474402) (I've never tried it) works out of the box, but [may require](https://www.resetera.com/threads/steam-deck-ot-your-games-are-going-places.556834/post-86496458) some tweaks in case you run into Error 18.

## Instructions

Authored by [u/Wickex](https://www.reddit.com/user/Wickex/), original [publication](https://www.reddit.com/r/PCRedDead/comments/dyk56f/fix_for_social_club_failed_to_initialize_graphics/).

In your `system.xml` file, change `<API>kSettingAPI_Vulkan</API>` to `<API>kSettingAPI_DX12</API>`. I haven't installed this myself so you'd likely have to find it yourself. My assumption is that it lives at `.local/share/Steam/steamapps/compatdata/{RDR2 GAME FOLDER NUMBER}/pfx/drive_c/users/steamuser/Documents/Rockstar Games/Social Club/Red Dead Redemption 2/settings`.