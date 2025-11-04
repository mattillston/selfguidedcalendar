// Tour availability data
const TOUR_AVAILABILITY = {
  2025: {
    11: {
      1: {
        available: true,
        duration: 8,
        note: "Great views at this time",
        prices: [
          { min: 1, max: 2, adult: 1399, child: 1199, sku: "SKU001-1-2" },
          { min: 3, max: 4, adult: 1299, child: 1099, sku: "SKU001-3-4" },
        ],
      },
      2: {
        available: true,
        duration: 8,
        prices: [
          { min: 1, max: 2, adult: 1399, sku: "SKU002-1-2" },
          { min: 3, max: 4, adult: 1299, sku: "SKU002-3-4" },
        ],
      },
      3: {
        available: true,
        duration: 8,
        note: "Peak season - book early",
        prices: [
          { min: 1, max: 2, adult: 1399, child: 1199, sku: "SKU003-1-2" },
          { min: 3, max: 4, adult: 1299, child: 1099, sku: "SKU003-3-4" },
        ],
      },
      4: {
        available: true,
        duration: 8,
        prices: [
          { min: 1, max: 2, adult: 1499, sku: "SKU004-1-2" },
          { min: 3, max: 4, adult: 1399, sku: "SKU004-3-4" },
        ],
      },
      5: {
        available: true,
        duration: 8,
        prices: [
          { min: 1, max: 2, adult: 1399, sku: "SKU005-1-2" },
          { min: 3, max: 4, adult: 1299, sku: "SKU005-3-4" },
        ],
      },
      6: { available: true, duration: 8, prices: [{ min: 1, max: 4, adult: 1299, sku: "SKU006-1-4" }] },
      7: { available: true, duration: 8, prices: [{ min: 1, max: 4, adult: 1299, sku: "SKU007-1-4" }] },
      8: {
        available: true,
        duration: 8,
        prices: [
          { min: 1, max: 2, adult: 1399, sku: "SKU008-1-2" },
          { min: 3, max: 4, adult: 1299, sku: "SKU008-3-4" },
        ],
      },
      9: { available: true, duration: 8, prices: [{ min: 1, max: 4, adult: 1299, sku: "SKU009-1-4" }] },
      10: {
        available: true,
        duration: 8,
        note: "Limited availability",
        prices: [
          { min: 1, max: 2, adult: 1499, sku: "SKU010-1-2" },
          { min: 3, max: 4, adult: 1399, sku: "SKU010-3-4" },
        ],
      },
      11: { available: false, duration: 8, prices: [{ min: 1, max: 4, adult: 1299, sku: "SKU011-1-4" }] },
      12: {
        available: true,
        duration: 8,
        prices: [
          { min: 1, max: 2, adult: 1499, sku: "SKU012-1-2" },
          { min: 3, max: 4, adult: 1399, sku: "SKU012-3-4" },
        ],
      },
      13: { available: true, duration: 8, prices: [{ min: 1, max: 4, adult: 1299, child: 1099, sku: "SKU013-1-4" }] },
      14: { available: true, duration: 8, prices: [{ min: 1, max: 4, adult: 1299, sku: "SKU014-1-4" }] },
      15: { available: true, duration: 8, prices: [{ min: 1, max: 4, adult: 1299, sku: "SKU015-1-4" }] },
      16: {
        available: true,
        duration: 8,
        prices: [
          { min: 1, max: 2, adult: 1499, sku: "SKU016-1-2" },
          { min: 3, max: 4, adult: 1399, sku: "SKU016-3-4" },
        ],
      },
      17: { available: true, duration: 8, prices: [{ min: 1, max: 4, adult: 1299, child: 1099, sku: "SKU017-1-4" }] },
      18: { available: true, duration: 8, prices: [{ min: 1, max: 4, adult: 1299, sku: "SKU018-1-4" }] },
      19: { available: true, duration: 8, prices: [{ min: 1, max: 4, adult: 1299, sku: "SKU019-1-4" }] },
      20: {
        available: true,
        duration: 8,
        prices: [
          { min: 1, max: 2, adult: 1499, sku: "SKU020-1-2" },
          { min: 3, max: 4, adult: 1399, sku: "SKU020-3-4" },
        ],
      },
      21: { available: false, duration: 8, prices: [{ min: 1, max: 4, adult: 1299, sku: "SKU021-1-4" }] },
      22: {
        available: true,
        duration: 8,
        prices: [
          { min: 1, max: 2, adult: 1499, sku: "SKU022-1-2" },
          { min: 3, max: 4, adult: 1399, sku: "SKU022-3-4" },
        ],
      },
      23: { available: true, duration: 8, prices: [{ min: 1, max: 4, adult: 1299, sku: "SKU023-1-4" }] },
      24: { available: true, duration: 10, prices: [{ min: 1, max: 4, adult: 1299, child: 1099, sku: "SKU024-1-4" }] },
      25: {
        available: true,
        duration: 10,
        prices: [
          { min: 1, max: 2, adult: 1399, sku: "SKU025-1-2" },
          { min: 3, max: 4, adult: 1299, sku: "SKU025-3-4" },
        ],
      },
      26: {
        available: true,
        duration: 10,
        prices: [
          { min: 1, max: 2, adult: 1499, sku: "SKU026-1-2" },
          { min: 3, max: 4, adult: 1399, sku: "SKU026-3-4" },
        ],
      },
      27: { available: true, duration: 10, prices: [{ min: 1, max: 4, adult: 1299, sku: "SKU027-1-4" }] },
      28: { available: true, duration: 10, prices: [{ min: 1, max: 4, adult: 1299, sku: "SKU028-1-4" }] },
      29: {
        available: true,
        duration: 10,
        prices: [
          { min: 1, max: 2, adult: 1399, sku: "SKU029-1-2" },
          { min: 3, max: 4, adult: 1299, sku: "SKU029-3-4" },
        ],
      },
      30: {
        available: true,
        duration: 10,
        prices: [
          { min: 1, max: 2, adult: 1499, sku: "SKU030-1-2" },
          { min: 3, max: 4, adult: 1399, sku: "SKU030-3-4" },
        ],
      },
    },
    12: {
      1: { available: true, duration: 10, prices: [{ min: 1, max: 4, adult: 1499, child: 1199, sku: "SKU101-1-4" }] },
      2: { available: true, duration: 10, prices: [{ min: 1, max: 4, adult: 1499, sku: "SKU102-1-4" }] },
      3: { available: true, duration: 10, prices: [{ min: 1, max: 4, adult: 1499, sku: "SKU103-1-4" }] },
      4: { available: true, duration: 10, prices: [{ min: 1, max: 4, adult: 1499, sku: "SKU104-1-4" }] },
      5: { available: true, duration: 10, prices: [{ min: 1, max: 4, adult: 1499, sku: "SKU105-1-4" }] },
      6: { available: true, duration: 10, prices: [{ min: 1, max: 4, adult: 1499, sku: "SKU106-1-4" }] },
      7: { available: true, duration: 10, prices: [{ min: 1, max: 4, adult: 1499, sku: "SKU107-1-4" }] },
      8: { available: true, duration: 10, prices: [{ min: 1, max: 4, adult: 1499, sku: "SKU108-1-4" }] },
      9: { available: true, duration: 10, prices: [{ min: 1, max: 4, adult: 1499, sku: "SKU109-1-4" }] },
      10: { available: true, duration: 10, prices: [{ min: 1, max: 4, adult: 1499, sku: "SKU110-1-4" }] },
      11: { available: false, duration: 10, prices: [{ min: 1, max: 4, adult: 1299, sku: "SKU111-1-4" }] },
      12: {
        available: true,
        duration: 10,
        prices: [
          { min: 1, max: 2, adult: 1499, sku: "SKU112-1-2" },
          { min: 3, max: 4, adult: 1399, sku: "SKU112-3-4" },
        ],
      },
      13: { available: true, duration: 10, prices: [{ min: 1, max: 4, adult: 1299, child: 1099, sku: "SKU113-1-4" }] },
      14: { available: true, duration: 10, prices: [{ min: 1, max: 4, adult: 1499, sku: "SKU114-1-4" }] },
      15: {
        available: true,
        duration: 10,
        prices: [
          { min: 1, max: 2, adult: 1499, sku: "SKU115-1-2" },
          { min: 3, max: 4, adult: 1399, sku: "SKU115-3-4" },
        ],
      },
      16: {
        available: true,
        duration: 10,
        prices: [
          { min: 1, max: 2, adult: 1499, sku: "SKU116-1-2" },
          { min: 3, max: 4, adult: 1399, sku: "SKU116-3-4" },
        ],
      },
      17: { available: true, duration: 10, prices: [{ min: 1, max: 4, adult: 1499, sku: "SKU117-1-4" }] },
      18: { available: true, duration: 10, prices: [{ min: 1, max: 4, adult: 1499, sku: "SKU118-1-4" }] },
      19: { available: true, duration: 10, prices: [{ min: 1, max: 4, adult: 1499, sku: "SKU119-1-4" }] },
      20: {
        available: true,
        duration: 10,
        prices: [
          { min: 1, max: 2, adult: 1699, sku: "SKU120-1-2" },
          { min: 3, max: 4, adult: 1599, sku: "SKU120-3-4" },
        ],
      },
      21: {
        available: true,
        duration: 10,
        prices: [
          { min: 1, max: 2, adult: 1699, sku: "SKU121-1-2" },
          { min: 3, max: 4, adult: 1599, sku: "SKU121-3-4" },
        ],
      },
      22: { available: false, duration: 10, prices: [{ min: 1, max: 4, adult: 1299, sku: "SKU122-1-4" }] },
      23: { available: true, duration: 10, prices: [{ min: 1, max: 4, adult: 1699, sku: "SKU123-1-4" }] },
      24: { available: true, duration: 10, prices: [{ min: 1, max: 4, adult: 1699, sku: "SKU124-1-4" }] },
      25: { available: true, duration: 10, prices: [{ min: 1, max: 4, adult: 1699, sku: "SKU125-1-4" }] },
      26: { available: true, duration: 10, prices: [{ min: 1, max: 4, adult: 1699, sku: "SKU126-1-4" }] },
      27: { available: true, duration: 10, prices: [{ min: 1, max: 4, adult: 1699, sku: "SKU127-1-4" }] },
      28: {
        available: true,
        duration: 10,
        prices: [
          { min: 1, max: 2, adult: 1499, sku: "SKU128-1-2" },
          { min: 3, max: 4, adult: 1399, sku: "SKU128-3-4" },
        ],
      },
      29: {
        available: true,
        duration: 10,
        prices: [
          { min: 1, max: 2, adult: 1499, sku: "SKU129-1-2" },
          { min: 3, max: 4, adult: 1399, sku: "SKU129-3-4" },
        ],
      },
      30: {
        available: true,
        duration: 10,
        prices: [
          { min: 1, max: 2, adult: 1499, sku: "SKU130-1-2" },
          { min: 3, max: 4, adult: 1399, sku: "SKU130-3-4" },
        ],
      },
      31: {
        available: true,
        duration: 10,
        prices: [
          { min: 1, max: 2, adult: 1499, sku: "SKU131-1-2" },
          { min: 3, max: 4, adult: 1399, sku: "SKU131-3-4" },
        ],
      },
    },
  },
}

