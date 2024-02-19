// JavaScript Code
const counter = document.querySelector(".counter-number");
async function updateCounter() {
	let response = await fetch("https://3zii7hkezb27tvyjflnwh3mnmi0dwzjk.lambda-url.ca-central-1.on.aws/")
	let data = await response.json();
    counter.innerHTML = `Views: ${data}`;
	
}

updateCounter();
