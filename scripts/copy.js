document.addEventListener('DOMContentLoaded', function () {
	const copyTextElements = document.querySelectorAll('.copy-text')

	copyTextElements.forEach(element => {
		element.addEventListener('click', function () {
			const textToCopy = this.getAttribute('data-copy')
			navigator.clipboard.writeText(textToCopy).then(() => {
				const existingBox = document.querySelector('.copied-box')
				if (existingBox) {
					existingBox.remove()
				}

				const copiedBox = document.createElement('div')
				copiedBox.className = 'copied-box'
				copiedBox.innerText = 'Copied!'
				document.body.appendChild(copiedBox)

				setTimeout(() => {
					copiedBox.classList.add('show')
				}, 10)

				setTimeout(() => {
					copiedBox.classList.remove('show')
					setTimeout(() => {
						copiedBox.remove()
					}, 500)
				}, 2000)
			})
		})
	})
})
