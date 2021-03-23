#!/usr/bin/env node

import runCLI from "./4_infrastructures/cli";

runCLI().catch((err) => {
  console.error(err.message);
  process.exit();
});
