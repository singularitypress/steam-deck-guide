---
title: "Using a Custom dll"
link: ""
section: "Modding,Guides,Steam Deck,Steam"
og:
  image: ""
  description: "Being able to use a custom dll on Steam Deck games (i.e. Reshade, Special K, etc)."
---

## Summary
If you want to use things like ReShade, Special K, Durante's DSFix, Great Ace Attorney fps unlocker, Trails in the Sky voice patches, et al. you'll need to add a custom `dll` to the game folder. On Steam OS, that alone isn't sufficient though.

## Instructions
Add the following to the launch parameters of the game you're dropping a custom `dll` into:

```bash
WINEDLLOVERRIDES="YOUR_DLL_NAME=n,b" %command%
```

Replace `YOUR_DLL_NAME` with whatever your `dll` is called, i.e. if it's `dxgi.dll`, replace `YOUR_DLL_NAME` with `dxgi`.
