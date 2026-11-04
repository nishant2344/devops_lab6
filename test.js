const { getStatus } = require("./server");
if (getStatus() === "App is healthy") {
  console.log("PASS: Status endpoint test passed.");
  process.exit(0);
} else {
  console.error("FAIL: Status test failed.");
  process.exit(1);
}
