/* =============================================================
   NAV INJECT  —  single source of truth for site navigation.

   Usage: place this script tag at the top of <body>:
     <script src="js/nav-inject.js" data-active="profile|articles|tools|contact"></script>

   The script injects the full <nav> before itself, then wires
   up the dropdown toggle. No DOMContentLoaded needed — the nav
   is in the DOM synchronously before this script finishes.
   ============================================================= */

(function () {
  'use strict';
  var script  = document.currentScript;
  var active  = (script && script.getAttribute('data-active')) || '';
  var page    = window.location.pathname.split('/').pop() || 'index.html';

  /* active-class helpers */
  function lnk(id)  { return active === id ? ' active' : ''; }
  function itm(fn)  { return page   === fn  ? ' active' : ''; }

  /* SVG constants */
  var BRAND_ICON = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>';
  var CHEVRON    = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>';

  var html = '<nav class="site-nav" role="navigation" aria-label="Main navigation">'
    + '<div class="site-nav-inner">'

    /* brand */
    + '<a href="index.html" class="site-nav-brand">'
    +   BRAND_ICON
    +   '<span class="site-nav-brand-name">Abdul Basit</span>'
    + '</a>'

    /* primary links */
    + '<div class="site-nav-links">'
    +   '<a href="index.html"    class="site-nav-link' + lnk('profile')  + '">Profile</a>'
    +   '<a href="articles.html" class="site-nav-link' + lnk('articles') + '">Articles</a>'
    +   '<a href="products.html" class="site-nav-link' + lnk('products') + '">Products</a>'
    + '</div>'

    /* right cluster: tools dropdown + contact */
    + '<div class="site-nav-right">'
    +   '<div class="site-nav-dropdown" id="navToolsDropdown">'
    +     '<button class="site-nav-dropdown-toggle' + lnk('tools') + '" aria-haspopup="true" aria-expanded="false">'
    +       'Tools ' + CHEVRON
    +     '</button>'
    +     '<div class="site-nav-dropdown-menu" role="menu">'
    +       '<a href="license-planner.html"  class="site-nav-dropdown-item' + itm('license-planner.html')  + '" role="menuitem"><span class="site-nav-dropdown-item-icon">📋</span> License Planner</a>'
    +       '<div class="site-nav-dropdown-divider" role="separator"></div>'
    +       '<a href="copilot-studio.html"   class="site-nav-dropdown-item' + itm('copilot-studio.html')   + '" role="menuitem"><span class="site-nav-dropdown-item-icon">🤖</span> Copilot Studio Messages</a>'
    +       '<a href="dataverse.html"        class="site-nav-dropdown-item' + itm('dataverse.html')        + '" role="menuitem"><span class="site-nav-dropdown-item-icon">🗄️</span> Dataverse Storage</a>'
    +       '<a href="power-automate.html"   class="site-nav-dropdown-item' + itm('power-automate.html')   + '" role="menuitem"><span class="site-nav-dropdown-item-icon">⚡</span> Power Automate Runs</a>'
    +       '<a href="power-bi.html"         class="site-nav-dropdown-item' + itm('power-bi.html')         + '" role="menuitem"><span class="site-nav-dropdown-item-icon">📊</span> Power BI Licensing</a>'
    +       '<a href="power-pages.html"      class="site-nav-dropdown-item' + itm('power-pages.html')      + '" role="menuitem"><span class="site-nav-dropdown-item-icon">🌐</span> Power Pages Capacity</a>'
    +       '<a href="roi-calculator.html"   class="site-nav-dropdown-item' + itm('roi-calculator.html')   + '" role="menuitem"><span class="site-nav-dropdown-item-icon">💰</span> ROI Calculator</a>'
    +       '<a href="alm-checklist.html"    class="site-nav-dropdown-item' + itm('alm-checklist.html')    + '" role="menuitem"><span class="site-nav-dropdown-item-icon">✅</span> ALM Checklist</a>'
    +     '</div>'
    +   '</div>'
    +   '<a href="contact.html" class="site-nav-link' + lnk('contact') + '">Contact</a>'
    + '</div>'

    + '</div>'
    + '</nav>';

  /* inject nav before this script tag */
  if (script) { script.insertAdjacentHTML('beforebegin', html); }

  /* ── Dropdown toggle ──────────────────────────────────── */
  var dd     = document.getElementById('navToolsDropdown');
  if (!dd) return;
  var toggle = dd.querySelector('.site-nav-dropdown-toggle');
  var menu   = dd.querySelector('.site-nav-dropdown-menu');

  function open()   { dd.classList.add('open');    toggle.setAttribute('aria-expanded', 'true');  }
  function close()  { dd.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
  function isOpen() { return dd.classList.contains('open'); }

  toggle.addEventListener('click', function (e) { e.stopPropagation(); isOpen() ? close() : open(); });
  document.addEventListener('click',   function (e) { if (!dd.contains(e.target)) close(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  menu.querySelectorAll('.site-nav-dropdown-item').forEach(function (i) { i.addEventListener('click', close); });
})();
