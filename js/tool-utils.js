/* tool-utils.js — shared utilities for all Power Platform tool pages */

/**
 * Copy text to clipboard; flash the button element to "Copied!" for 1.5s.
 * @param {string} text
 * @param {HTMLElement} [btn] — optional button element to flash
 */
function copyToClipboard(text, btn) {
  navigator.clipboard.writeText(text).then(function () {
    if (!btn) return;
    var orig = btn.textContent;
    btn.textContent = '✓ Copied!';
    btn.classList.add('copied');
    setTimeout(function () {
      btn.textContent = orig;
      btn.classList.remove('copied');
    }, 1500);
  }).catch(function () {
    /* fallback for older browsers */
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    if (!btn) return;
    var orig = btn.textContent;
    btn.textContent = '✓ Copied!';
    btn.classList.add('copied');
    setTimeout(function () {
      btn.textContent = orig;
      btn.classList.remove('copied');
    }, 1500);
  });
}

/**
 * Reset a set of form fields to their default values and fire an 'input' event
 * on each so any live-calc listeners re-run.
 * @param {Array<{id: string, value: string|number}>} fieldDefaults
 */
function resetForm(fieldDefaults) {
  fieldDefaults.forEach(function (f) {
    var el = document.getElementById(f.id);
    if (!el) return;
    el.value = f.value;
    el.dispatchEvent(new Event('input', { bubbles: true }));
  });
}

/**
 * Set the semantic status class on a .calc-result container.
 * @param {HTMLElement} containerEl — the .calc-result element
 * @param {'ok'|'warn'|'danger'|''} status — pass '' to clear
 */
function setResultStatus(containerEl, status) {
  if (!containerEl) return;
  containerEl.classList.remove('calc-result--ok', 'calc-result--warn', 'calc-result--danger');
  if (status) containerEl.classList.add('calc-result--' + status);
}

/**
 * Set the width of a .result-bar-fill element, clamped to 0–100 %.
 * @param {HTMLElement} fillEl — the .result-bar-fill element
 * @param {number} pct — 0 to 100
 */
function renderBar(fillEl, pct) {
  if (!fillEl) return;
  fillEl.style.width = Math.min(100, Math.max(0, pct)) + '%';
}

/**
 * Persist a state snapshot to localStorage.
 * @param {string} key
 * @param {object} obj
 */
function saveState(key, obj) {
  try { localStorage.setItem(key, JSON.stringify(obj)); } catch (e) { /* quota or private */ }
}

/**
 * Load a state snapshot from localStorage.
 * @param {string} key
 * @returns {object|null}
 */
function loadState(key) {
  try {
    var raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch (e) { return null; }
}