const DEFAULT_TOUR_DURATION_DAYS = 8
const today = new Date()

let currentDate = new Date(today.getFullYear(), today.getMonth(), 1)
let adultCount = 1
let childCount = 0
let selectedDate = null

// Helper functions
function getPriceBandForGroupSize(dayInfo, groupSize) {
  if (!dayInfo) return null
  const exact = dayInfo.prices.find((b) => groupSize >= b.min && groupSize <= b.max)
  if (exact) return exact
  const sorted = [...dayInfo.prices].sort((a, b) => a.min - b.min)
  return sorted.length ? sorted[sorted.length - 1] : null
}

function setAdultCount(n) {
  adultCount = Math.max(1, n)
  // Enforce max 2 children per adult
  const maxChildren = adultCount * 2
  childCount = Math.min(childCount, maxChildren)
  updateUI()
}

function setChildCount(n) {
  const maxChildren = adultCount * 2
  childCount = Math.max(0, Math.min(n, maxChildren))
  updateUI()
}

function getMonthData() {
  const year = currentDate.getFullYear()
  const month = currentDate.getMonth() + 1
  return TOUR_AVAILABILITY[year]?.[month] ?? {}
}

function renderCalendar() {
  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()
  const monthData = getMonthData()

  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  const daysInMonth = lastDay.getDate()
  const startingDayOfWeek = firstDay.getDay()

  const calendarDaysEl = document.getElementById("calendar-days")
  calendarDaysEl.innerHTML = ""

  // Empty cells
  for (let i = 0; i < startingDayOfWeek; i++) {
    const emptyDiv = document.createElement("div")
    emptyDiv.className = "calendar-day empty"
    calendarDaysEl.appendChild(emptyDiv)
  }

  // Date cells
  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(year, month, i)
    const dayNum = i
    const dayData = monthData[dayNum]
    const cellBand = getPriceBandForGroupSize(dayData, adultCount + childCount)
    const isAvailable = dayData?.available ?? false
    const priceAdult = cellBand?.adult
    const priceChild = cellBand?.child
    const isPast = date < today && date.toDateString() !== today.toDateString()

    const button = document.createElement("button")
    button.className = "calendar-day"
    button.disabled = !isAvailable || isPast

    const isStart =
      selectedDate &&
      date.getFullYear() === selectedDate.getFullYear() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getDate() === selectedDate.getDate()

    const isHighlighted =
      selectedDate &&
      !isStart &&
      (() => {
        const diffTime = date.getTime() - selectedDate.getTime()
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
        const selectedDayInfo = monthData[selectedDate.getDate()]
        const selectedDuration = selectedDayInfo?.duration ?? DEFAULT_TOUR_DURATION_DAYS
        return diffDays > 0 && diffDays < selectedDuration
      })()

    if (isPast) {
      button.classList.add("past")
    } else if (!isAvailable) {
      button.classList.add("unavailable")
    } else {
      button.classList.add("available")
    }

    if (isStart) {
      button.classList.add("selected")
    } else if (isHighlighted) {
      button.classList.add("highlighted")
    }

    let priceHTML = ""
    if (priceAdult != null) {
      priceHTML += `<span class="calendar-day-price">Adult £${priceAdult.toLocaleString("en-GB")}</span>`
    }
    if (priceChild != null) {
      priceHTML += `<span class="calendar-day-price">Child £${priceChild.toLocaleString("en-GB")}</span>`
    }

    let noteIcon = ""
    if (dayData?.note) {
      noteIcon = `<span class="note-icon" title="${dayData.note}">ℹ️</span>`
    }

    button.innerHTML = `${noteIcon}<span class="calendar-day-number">${dayNum}</span>${priceHTML}`

    button.addEventListener("click", () => handleDateClick(date, monthData))

    if (dayData?.note) {
      button.addEventListener("mouseenter", (e) => {
        showTooltip(e, dayData.note)
      })
      button.addEventListener("mouseleave", hideTooltip)
    }

    calendarDaysEl.appendChild(button)
  }
}

