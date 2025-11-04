var TourCalendarWidget=(()=>{var B=Object.defineProperty;var j=Object.getOwnPropertyDescriptor;var q=Object.getOwnPropertyNames;var W=Object.prototype.hasOwnProperty;var V=(a,t)=>{for(var e in t)B(a,e,{get:t[e],enumerable:!0})},J=(a,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of q(t))!W.call(a,o)&&o!==e&&B(a,o,{get:()=>t[o],enumerable:!(n=j(t,o))||n.enumerable});return a};var P=a=>J(B({},"__esModule",{value:!0}),a);var ua={};V(ua,{initCalendarApp:()=>C});var A=`/* Root color variables matching the design system */
:root {
  --background: oklch(0.98 0.02 70);
  --foreground: oklch(0.34 0.07 70);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.34 0.07 70);
  --primary: oklch(0.74 0.2 60);
  --primary-foreground: oklch(0.24 0.05 70);
  --secondary: oklch(0.95 0.03 70);
  --secondary-foreground: oklch(0.34 0.07 70);
  --muted: oklch(0.92 0.02 70);
  --muted-foreground: oklch(0.54 0.06 70);
  --accent: oklch(0.8 0.18 55);
  --accent-foreground: oklch(0.24 0.05 70);
  --border: oklch(0.9 0.02 70);
}

.dark {
  --background: oklch(0.22 0.06 60);
  --foreground: oklch(0.92 0.04 70);
  --card: oklch(0.28 0.05 60);
  --card-foreground: oklch(0.95 0.04 70);
  --primary: oklch(0.67 0.19 60);
  --primary-foreground: oklch(0.2 0.04 60);
  --secondary: oklch(0.32 0.04 60);
  --secondary-foreground: oklch(0.95 0.04 70);
  --muted: oklch(0.28 0.03 60);
  --muted-foreground: oklch(0.76 0.06 70);
  --accent: oklch(0.72 0.17 55);
  --accent-foreground: oklch(0.2 0.04 60);
  --border: oklch(0.36 0.04 60);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: var(--background);
  color: var(--foreground);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif;
  line-height: 1.6;
  padding: 20px;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.card {
  background-color: var(--card);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 24px;
}

/* Selection Controls */
.selection-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-bottom: 32px;
}

@media (min-width: 640px) {
  .selection-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.selection-group {
  display: flex;
  flex-direction: column;
}

.label {
  font-size: 14px;
  font-weight: 600;
  color: var(--foreground);
  margin-bottom: 12px;
}

.button-group {
  display: flex;
  gap: 8px;
}

.group-button {
  width: 48px;
  height: 48px;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  background-color: var(--secondary);
  color: var(--secondary-foreground);
}

.group-button:hover:not(.active) {
  background-color: var(--muted);
}

.group-button.active {
  background-color: var(--primary);
  color: var(--primary-foreground);
}

.helper-text {
  font-size: 12px;
  color: var(--muted-foreground);
  margin-top: 8px;
}

/* Calendar Navigation */
.calendar-header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
}

.month-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--foreground);
}

.nav-buttons {
  display: flex;
  gap: 8px;
}

.nav-button {
  width: auto;
  padding: 8px;
  background-color: transparent;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: var(--foreground);
  transition: background-color 200ms ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-button:hover {
  background-color: var(--secondary);
}

/* Calendar Grid */
.calendar-container {
  background-color: var(--background);
  border-radius: 8px;
  padding: 16px;
  overflow: hidden;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 8px;
}

.day-header {
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: var(--muted-foreground);
  padding: 8px 0;
}

.calendar-day {
  aspect-ratio: 1;
  border-radius: 8px;
  border: none;
  padding: 8px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 200ms ease-in-out;
}

.calendar-day.empty {
  cursor: default;
}

.calendar-day.past {
  background-color: var(--muted);
  color: var(--muted-foreground);
  cursor: not-allowed;
  opacity: 0.5;
}

.calendar-day.unavailable {
  background-color: var(--muted);
  color: var(--muted-foreground);
  cursor: not-allowed;
}

.calendar-day.available {
  background-color: var(--secondary);
  color: var(--secondary-foreground);
}

.calendar-day.available:hover:not(.selected):not(.highlighted) {
  background-color: rgba(var(--accent-color), 0.3);
}

.calendar-day.highlighted {
  background-color: var(--accent);
  color: var(--accent-foreground);
}

.calendar-day.selected {
  background-color: var(--primary);
  color: var(--primary-foreground);
  box-shadow: 0 0 0 2px var(--primary);
}

.calendar-day-number {
  font-weight: 700;
  position: absolute;
  top: 8px;
  right: 8px;
}

.calendar-day-price {
  font-size: 11px;
  line-height: 1.2;
  display: inline-flex;
  gap: 4px;
  align-items: baseline;
}

.calendar-day-prices {
  position: absolute;
  left: 8px;
  bottom: 8px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: flex-start;
}

.calendar-day-price-label {
  font-weight: 400;
}

.calendar-day-price-value {
  font-weight: 700;
}

.calendar-day .note-icon {
  position: absolute;
  top: 8px;
  left: 8px;
}

/* Booking Summary */
.booking-summary {
  border: 1px solid rgba(var(--primary-color), 0.2);
}

.booking-summary-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.booking-info {
  display: flex;
  flex-direction: column;
}

.booking-label {
  font-size: 13px;
  color: var(--muted-foreground);
  margin-bottom: 4px;
}

.booking-value {
  font-size: 18px;
  font-weight: 600;
  color: var(--foreground);
}

.booking-date {
  font-size: 14px;
  font-weight: 500;
  color: var(--foreground);
}

.booking-breakdown {
  border-top: 1px solid var(--border);
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.booking-line {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: var(--foreground);
}

.booking-total {
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 16px;
  color: var(--foreground);
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px solid var(--border);
}

.booking-footer {
  font-size: 12px;
  color: var(--muted-foreground);
}

.note-icon {
  font-size: 12px;
  cursor: help;
  opacity: 0.7;
}

/* Added tooltip styling */
.tooltip {
  position: fixed;
  background-color: var(--foreground);
  color: var(--card);
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 13px;
  white-space: nowrap;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  pointer-events: none;
}

/* Updated book button to accept both button and link styling */
.book-button {
  display: block;
  width: 100%;
  padding: 12px;
  margin-top: 8px;
  background-color: var(--primary);
  color: var(--primary-foreground);
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 200ms ease-in-out;
  text-decoration: none;
  text-align: center;
}

.book-button:hover {
  opacity: 0.9;
}

.text-center {
  text-align: center;
}

.muted-text {
  color: var(--muted-foreground);
}
`;var X={2025:{11:{1:{available:!0,duration:8,note:"Great views at this time",prices:[{min:1,max:2,adult:1399,child:1199,sku:"SKU001-1-2"},{min:3,max:4,adult:1299,child:1099,sku:"SKU001-3-4"}]},2:{available:!0,duration:8,prices:[{min:1,max:2,adult:1399,sku:"SKU002-1-2"},{min:3,max:4,adult:1299,sku:"SKU002-3-4"}]},3:{available:!0,duration:8,note:"Peak season - book early",prices:[{min:1,max:2,adult:1399,child:1199,sku:"SKU003-1-2"},{min:3,max:4,adult:1299,child:1099,sku:"SKU003-3-4"}]},4:{available:!0,duration:8,prices:[{min:1,max:2,adult:1499,sku:"SKU004-1-2"},{min:3,max:4,adult:1399,sku:"SKU004-3-4"}]},5:{available:!0,duration:8,prices:[{min:1,max:2,adult:1399,sku:"SKU005-1-2"},{min:3,max:4,adult:1299,sku:"SKU005-3-4"}]},6:{available:!0,duration:8,prices:[{min:1,max:4,adult:1299,sku:"SKU006-1-4"}]},8:{available:!0,duration:8,prices:[{min:1,max:2,adult:1399,sku:"SKU008-1-2"},{min:3,max:4,adult:1299,sku:"SKU008-3-4"}]},9:{available:!0,duration:8,prices:[{min:1,max:4,adult:1299,sku:"SKU009-1-4"}]},10:{available:!0,duration:8,note:"Limited availability",prices:[{min:1,max:2,adult:1499,sku:"SKU010-1-2"},{min:3,max:4,adult:1399,sku:"SKU010-3-4"}]},11:{available:!0,duration:8,prices:[{min:1,max:4,adult:1299,sku:"SKU011-1-4"}]},12:{available:!0,duration:8,prices:[{min:1,max:2,adult:1499,sku:"SKU012-1-2"},{min:3,max:4,adult:1399,sku:"SKU012-3-4"}]},13:{available:!0,duration:8,prices:[{min:1,max:4,adult:1299,child:1099,sku:"SKU013-1-4"}]},15:{available:!0,duration:8,prices:[{min:1,max:4,adult:1299,sku:"SKU015-1-4"}]},16:{available:!0,duration:8,prices:[{min:1,max:2,adult:1499,sku:"SKU016-1-2"},{min:3,max:4,adult:1399,sku:"SKU016-3-4"}]},17:{available:!0,duration:8,prices:[{min:1,max:4,adult:1299,child:1099,sku:"SKU017-1-4"}]},18:{available:!0,duration:8,prices:[{min:1,max:4,adult:1299,sku:"SKU018-1-4"}]},19:{available:!0,duration:8,prices:[{min:1,max:4,adult:1299,sku:"SKU019-1-4"}]},20:{available:!0,duration:8,prices:[{min:1,max:2,adult:1499,sku:"SKU020-1-2"},{min:3,max:4,adult:1399,sku:"SKU020-3-4"}]},22:{available:!0,duration:8,prices:[{min:1,max:2,adult:1499,sku:"SKU022-1-2"},{min:3,max:4,adult:1399,sku:"SKU022-3-4"}]},23:{available:!0,duration:8,prices:[{min:1,max:4,adult:1299,sku:"SKU023-1-4"}]},24:{available:!0,duration:10,prices:[{min:1,max:4,adult:1299,child:1099,sku:"SKU024-1-4"}]},25:{available:!0,duration:10,prices:[{min:1,max:2,adult:1399,sku:"SKU025-1-2"},{min:3,max:4,adult:1299,sku:"SKU025-3-4"}]},26:{available:!0,duration:10,prices:[{min:1,max:2,adult:1499,sku:"SKU026-1-2"},{min:3,max:4,adult:1399,sku:"SKU026-3-4"}]},27:{available:!0,duration:10,prices:[{min:1,max:4,adult:1299,sku:"SKU027-1-4"}]},29:{available:!0,duration:10,prices:[{min:1,max:2,adult:1399,sku:"SKU029-1-2"},{min:3,max:4,adult:1299,sku:"SKU029-3-4"}]},30:{available:!0,duration:10,prices:[{min:1,max:2,adult:1499,sku:"SKU030-1-2"},{min:3,max:4,adult:1399,sku:"SKU030-3-4"}]}},12:{1:{available:!0,duration:10,prices:[{min:1,max:4,adult:1499,child:1199,sku:"SKU101-1-4"}]},2:{available:!0,duration:10,prices:[{min:1,max:4,adult:1499,sku:"SKU102-1-4"}]},3:{available:!0,duration:10,prices:[{min:1,max:4,adult:1499,sku:"SKU103-1-4"}]},4:{available:!0,duration:10,prices:[{min:1,max:4,adult:1499,sku:"SKU104-1-4"}]},5:{available:!0,duration:10,prices:[{min:1,max:4,adult:1499,sku:"SKU105-1-4"}]},6:{available:!0,duration:10,prices:[{min:1,max:4,adult:1499,sku:"SKU106-1-4"}]},7:{available:!0,duration:10,prices:[{min:1,max:4,adult:1499,sku:"SKU107-1-4"}]},8:{available:!0,duration:10,prices:[{min:1,max:4,adult:1499,sku:"SKU108-1-4"}]},9:{available:!0,duration:10,prices:[{min:1,max:4,adult:1499,sku:"SKU109-1-4"}]},10:{available:!0,duration:10,prices:[{min:1,max:4,adult:1499,sku:"SKU110-1-4"}]},11:{available:!1,duration:10,prices:[{min:1,max:4,adult:1299,sku:"SKU111-1-4"}]},12:{available:!0,duration:10,prices:[{min:1,max:2,adult:1499,sku:"SKU112-1-2"},{min:3,max:4,adult:1399,sku:"SKU112-3-4"}]},13:{available:!0,duration:10,prices:[{min:1,max:4,adult:1299,child:1099,sku:"SKU113-1-4"}]},14:{available:!0,duration:10,prices:[{min:1,max:4,adult:1499,sku:"SKU114-1-4"}]},15:{available:!0,duration:10,prices:[{min:1,max:2,adult:1499,sku:"SKU115-1-2"},{min:3,max:4,adult:1399,sku:"SKU115-3-4"}]},16:{available:!0,duration:10,prices:[{min:1,max:2,adult:1499,sku:"SKU116-1-2"},{min:3,max:4,adult:1399,sku:"SKU116-3-4"}]},17:{available:!0,duration:10,prices:[{min:1,max:4,adult:1499,sku:"SKU117-1-4"}]},18:{available:!0,duration:10,prices:[{min:1,max:4,adult:1499,sku:"SKU118-1-4"}]},19:{available:!0,duration:10,prices:[{min:1,max:4,adult:1499,sku:"SKU119-1-4"}]},20:{available:!0,duration:10,prices:[{min:1,max:2,adult:1699,sku:"SKU120-1-2"},{min:3,max:4,adult:1599,sku:"SKU120-3-4"}]},21:{available:!0,duration:10,prices:[{min:1,max:2,adult:1699,sku:"SKU121-1-2"},{min:3,max:4,adult:1599,sku:"SKU121-3-4"}]},22:{available:!1,duration:10,prices:[{min:1,max:4,adult:1299,sku:"SKU122-1-4"}]},23:{available:!0,duration:10,prices:[{min:1,max:4,adult:1699,sku:"SKU123-1-4"}]},24:{available:!0,duration:10,prices:[{min:1,max:4,adult:1699,sku:"SKU124-1-4"}]},25:{available:!0,duration:10,prices:[{min:1,max:4,adult:1699,sku:"SKU125-1-4"}]},26:{available:!0,duration:10,prices:[{min:1,max:4,adult:1699,sku:"SKU126-1-4"}]},27:{available:!0,duration:10,prices:[{min:1,max:4,adult:1699,sku:"SKU127-1-4"}]},28:{available:!0,duration:10,prices:[{min:1,max:2,adult:1499,sku:"SKU128-1-2"},{min:3,max:4,adult:1399,sku:"SKU128-3-4"}]},29:{available:!0,duration:10,prices:[{min:1,max:2,adult:1499,sku:"SKU129-1-2"},{min:3,max:4,adult:1399,sku:"SKU129-3-4"}]},30:{available:!0,duration:10,prices:[{min:1,max:2,adult:1499,sku:"SKU130-1-2"},{min:3,max:4,adult:1399,sku:"SKU130-3-4"}]},31:{available:!0,duration:10,prices:[{min:1,max:2,adult:1499,sku:"SKU131-1-2"},{min:3,max:4,adult:1399,sku:"SKU131-3-4"}]}}}},G=8,L=new Date,m=new Date(L.getFullYear(),L.getMonth(),1),s=1,u=0,i=null;function N(a,t){if(!a)return null;let e=a.prices.find(o=>t>=o.min&&t<=o.max);if(e)return e;let n=[...a.prices].sort((o,c)=>o.min-c.min);return n.length?n[n.length-1]:null}function Z(a){s=Math.max(1,a);let t=s*2;u=Math.min(u,t),b()}function aa(a){let t=s*2;u=Math.max(0,Math.min(a,t)),b()}function F(){var e,n;let a=m.getFullYear(),t=m.getMonth()+1;return(n=(e=X[a])==null?void 0:e[t])!=null?n:{}}function ea(){var U;let a=m.getFullYear(),t=m.getMonth(),e=F(),n=new Date(a,t,1),c=new Date(a,t+1,0).getDate(),p=n.getDay(),k=document.getElementById("calendar-days");k.innerHTML="";for(let g=0;g<p;g++){let d=document.createElement("div");d.className="calendar-day empty",k.appendChild(d)}for(let g=1;g<=c;g++){let d=new Date(a,t,g),K=g,l=e[K],x=N(l,s+u),v=(U=l==null?void 0:l.available)!=null?U:!1,f=x==null?void 0:x.adult,h=x==null?void 0:x.child,y=d<L&&d.toDateString()!==L.toDateString(),r=document.createElement("button");r.className="calendar-day",r.disabled=!v||y;let S=i&&d.getFullYear()===i.getFullYear()&&d.getMonth()===i.getMonth()&&d.getDate()===i.getDate(),O=i&&!S&&(()=>{var z;let E=d.getTime()-i.getTime(),T=Math.ceil(E/(1e3*60*60*24)),$=e[i.getDate()],_=(z=$==null?void 0:$.duration)!=null?z:G;return T>0&&T<_})();y?r.classList.add("past"):v?r.classList.add("available"):r.classList.add("unavailable"),S?r.classList.add("selected"):O&&r.classList.add("highlighted");let w=[];f!=null&&w.push(`<span class="calendar-day-price"> <span class="calendar-day-price-value">\xA3${f.toLocaleString("en-GB")}</span> <span class="calendar-day-price-label">Adult</span></span>`),h!=null&&w.push(`<span class="calendar-day-price"> <span class="calendar-day-price-value">\xA3${h.toLocaleString("en-GB")}</span> <span class="calendar-day-price-label">Child</span></span>`);let R=w.length?`<div class="calendar-day-prices">${w.join("")}</div>`:"",M="";l!=null&&l.note&&(M=`<span class="note-icon" title="${l.note}">\u2139\uFE0F</span>`),r.innerHTML=`${M}<span class="calendar-day-number">${K}</span>${R}`,r.addEventListener("click",()=>na(d,e)),l!=null&&l.note&&(r.addEventListener("mouseenter",E=>{ta(E,l.note)}),r.addEventListener("mouseleave",Y)),k.appendChild(r)}}var D=null;function ta(a,t){Y();let e=document.createElement("div");e.className="tooltip",e.textContent=t,document.body.appendChild(e),D=e;let n=a.target.getBoundingClientRect();e.style.left=n.left+n.width/2-e.offsetWidth/2+"px",e.style.top=n.top-e.offsetHeight-8+"px"}function Y(){D&&(D.remove(),D=null)}function na(a,t){let e=a.getDate(),n=t[e];n!=null&&n.available&&(i=a,b())}function oa(){var x,v,f,h,y,r,S;let a=document.getElementById("booking-summary"),t=F();if(!i){a.innerHTML=`
      <div class="text-center">
        <p class="muted-text">Select a departure date to see booking details</p>
      </div>
    `;return}let e=t[i.getDate()],n=(x=e==null?void 0:e.duration)!=null?x:G,o=N(e,s+u),c=(v=o==null?void 0:o.adult)!=null?v:null,p=(h=(f=o==null?void 0:o.child)!=null?f:o==null?void 0:o.adult)!=null?h:null,k=(y=o==null?void 0:o.sku)!=null?y:"",U=c!=null&&p!=null?c*s+p*u:0,g=new Date(i.getTime()+(n-1)*24*60*60*1e3),d=i.toISOString().split("T")[0],K=`https://secure.keadventure.com/book?sku=${k}&date=${d}&adults=${s}&children=${u}`,l=u>0?`
    <div class="booking-line">
      <span>Children (${u}) \xD7 \xA3${(r=p==null?void 0:p.toLocaleString("en-GB"))!=null?r:"\u2014"}</span>
      <span>${p!=null?"\xA3"+(p*u).toLocaleString("en-GB"):"\u2014"}</span>
    </div>
  `:"";a.innerHTML=`
    <div class="booking-summary-content">
      <div class="booking-info">
        <p class="booking-label">Departure Date</p>
        <p class="booking-value">${i.toLocaleDateString("en-GB",{weekday:"long",month:"long",day:"numeric",year:"numeric"})}</p>
      </div>

      <div class="booking-info">
        <p class="booking-label">Return Date</p>
        <p class="booking-date">${g.toLocaleDateString("en-GB",{month:"short",day:"numeric",year:"numeric"})}</p>
      </div>

      <div class="booking-breakdown">
        <div class="booking-line">
          <span>Adults (${s}) \xD7 \xA3${(S=c==null?void 0:c.toLocaleString("en-GB"))!=null?S:"\u2014"}</span>
          <span>${c!=null?"\xA3"+(c*s).toLocaleString("en-GB"):"\u2014"}</span>
        </div>
        ${l}
        <div class="booking-total">
          <span>Total</span>
          <span>\xA3${U.toLocaleString("en-GB")}</span>
        </div>
        <a href="${K}" target="_blank" class="book-button">Book Now</a>
      </div>
    </div>
  `}function ra(){document.querySelectorAll("[data-adult-count]").forEach(a=>{let t=Number.parseInt(a.dataset.adultCount);a.classList.toggle("active",t===s)})}function ia(){let a=document.getElementById("children-buttons");a.innerHTML="";let t=s*2;for(let e=0;e<=t;e++){let n=document.createElement("button");n.className=`group-button ${e===u?"active":""}`,n.textContent=e,n.addEventListener("click",()=>aa(e)),a.appendChild(n)}document.getElementById("adults-children-text").textContent=`Adults: ${s} \u2022 Children: ${u}`}function la(){let a=m.toLocaleString("en-GB",{month:"long",year:"numeric"});document.getElementById("month-title").textContent=a}function b(){ra(),ia(),la(),ea(),oa()}var I=!1;function C(){I||(I=!0,document.querySelectorAll("[data-adult-count]").forEach(a=>{a.addEventListener("click",()=>{let t=Number.parseInt(a.dataset.adultCount);Z(t)})}),document.getElementById("prev-month").addEventListener("click",()=>{m=new Date(m.getFullYear(),m.getMonth()-1,1),i=null,b()}),document.getElementById("next-month").addEventListener("click",()=>{m=new Date(m.getFullYear(),m.getMonth()+1,1),i=null,b()}),b())}var H="tour-calendar-widget-styles";function da(){if(typeof document=="undefined"||document.getElementById(H))return;let a=document.createElement("style");a.id=H,a.textContent=A,document.head.appendChild(a)}da();typeof document!="undefined"&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{C()},{once:!0}):C());return P(ua);})();
