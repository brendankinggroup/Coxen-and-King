// Coxen & King — coming soon site
//
// Edit LAUNCH_DATE when the real date is set. ISO 8601 with timezone offset
// is safest across browsers (avoid `new Date('YYYY-MM-DD')`, which is parsed
// as UTC and shifts in local time).
const LAUNCH_DATE = new Date('2026-09-01T09:00:00-05:00');

const els = {
  days:    document.getElementById('days'),
  hours:   document.getElementById('hours'),
  minutes: document.getElementById('minutes'),
  seconds: document.getElementById('seconds'),
};

function pad(n) {
  return String(n).padStart(2, '0');
}

function tick() {
  const diff = Math.max(0, LAUNCH_DATE.getTime() - Date.now());

  const days    = Math.floor(diff / 86_400_000);
  const hours   = Math.floor(diff / 3_600_000) % 24;
  const minutes = Math.floor(diff / 60_000) % 60;
  const seconds = Math.floor(diff / 1_000) % 60;

  els.days.textContent    = pad(days);
  els.hours.textContent   = pad(hours);
  els.minutes.textContent = pad(minutes);
  els.seconds.textContent = pad(seconds);
}

tick();
setInterval(tick, 1000);

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
