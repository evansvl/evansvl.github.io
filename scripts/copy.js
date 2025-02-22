document.addEventListener('DOMContentLoaded', function () {
	const copyTextElements = document.querySelectorAll('.copy-text')

	copyTextElements.forEach(element => {
		let canClick = true

		element.addEventListener('click', function () {
			if (!canClick) return

			canClick = false
			setTimeout(() => {
				canClick = true
			}, 1000)

			const textToCopy = this.getAttribute('data-copy')
			navigator.clipboard.writeText(textToCopy).then(() => {
				const copiedBox = document.createElement('div')
				copiedBox.className = 'copied-box'
				copiedBox.innerText = 'Copied'
				document.body.appendChild(copiedBox)

				const rect = this.getBoundingClientRect()
				copiedBox.style.left = `${
					rect.left +
					window.scrollX +
					rect.width / 2 -
					copiedBox.offsetWidth / 2
				}px`
				copiedBox.style.top = `${
					rect.top + window.scrollY - copiedBox.offsetHeight
				}px`

				copiedBox.classList.add('fade-out')
				setTimeout(() => {
					copiedBox.remove()
				}, 1000)
			})
		})
	})
})
