import { mkdirSync, writeFileSync } from "node:fs";

// Invent a Word We Need — entry program.
// It writes one invented word plus its one-line definition to /output/entry.txt.
// The gate allows 1 to 140 characters of UTF-8 text, so the line is kept short.
const entry =
  "Idletigue (n.): the heavy tiredness that comes from doing nothing all day.";

// The gate allows 1 to 140 characters of UTF-8 text, so the line is kept short.
// Fail loudly instead of writing an entry the gate would refuse.
if ([...entry].length < 1 || [...entry].length > 140) {
  throw new Error(`entry is ${[...entry].length} characters, must be 1-140`);
}
if (entry.trim() !== entry || entry.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

// The grader mounts /output; create it only when it is missing.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
