document.addEventListener('DOMContentLoaded', function () {
	const today = new Date()
	const month = today.getMonth()
	let season = ''

	if (month >= 2 && month <= 4) {
		season = 'spring'
	} else if (month >= 5 && month <= 7) {
		season = 'summer'
	} else if (month >= 8 && month <= 10) {
		season = 'autumn'
	} else {
		season = 'winter'
	}

	const container = document.createElement('div')
	container.id = 'seasonal-container'
	document.body.appendChild(container)

	let particleClass = ''
	let particleCount = 100

	switch (season) {
		case 'spring':
			particleClass = 'petal'
			break
		case 'summer':
			particleClass = 'sun-mote'
			particleCount = 50
			break
		case 'autumn':
			particleClass = 'leaf'
			break
		case 'winter':
			particleClass = 'snowflake'
			break
	}

	for (let i = 0; i < particleCount; i++) {
		createParticle()
	}

	function createParticle() {
		const particle = document.createElement('div')
		particle.className = particleClass
		resetParticle(particle)
		container.appendChild(particle)

		particle.addEventListener('animationend', function () {
			resetParticle(particle)
		})
	}

	function resetParticle(particle) {
		let size, duration, delay

		switch (season) {
			case 'spring':
				size = Math.random() * 10 + 5
				particle.style.width = `${size}px`
				particle.style.height = `${size}px`
				particle.style.backgroundColor = ['#ffb3ba', '#ffdfba', '#ffffba'][
					Math.floor(Math.random() * 3)
				]
				break
			case 'summer':
				size = Math.random() * 3 + 1
				particle.style.width = `${size}px`
				particle.style.height = `${size}px`
				break
			case 'autumn':
				size = Math.random() * 12 + 8
				particle.style.width = `${size}px`
				particle.style.height = `${size}px`
				particle.style.backgroundColor = ['#d9534f', '#f0ad4e', '#5cb85c'][
					Math.floor(Math.random() * 3)
				]
				break
			case 'winter':
				size = Math.random() * 6.5 + 2
				particle.style.width = `${size}px`
				particle.style.height = `${size}px`
				break
		}

		particle.style.left = `${Math.random() * 100}vw`
		duration = Math.random() * 5 + 5
		delay = Math.random() * 5
		particle.style.animationDuration = `${duration}s`
		particle.style.animationDelay = `${delay}s`
		particle.style.animationName = 'fall'
	}
})
