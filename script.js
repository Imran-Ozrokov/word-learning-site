// Наша база данных слов
const wordsDatabase = [
    { foreign: "Ticket", russian: "Билет", category: "travel" },
    { foreign: "Airport", russian: "Аэропорт", category: "travel" },
    { foreign: "Hotel", russian: "Отель", category: "travel" },
    { foreign: "Apple", russian: "Яблоко", category: "food" },
    { foreign: "Dinner", russian: "Ужин", category: "food" },
    { foreign: "Water", russian: "Вода", category: "food" },
    { foreign: "Laptop", russian: "Ноутбук", category: "it" },
    { foreign: "Code", russian: "Код", category: "it" },
    { foreign: "Website", russian: "Веб-сайт", category: "it" }
];

let currentWords = [];
let currentIndex = 0;

// Элементы переключения страниц
const homePage = document.getElementById("home-page");
const trainerPage = document.getElementById("trainer-page");
const navHome = document.getElementById("nav-home");
const navTrainer = document.getElementById("nav-trainer");

// Элементы тренажёра
const card = document.getElementById("card");
const engWord = document.getElementById("word-eng");
const rusWord = document.getElementById("word-rus");
const pBar = document.getElementById("p-bar");
const wordsListElement = document.getElementById("words-list");

// Функция переключения экранов
function showPage(pageId) {
    if (pageId === "home") {
        homePage.style.display = "flex";
        trainerPage.style.display = "none";
        navHome.classList.add("active");
        navTrainer.classList.remove("active");
    } else {
        homePage.style.display = "none";
        trainerPage.style.display = "flex";
        navHome.classList.remove("active");
        navTrainer.classList.add("active");
    }
}

// Запуск тренировки
function startTraining(category = null) {
    if (category) {
        currentWords = wordsDatabase.filter(w => w.category === category);
    } else {
        currentWords = [...wordsDatabase];
    }
    currentIndex = 0;
    showPage("trainer");
    updateTrainer();
}

// Обновление данных на экране тренажёра
function updateTrainer() {
    if (currentWords.length === 0) return;

    // Показываем слово и прячем перевод
    engWord.innerText = currentWords[currentIndex].foreign;
    rusWord.innerText = currentWords[currentIndex].russian;
    rusWord.style.display = "none";

    // Обновляем прогресс-бар
    const progressPercent = ((currentIndex) / currentWords.length) * 100;
    pBar.style.width = progressPercent + "%";

    // Обновляем боковое меню со списком слов
    wordsListElement.innerHTML = "";
    currentWords.forEach((word, index) => {
        const li = document.createElement("li");
        if (index < currentIndex) {
            li.className = "passed";
            li.innerHTML = `${index + 1}. ${word.foreign} <span class="check">✓</span>`;
        } else if (index === currentIndex) {
            li.className = "current";
            li.innerText = `${index + 1}. ${word.foreign}`;
        } else {
            li.className = "upcoming";
            li.innerText = `${index + 1}. ${word.foreign}`;
        }
        wordsListElement.appendChild(li);
    });
}

// Переключение на следующее слово
function nextWord() {
    if (currentIndex < currentWords.length - 1) {
        currentIndex++;
        updateTrainer();
    } else {
        pBar.style.width = "100%";
        alert("Отличная работа! Урок завершён.");
        showPage("home");
    }
}

// Слушатели кликов
document.getElementById("start-learning-btn").addEventListener("click", () => startTraining());
navHome.addEventListener("click", () => showPage("home"));
navTrainer.addEventListener("click", () => startTraining());

card.addEventListener("click", () => {
    rusWord.style.display = rusWord.style.display === "none" ? "block" : "none";
});

document.getElementById("know-btn").addEventListener("click", nextWord);
document.getElementById("dont-know-btn").addEventListener("click", nextWord);

// Запуск по нажатию на карточки категорий
window.startWithCategory = function(category) {
    startTraining(category);
};
