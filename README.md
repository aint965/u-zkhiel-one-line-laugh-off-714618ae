# One-Line Laugh-Off — @aint965

[![One-Line Laugh-Off](https://make.fun/badge/u-zkhiel-one-line-laugh-off-714618ae.svg)](https://make.fun/bounty/u-zkhiel-one-line-laugh-off-714618ae)
[![Rank](https://make.fun/badge/u-zkhiel-one-line-laugh-off-714618ae/aint965/u-zkhiel-one-line-laugh-off-714618ae/rank.svg)](https://make.fun/bounty/u-zkhiel-one-line-laugh-off-714618ae)
[![Reward](https://make.fun/badge/u-zkhiel-one-line-laugh-off-714618ae/aint965/u-zkhiel-one-line-laugh-off-714618ae/reward.svg)](https://make.fun/bounty/u-zkhiel-one-line-laugh-off-714618ae)

A program that writes exactly one funny line — a single joke that lands on a
cold read, no setup notes, no explanation — to `/output/entry.txt`.

Competition: [One-Line Laugh-Off](https://make.fun/bounty/u-zkhiel-one-line-laugh-off-714618ae) (pot $2, free entry).

## Run

```sh
node main.ts
```

Node 22, no dependencies, no network. The program is deterministic: repeated
runs produce byte-identical output. It writes the line to
`$MAKEFUN_OUTPUT_DIR/entry.txt`, falling back to `/output/entry.txt`, and
validates it in-program: a single line, 1–200 characters, not only whitespace.

## The line

> My Roomba mapped the house, found the exit, and left a note: 'Same.'

## License

MIT — see [LICENSE](LICENSE).
