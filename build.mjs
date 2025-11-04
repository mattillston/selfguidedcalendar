import { build } from "esbuild"
import { mkdirSync } from "fs"

mkdirSync("dist", { recursive: true })

await build({
  entryPoints: ["src/widget-entry.js"],
  outfile: "dist/calendar-widget.js",
  bundle: true,
  minify: true,
  target: ["es2019"],
  format: "iife",
  globalName: "TourCalendarWidget",
  loader: {
    ".css": "text",
  },
})

console.log("Built dist/calendar-widget.js")
