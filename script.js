document.addEventListener('DOMContentLoaded', () => {
	// ===== Safe nav toggle (won’t crash if elements are missing) =====
	const CSbody = document.body;
	const CSnavbarMenu = document.querySelector('#cs-navigation');
	const CShamburgerMenu = document.querySelector('#cs-navigation .cs-toggle');
  
	if (CShamburgerMenu && CSnavbarMenu) {
	  CShamburgerMenu.addEventListener('click', () => {
		CShamburgerMenu.classList.toggle('cs-active');
		CSnavbarMenu.classList.toggle('cs-active');
		CSbody.classList.toggle('cs-open');
		ariaExpanded();
	  });
	}
  
	function ariaExpanded() {
	  const csUL = document.querySelector('#cs-expanded');
	  if (!csUL) return;
	  const expanded = csUL.getAttribute('aria-expanded');
	  csUL.setAttribute('aria-expanded', expanded === 'false' ? 'true' : 'false');
	}
  
	// Dropdowns (only if they exist)
	document.querySelectorAll('#cs-navigation .cs-dropdown').forEach(item => {
	  item.addEventListener('click', () => item.classList.toggle('cs-active'));
	});
  
	// ===== SUPER SIMPLE COUNTER =====
	const counterEl = document.getElementById('customerCount');
	if (counterEl) {
	  let count = 0;
	  const target = 3000;   // 3K
	  const step = 50;       // increase per tick
	  const every = 20;      // ms per tick
	  const timer = setInterval(() => {
		count += step;
		if (count >= target) {
		  counterEl.textContent = target;
		  clearInterval(timer);
		} else {
		  counterEl.textContent = count;
		}
	  }, every);
	}
  });