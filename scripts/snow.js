document.addEventListener('DOMContentLoaded', function () {
	const snowContainer = document.createElement('div')
	snowContainer.id = 'snow-container'
	document.body.appendChild(snowContainer)

	for (let i = 0; i < 100; i++) {
		createSnowflake()
	}

	function createSnowflake() {
		const snowflake = document.createElement('div')
		snowflake.className = 'snowflake'
		resetSnowflake(snowflake)
		snowContainer.appendChild(snowflake)

		snowflake.addEventListener('animationend', function () {
			resetSnowflake(snowflake)
		})
	}

	function resetSnowflake(snowflake) {
		const size = Math.random() * 6.5 + 2
		snowflake.style.width = `${size}px`
		snowflake.style.height = `${size}px`
		snowflake.style.left = `${Math.random() * 100}vw`
		snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`
		snowflake.style.animationDelay = `${Math.random() * 5}s`
		snowflake.style.animationName = 'fall'
	}
})
