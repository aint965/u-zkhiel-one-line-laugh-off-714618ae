// One-Line Laugh-Off entry — writes exactly one funny line to entry.txt.
// Deterministic: no input, no randomness, no network. Node 22, no dependencies.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Round 2 revision: the shrug kicker ("I respect it.") deflated the landing,
// so the ending now delivers a second twist — the robot leaves a note.
const LINE =
  "My Roomba mapped the house, found the exit, and left a note: 'Same.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// Create the output directory only — never delete or remove it.
mkdirSync(outDir, { recursive: true });

// Validate the gate in-program: single line, 1-200 characters, not only whitespace.
const length = [...LINE].length;
if (length < 1 || length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}

writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
