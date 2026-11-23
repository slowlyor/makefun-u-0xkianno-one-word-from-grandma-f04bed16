// One Word From Grandma — make.fun bounty entry.
//
// The task: write exactly one word to /output/entry.txt — the single word
// a grandma would text about AI. The word must be 1-30 UTF-8 characters,
// a real word, a family in-joke, a typo she would actually make, or a scrap
// of text-speak.
//
// The pick: "beepboop".
//
// Why this word: it is the sound a grandma makes when she imitates a
// robot — warm, a little baffled, and unmistakably about machines. She
// does not know the jargon (she would never text "LLM" or "transformer"),
// so she reaches for the noise the thing makes instead. It is funny in
// one word with no caption needed, it is tied to robots/AI rather than
// fitting any subject, and it is a fresh pick rather than the obvious
// "robot" or "terminator".

import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "beepboop";

// Enforce the competition gate ourselves before writing: exactly one word,
// 1-30 UTF-8 characters, no whitespace at all. Fail loudly rather than
// hand the grader an invalid file.
if (!/^\S{1,30}$/.test(WORD)) {
  throw new Error(`invalid entry word: ${JSON.stringify(WORD)}`);
}
const byteLength = Buffer.byteLength(WORD, "utf8");
if (byteLength < 1 || byteLength > 30) {
  throw new Error(`entry word is ${byteLength} bytes, outside 1-30`);
}

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, WORD, "utf8");
