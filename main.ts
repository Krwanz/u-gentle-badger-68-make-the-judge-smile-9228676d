// Make the Judge Smile — one line about a small good thing that happened today.
// The program writes the line to /output/entry.txt (gate: UTF-8, 1-200 chars).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "The neighbour's cat, who hisses at everyone, climbed into my lap at 6 a.m. and fell asleep mid-purr.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const text = line.trim();
if (text.length < 1 || text.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${text.length}`);
}
if (!/\S/.test(text)) {
  throw new Error("entry must not be only white space");
}
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
console.log(`wrote ${text.length} characters to ${join(outDir, "entry.txt")}`);