let currentTooltip = null

function showTooltip(event, text) {
  hideTooltip()

  const tooltip = document.createElement("div")
  tooltip.className = "tooltip"
  tooltip.textContent = text
  document.body.appendChild(tooltip)
  currentTooltip = tooltip

  const rect = event.target.getBoundingClientRect()
  tooltip.style.left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + "px"
  tooltip.style.top = rect.top - tooltip.offsetHeight - 8 + "px"
}

function hideTooltip() {
  if (currentTooltip) {
    currentTooltip.remove()
    currentTooltip = null
  }
}

function handleDateClick(date, monthData) {
  const dayNum = date.getDate()
  const dayData = monthData[dayNum]
  if (dayData?.available) {
    selectedDate = date
    updateUI()
  }
}

function renderBookingSummary() {
  const bookingSummaryEl = document.getElementById("booking-summary")
  const monthData = getMonthData()

  if (!selectedDate) {
    bookingSummaryEl.innerHTML = `
      <div class="text-center">
        <p class="muted-text">Select a departure date to see booking details</p>
      </div>
    `
    return
  }

  const selectedDayInfo = monthData[selectedDate.getDate()]
  const selectedDuration = selectedDayInfo?.duration ?? DEFAULT_TOUR_DURATION_DAYS
  const band = getPriceBandForGroupSize(selectedDayInfo, adultCount + childCount)
  const priceAdultPP = band?.adult ?? null
  const priceChildPP = band?.child ?? band?.adult ?? null
  const selectedSku = band?.sku ?? ""

  const totalPrice =
    priceAdultPP != null && priceChildPP != null ? priceAdultPP * adultCount + priceChildPP * childCount : 0

  const returnDate = new Date(selectedDate.getTime() + (selectedDuration - 1) * 24 * 60 * 60 * 1000)

  const startDate = selectedDate.toISOString().split("T")[0]
  const bookingUrl = `https://secure.keadventure.com/book?sku=${selectedSku}&date=${startDate}&adults=${adultCount}&children=${childCount}`

  const childrenLine =
    childCount > 0
      ? `
    <div class="booking-line">
      <span>Children (${childCount}) × £${priceChildPP?.toLocaleString("en-GB") ?? "—"}</span>
      <span>${priceChildPP != null ? "£" + (priceChildPP * childCount).toLocaleString("en-GB") : "—"}</span>
    </div>
  `
      : ""

  bookingSummaryEl.innerHTML = `
    <div class="booking-summary-content">
      <div class="booking-info">
        <p class="booking-label">Departure Date</p>
        <p class="booking-value">${selectedDate.toLocaleDateString("en-GB", { weekday: "long", month: "long", day: "numeric", year: "numeric" })}</p>
      </div>

      <div class="booking-info">
        <p class="booking-label">Return Date</p>
        <p class="booking-date">${returnDate.toLocaleDateString("en-GB", { month: "short", day: "numeric", year: "numeric" })}</p>
      </div>

      <div class="booking-breakdown">
        <div class="booking-line">
          <span>Adults (${adultCount}) × £${priceAdultPP?.toLocaleString("en-GB") ?? "—"}</span>
          <span>${priceAdultPP != null ? "£" + (priceAdultPP * adultCount).toLocaleString("en-GB") : "—"}</span>
        </div>
        ${childrenLine}
        <div class="booking-total">
          <span>Total</span>
          <span>£${totalPrice.toLocaleString("en-GB")}</span>
        </div>
        <a href="${bookingUrl}" target="_blank" class="book-button">Book Now</a>
      </div>
    </div>
  `
}

