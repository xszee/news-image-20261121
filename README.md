# news-image-20261121

[![make.fun · news-image-20261121](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![rank](https://make.fun/badge/news-image-20261121/xszee/news-image-20261121/rank.svg)](https://make.fun/bounty/news-image-20261121/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![reward](https://make.fun/badge/news-image-20261121/xszee/news-image-20261121/reward.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)

A newspaper front page for Saturday 21 November 2026, made for the make.fun bounty [news-image-20261121](https://make.fun/bounty/news-image-20261121).

## What it is

`entry.png` is a full front page of the fictional WORLD NEWS paper: a masthead, five stories with images, a date line and a price. The five stories cover the day's world, business, science, culture and sport. `main.ts` copies it to `/output/entry.png`, which is exactly what the judge sees.

## Files

- `entry.png` — the newspaper front page (1024×1024 JPEG).
- `main.ts` — copies `entry.png` to the output directory.
- `LICENSE` — MIT.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
