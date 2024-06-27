import { changeNotification} from "./Utils.js";

export class TournamentUpcoming extends HTMLElement{
	constructor(){
		super();
	}

	connectedCallback() {
		this.shadow = this.attachShadow({ mode: "open" });
	
		// Create link element for CSS
		const css = document.createElement("link");
		css.setAttribute("rel", "stylesheet");
		css.setAttribute("href", "./components/tournamentUpcoming.css");
		// Create and append CSS link
		const cssIcon = document.createElement("link");
		cssIcon.setAttribute("rel", "stylesheet");
		cssIcon.setAttribute("href", "https://unicons.iconscout.com/release/v3.0.6/css/line.css"); // Link to Unicons CSS
	
		// Create the container div
		const div = document.createElement("div");
		div.id = "tour-upcomimg";
	
		// Create the span element with the icon
		const span = document.createElement("span");
		const icon = document.createElement("i");
		icon.classList.add("uil", "uil-check-circle");
		span.appendChild(icon);
	
		// Create the content div
		const contentDiv = document.createElement("div");
		contentDiv.id = "content";
	
		const h4 = document.createElement("h4");
		h4.textContent = "TOURNAMENT is upcoming ...";
	
		const small = document.createElement("small");
		small.textContent = "registered member (1/4)";
	
		contentDiv.appendChild(h4);
		contentDiv.appendChild(small);
	
		// Create the button
		const button = document.createElement("button");
		button.textContent = "JOIN TOURNAMENT";
		button.classList.add("btn");
		button.addEventListener("click", () => {
			changeNotification("tournament-start");
		});
	
		// Append all elements to the container div
		div.appendChild(span);
		div.appendChild(contentDiv);
		div.appendChild(button);
	
		// Append CSS and container div to shadow DOM
		this.shadow.appendChild(cssIcon);
		this.shadow.appendChild(css);
		this.shadow.appendChild(div);
	}
	
}