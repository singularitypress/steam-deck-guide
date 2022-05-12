---
title: "Using a Custom dll"
link: "https://www.resetera.com/threads/steam-deck-ot-your-games-are-going-places.556834/post-86471672"
section: "Modding,Guides,Steam Deck,Steam"
og:
  image: "https://uploads.golmedia.net/uploads/articles/article_media/14499073841607682878gol1.png"
  description: "Being able to use a custom dll on Steam Deck games (i.e. Reshade, Special K, etc)."
---

## Summary

If you want to use things like ReShade, Special K, Durante's DSFix, Great Ace Attorney fps unlocker, Trails in the Sky voice patches, et al. you'll need to add a custom `dll` to the game folder next to your `exe`. On Steam OS, that alone isn't sufficient though.

Authored by [strudelkuchen](https://www.resetera.com/members/strudelkuchen.2745/), original [publication](https://www.resetera.com/threads/steam-deck-ot-your-games-are-going-places.556834/post-86471672)

## Instructions

Add the following to the launch parameters of the game you're dropping a custom `dll` into:

```bash
WINEDLLOVERRIDES="YOUR_DLL_NAME=n,b" %command%
```

Replace `YOUR_DLL_NAME` with whatever your `dll` is called, i.e. if it's `dxgi.dll`, replace `YOUR_DLL_NAME` with `dxgi`.

## Example

Let's say you want to use [reframework](https://www.nexusmods.com/monsterhunterrise/mods/26) with Monster Hunter Rise: you would put the `dinput8.dll` file next to the game's exe and then change the launch parameter for the game like this: `WINEDLLOVERRIDES="dinput8.dll=n,b" %command%`

`n` stands for `native` and `b` stands for `builtin`, which means `WINEDLLOVERRIDES="dinput8.dll=n,b"` tells wine (proton): try to load `dinput8.dll` as native windows dll first and try the builtin version if the native load fails.

source: [https://linux.die.net/man/1/wine](https://linux.die.net/man/1/wine) (search for *WINEDLLOVERRIDES*)
