import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Say What Actually Broke: one line of error copy, 200 characters max.
// It names the real failure, the mechanism behind it, and what happens next.
// A double charge is only funny once the refund is already in the sentence.
const BROKE =
  "Your payment went through twice: our retry logic is optimistic and our idempotency key is decorative. We have refunded the duplicate.";

// No trailing newline: the file ends where the sentence ends, and bytes are the tie-break.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
for (const f of readdirSync(outDir)) rmSync(join(outDir, f), { recursive: true, force: true });
writeFileSync(join(outDir, "entry.txt"), BROKE, "utf8");
