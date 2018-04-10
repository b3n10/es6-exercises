function sanitize(strings, ...values) {
	const dirty = strings.reduce( (prev, next, i) => `${prev}${next}${values[i] || ""}`, "");
	return DOMPurify.sanitize(dirty);
}

const name = "Ben";
const about = sanitize`
	hack message
	<img src="http://unsplash.it/50/50?random" onload="alert('hacked%#$~');"/>
`;

const html = `
	<h2>${name}</h2>
	<p>${about}</p>
`;

const bio = document.querySelector(".bio");
bio.innerHTML = html;

