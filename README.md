# Punish Your Boyfriend 😈

Single-screen Vite + vanilla JS mini-game. Press SLAP! as often as you like.

```
npm install
npm run dev      # develop
npm run build    # static site in dist/ (relative asset paths, host anywhere)
```

## Assets
- `reference-assets/` – original supplied sheet (untouched).
- `public/assets/characters/` – sprites cut from the sheet with `rembg` (isnet-anime model), then cleaned
  (stray fragments removed, bottom crop shadows trimmed).
- `public/assets/effects/` – small SVG sweat drop / star.

### Known imperfections
- **Impact burst, slash, dust, anger mark**: the sheet's glowing effects sit on a baked-in glow and did not cut
  out cleanly, so they were not used. The burst + "SLAP!" text are inline SVG in `index.html`.
- **Mid-swing arm (`gf_arm_mid`)** is mirrored relative to the other two arm poses, so it is not used; the slap
  uses wind-up → slap sprites plus CSS rotation around the shoulder.
- Girlfriend's own hip arm stays visible under the slap arm overlay (the body is a single illustration).
- Boyfriend's hurt/dizzy busts are overlaid on his full-body sprite; the sprite match is approximate.
  `boyfriend_recover` and the girlfriend head variants were extracted but are unused.
- Boyfriend sprite has a small residual notch between his legs where leftover sheet glow was removed.

## Sound
No audio file was supplied, so the slap is synthesized with the Web Audio API (`src/main.js`) – crack + pop + boing,
pitch-jittered, created on first pointer press to satisfy autoplay rules. Every click makes a new overlapping sound.

## Animation retriggering
Each click removes and re-adds `.slapping` on the stage with a forced reflow, restarting all keyframes from the
neutral pose. The button is never disabled; transforms live only in keyframes, so nothing accumulates.
