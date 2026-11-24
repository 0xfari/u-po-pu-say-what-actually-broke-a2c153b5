import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line of software error copy, at most 200 characters, telling the
// user the brutal truth about the failure and making them laugh.
// Writes it to /output/entry.txt.
const LINE =
  "We lost your file the honest way: nobody backed it up, everybody assumed somebody else did, and now it lives only in our apologies.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
for (const f of readdirSync(outDir)) rmSync(join(outDir, f), { recursive: true, force: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
