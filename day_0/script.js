const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
	navToggle.addEventListener('click', () => {
		const isOpen = !navMenu.classList.contains('hidden');
		navMenu.classList.toggle('hidden');
		navToggle.setAttribute('aria-expanded', String(!isOpen));
	});

	navMenu.querySelectorAll('a').forEach((link) => {
		link.addEventListener('click', () => {
			if (window.innerWidth < 640) {
				navMenu.classList.add('hidden');
				navToggle.setAttribute('aria-expanded', 'false');
			}
		});
	});
}
