document.addEventListener('DOMContentLoaded', function () {
	const observer = new IntersectionObserver(
		entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('visible')
				}
			})
		},
		{
			threshold: 0.1,
		}
	)

	const aboutBoxes = document.querySelectorAll('.about-box')
	aboutBoxes.forEach(box => {
		observer.observe(box)
	})
})
