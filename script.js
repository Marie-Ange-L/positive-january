const affirmations = {
	fr: [
		"Aujourd'hui est une nouvelle chance de réussir.",
		"Je suis capable d’accomplir tout ce que je me fixe.",
		"Chaque jour est une opportunité de grandir.",
		"Je mérite le succès et je vais l’atteindre.",
		"Je choisis d’être positif/positive chaque jour.",
		"Je suis maître de ma propre réussite.",
		"Je crois en mes capacités à surmonter les défis.",
		"Je suis déterminé/déterminée à réaliser mes objectifs.",
		"La paix intérieure commence par moi.",
		"Je suis entouré(e) d’opportunités pour réussir.",
		"Je fais des choix qui m’élèvent chaque jour.",
		"Mon potentiel est illimité.",
		"Je suis fier/fière de chaque petit pas que je fais.",
		"Ma vision me guide vers le succès.",
		"Je suis assez fort/forte pour affronter tous les obstacles.",
		"Je crée ma propre réalité avec mes pensées.",
		"Je suis en pleine évolution et je me dépasse chaque jour.",
		"Je choisis de vivre ma vie avec confiance et gratitude.",
		"Je mérite une vie pleine de bonheur et de succès.",
		"Je suis capable d’accomplir des choses incroyables.",
		"Mon avenir est brillant et rempli de possibilités.",
		"Je me libère des pensées négatives et j’adopte la positivité.",
		"Je m'entoure de personnes qui me soutiennent et m'inspirent.",
		"Je suis reconnaissant(e) pour chaque moment de ma vie.",
		"Je suis une personne forte et pleine de ressources.",
		"Je choisis la joie et le succès à chaque instant.",
		"Je vis pleinement chaque jour, sans regret.",
		"Je suis en parfaite harmonie avec mes aspirations.",
		"Je crois en ma capacité à créer un avenir exceptionnel.",
		"Je suis capable de surmonter tous les obstacles qui se présentent.",
	],
	en: [
		"Today is a new chance to succeed.",
		"I am capable of achieving everything I set my mind to.",
		"Each day is an opportunity to grow.",
		"I deserve success and I will achieve it.",
		"I choose to be positive every day.",
		"I am the master of my own success.",
		"I believe in my ability to overcome challenges.",
		"I am determined to achieve my goals.",
		"Inner peace starts with me.",
		"I am surrounded by opportunities for success.",
		"I make choices that uplift me every day.",
		"My potential is unlimited.",
		"I am proud of every small step I take.",
		"My vision guides me toward success.",
		"I am strong enough to face any obstacle.",
		"I create my own reality with my thoughts.",
		"I am in constant growth and push myself every day.",
		"I choose to live my life with confidence and gratitude.",
		"I deserve a life filled with happiness and success.",
		"I am capable of accomplishing amazing things.",
		"My future is bright and full of possibilities.",
		"I release negative thoughts and embrace positivity.",
		"I surround myself with people who support and inspire me.",
		"I am grateful for every moment of my life.",
		"I am a strong and resourceful person.",
		"I choose joy and success at every moment.",
		"I live fully each day, without regret.",
		"I am in perfect harmony with my aspirations.",
		"I believe in my ability to create an exceptional future.",
		"I am capable of overcoming all obstacles that come my way.",
	],
};

const subtitles = {
	fr: "Votre dose quotidienne d'affirmations positives pour une année réussie.",
	en: "Your daily dose of affirmations for a successful year.",
};

let currentLanguage = "fr";

function renderCalendar() {
	const calendar = document.getElementById("calendar");
	calendar.innerHTML = "";
	for (let i = 1; i <= 31; i++) {
		const day = document.createElement("div");
		day.className = "day";
		day.textContent = i;
		day.onclick = () => showMessage(i);
		calendar.appendChild(day);
	}
}

function showMessage(day) {
	const messageBox = document.getElementById("messageBox");
	const message =
		affirmations[currentLanguage][day - 1] ||
		(currentLanguage === "fr"
			? "Message non disponible."
			: "Message not available.");

	const closeText = currentLanguage === "fr" ? "Fermer" : "Close";

	messageBox.innerHTML = `<p>${message}</p><button onclick="closeMessage()">${closeText}</button>`;
	messageBox.style.display = "block";
}

function closeMessage() {
	document.getElementById("messageBox").style.display = "none";
}

function switchLanguage(lang) {
	currentLanguage = lang;

	const subtitle = document.getElementById("subtitle");
	subtitle.textContent = subtitles[lang];

	renderCalendar();

	const btnFr = document.getElementById("btn-fr");
	const btnEn = document.getElementById("btn-en");

	if (lang === "fr") {
		btnFr.classList.add("active");
		btnFr.classList.remove("inactive");
		btnEn.classList.add("inactive");
		btnEn.classList.remove("active");
	} else {
		btnEn.classList.add("active");
		btnEn.classList.remove("inactive");
		btnFr.classList.add("inactive");
		btnFr.classList.remove("active");
	}
}

renderCalendar();
