document.addEventListener('DOMContentLoaded', function () {
	const snowContainer = document.createElement('div')
	snowContainer.id = 'snow-container'
	document.body.appendChild(snowContainer)

	for (let i = 0; i < 100; i++) {
		const snowflake = document.createElement('div')
		snowflake.className = 'snowflake'
		snowflake.style.scale = `${Math.random(1) * 1 * 0.5}`
		snowflake.style.left = `${Math.random() * 100}vw`
		snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`
		snowflake.style.animationDelay = `${Math.random() * 5}s`
		snowContainer.appendChild(snowflake)

		snowflake.addEventListener('animationend', function () {
			snowflake.remove()
		})
	}
})
