document.addEventListener('DOMContentLoaded', function () {
	const headerHTML = `
        <header class="header">
            <a href="/" class="title-link">
                <h1 class="title">evansvl</h1>
            </a>
            <nav class="nav">
                <a href="about.html" class="nav-link">About Me</a>
                <a href="projects.html" class="nav-link">Projects</a>
            </nav>
        </header>
    `
	document.body.insertAdjacentHTML('afterbegin', headerHTML)
})
