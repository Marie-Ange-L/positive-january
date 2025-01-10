const affirmations = {
	fr: [
		["🌟", "Aujourd'hui est une nouvelle chance de réussir."],
		["💪", "Je suis capable d’accomplir tout ce que je me fixe, pas à pas."],
		[
			"🌱",
			"Chaque jour est une opportunité de grandir, et j'en fais le meilleur.",
		],
		["🎯", "Je mérite le succès et je vais l’atteindre avec persévérance."],
		["🌈", "Je choisis d’être positif·ve chaque jour, peu importe les défis."],
		["🚀", "Je suis maître·sse de ma propre réussite et je trace ma route."],
		[
			"💡",
			"Je crois en mes capacités à surmonter les défis qui se présentent.",
		],
		["🔥", "Je suis déterminé·e à réaliser mes objectifs, un à la fois."],
		["🕊️", "La paix intérieure commence par moi et rayonne autour de moi."],
		[
			"🌍",
			"Je suis entouré·e d’opportunités, et je saisis celles qui résonnent.",
		],
		["🔝", "Je fais des choix qui m’élèvent et nourrissent mon évolution."],
		["✨", "Mon potentiel est illimité, et je le découvre chaque jour."],
		[
			"🥳",
			"Je suis fier·e de chaque petit pas que je fais, car ils m’amènent loin.",
		],
		["🔮", "Ma vision claire et inspirante me guide vers le succès."],
		[
			"🛠️",
			"Je suis assez fort·e pour affronter tous les obstacles qui se dressent.",
		],
		["💭", "Je crée ma propre réalité en choisissant des pensées positives."],
		[
			"🌟",
			"Je suis en pleine évolution et je dépasse mes limites chaque jour.",
		],
		[
			"😊",
			"Je choisis de vivre avec confiance et gratitude pour tout ce que j’ai.",
		],
		["💖", "Je mérite une vie remplie de bonheur et de succès."],
		["🌅", "Mon avenir est brillant, et je suis prêt·e à l'accueillir."],
		["🌻", "Je libère mes pensées négatives pour embrasser la positivité."],
		["🤝", "Je m'entoure de personnes qui m'inspirent et me soutiennent."],
		["💖", "Je suis reconnaissant·e pour chaque instant de ma vie."],
		["💪", "Je suis une personne forte et pleine de ressources."],
		["😊", "Je choisis la joie et le succès à chaque instant."],
		["🎵", "Je suis en harmonie avec mes aspirations et mes rêves."],
		["🌟", "Je crois en ma capacité à créer un avenir exceptionnel."],
		["🛠️", "Je suis capable de surmonter tous les obstacles avec courage."],
	],
	en: [
		["🌟", "Today is a new chance to succeed."],
		[
			"💪",
			"I am capable of achieving everything I set my mind to, step by step.",
		],
		["🌱", "Each day is an opportunity to grow, and I embrace it."],
		["🎯", "I deserve success and I will achieve it with perseverance."],
		["🌈", "I choose to be positive every day, no matter the challenges."],
		["🚀", "I am the master of my own success and I shape my path."],
		["💡", "I believe in my ability to overcome challenges that arise."],
		["🔥", "I am determined to achieve my goals, one at a time."],
		["🕊️", "Inner peace starts with me and radiates outward."],
		["🌍", "I am surrounded by opportunities, and I embrace the right ones."],
		["🔝", "I make choices that uplift and nourish my growth."],
		["✨", "My potential is unlimited, and I discover it daily."],
		["🥳", "I am proud of every small step I take, as they lead me far."],
		["🔮", "My clear and inspiring vision guides me to success."],
		["🛠️", "I am strong enough to face all obstacles that come my way."],
		["💭", "I create my own reality by choosing positive thoughts."],
		["🌟", "I am constantly evolving and pushing beyond my limits."],
		["😊", "I choose to live with confidence and gratitude for all I have."],
		["💖", "I deserve a life filled with happiness and success."],
		["🌅", "My future is bright, and I am ready to embrace it."],
		["🌻", "I release negative thoughts and embrace positivity."],
		["🤝", "I surround myself with people who inspire and support me."],
		["💖", "I am grateful for every moment of my life."],
		["💪", "I am a strong and resourceful person."],
		["😊", "I choose joy and success at every moment."],
		["🎵", "I am in harmony with my aspirations and dreams."],
		["🌟", "I believe in my ability to create an exceptional future."],
		["🛠️", "I am capable of overcoming all obstacles with courage."],
	],
};

const subtitles = {
	fr: "Dose quotidienne d'affirmations positives pour un début d'année réussie.",
	en: "Daily dose of affirmations for a successful new year.",
};

let currentLanguage = "fr";

function renderCalendar() {
	const calendar = document.getElementById("calendar");
	calendar.innerHTML = "";

	const today = new Date();
	const currentDay = today.getDate();

	for (let i = 1; i <= 31; i++) {
		const day = document.createElement("div");
		day.className = "day";

		if (i < currentDay) {
			day.classList.add("passed");
		} else if (i === currentDay) {
			day.classList.add("today");
		} else {
			day.classList.add("future");
			day.style.pointerEvents = "none";
		}

		day.textContent = i;
		day.onclick = () => showMessage(i);
		calendar.appendChild(day);
	}
}

function showMessage(day) {
	const messageBox = document.getElementById("messageBox");
	const affirmation = affirmations[currentLanguage][day - 1];

	if (!affirmation) {
		const errorMessage =
			currentLanguage === "fr"
				? "Message non disponible."
				: "Message not available.";
		messageBox.innerHTML = `<p>${errorMessage}</p>`;
		messageBox.style.display = "block";
		return;
	}

	const [emoji, message] = affirmation;

	const closeText =
		currentLanguage === "fr"
			? "Passe une belle journée ! Et n'oublie pas de revenir demain ☺️"
			: "Have a beautiful day! And don't forget to come back tomorrow ☺️";

	messageBox.innerHTML = `
    <p><span class="emoji">${emoji}</span</p>
    <p>${message}</p>
    <button onclick="closeMessage()">${closeText}</button>
  `;
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