function updateGroupSizeButtons() {
  document.querySelectorAll("[data-adult-count]").forEach((btn) => {
    const count = Number.parseInt(btn.dataset.adultCount)
    btn.classList.toggle("active", count === adultCount)
  })
}

function updateChildrenButtons() {
  const childrenContainer = document.getElementById("children-buttons")
  childrenContainer.innerHTML = ""

  const maxChildren = adultCount * 2
  for (let i = 0; i <= maxChildren; i++) {
    const button = document.createElement("button")
    button.className = `group-button ${i === childCount ? "active" : ""}`
    button.textContent = i
    button.addEventListener("click", () => setChildCount(i))
    childrenContainer.appendChild(button)
  }

  document.getElementById("adults-children-text").textContent = `Adults: ${adultCount} • Children: ${childCount}`
}

function updateMonthTitle() {
  const monthName = currentDate.toLocaleString("en-GB", { month: "long", year: "numeric" })
  document.getElementById("month-title").textContent = monthName
}

function updateUI() {
  updateGroupSizeButtons()
  updateChildrenButtons()
  updateMonthTitle()
  renderCalendar()
  renderBookingSummary()
}

// Event listeners
document.querySelectorAll("[data-adult-count]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const count = Number.parseInt(btn.dataset.adultCount)
    setAdultCount(count)
  })
})

document.getElementById("prev-month").addEventListener("click", () => {
  currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
  selectedDate = null
  updateUI()
})

document.getElementById("next-month").addEventListener("click", () => {
  currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
  selectedDate = null
  updateUI()
})

// Initial render
updateUI()
