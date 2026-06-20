(function () {
  var dd = document.getElementById('navToolsDropdown');
  if (!dd) return;
  var toggle = dd.querySelector('.site-nav-dropdown-toggle');
  var menu   = dd.querySelector('.site-nav-dropdown-menu');

  function open()  { dd.classList.add('open');    toggle.setAttribute('aria-expanded', 'true');  }
  function close() { dd.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
  function isOpen(){ return dd.classList.contains('open'); }

  toggle.addEventListener('click', function (e) {
    e.stopPropagation();
    isOpen() ? close() : open();
  });

  // Close when clicking outside
  document.addEventListener('click', function (e) {
    if (!dd.contains(e.target)) close();
  });

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });

  // Close when a menu item is clicked (navigation)
  menu.querySelectorAll('.site-nav-dropdown-item').forEach(function (item) {
    item.addEventListener('click', function () { close(); });
  });
})();
