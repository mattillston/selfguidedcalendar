import styles from "../styles.css"
import { initCalendarApp } from "../calendar.js"

const STYLE_TAG_ID = "tour-calendar-widget-styles"

function ensureStyles() {
  if (typeof document === "undefined") return
  if (document.getElementById(STYLE_TAG_ID)) return

  const styleEl = document.createElement("style")
  styleEl.id = STYLE_TAG_ID
  styleEl.textContent = styles
  document.head.appendChild(styleEl)
}

ensureStyles()

if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      () => {
        initCalendarApp()
      },
      { once: true }
    )
  } else {
    initCalendarApp()
  }
}

export { initCalendarApp }
