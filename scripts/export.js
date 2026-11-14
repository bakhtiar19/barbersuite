// Cross-platform static HTML export script for cPanel / Shared Hosting
process.env.NEXT_EXPORT = "true";
const { execSync } = require("child_process");

console.log("🚀 Building static export for cPanel / Shared Hosting / Apache / Nginx...");
try {
  execSync("npx next build", { stdio: "inherit", env: process.env });
  console.log("\n✅ Static export complete! All files are in the ./out folder.");
  console.log("👉 Upload the contents of ./out directly to your hosting public_html folder.");
} catch (error) {
  console.error("❌ Export failed:", error.message);
  process.exit(1);
}
