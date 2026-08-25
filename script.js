const initialWords = [
    { id: 1, foreign: "Eloquent", russian: "Красноречивый", category: "1", learned: false, sentence: "His eloquent speech moved the entire audience." },
    { id: 2, foreign: "Persist", russian: "Настаивать / Упорствовать", category: "1", learned: false, sentence: "You must persist if you want to achieve your goals." },
    { id: 3, foreign: "Abundant", russian: "Обильный / Избыточный", category: "1", learned: false, sentence: "The region is famous for its abundant rainfall." },
    { id: 4, foreign: "Vague", russian: "Смутный / Неясный", category: "1", learned: false, sentence: "He gave a very vague answer to my question." },
    { id: 5, foreign: "Scarcity", russian: "Дефицит / Нехватка", category: "1", learned: false, sentence: "The water scarcity became a huge problem in summer." },
    { id: 6, foreign: "Ticket", russian: "Билет", category: "2", learned: false, sentence: "I bought a train ticket to London." },
    { id: 7, foreign: "Airport", russian: "Аэропорт", category: "2", learned: false, sentence: "The plane landed safely at the airport." },
    { id: 8, foreign: "Hotel", russian: "Отель", category: "2", learned: false, sentence: "We booked a room at a five-star hotel." },
    { id: 9, foreign: "Passport", russian: "Паспорт", category: "2", learned: false, sentence: "Don't forget to pack your passport." },
    { id: 10, foreign: "Luggage", russian: "Багаж", category: "2", learned: false, sentence: "The airline lost my luggage." },
    { id: 11, foreign: "Flight", russian: "Рейс / Полет", category: "2", learned: false, sentence: "Our flight was delayed by two hours." },
    { id: 12, foreign: "Train", russian: "Поезд", category: "2", learned: false, sentence: "The train departs from platform four." },
    { id: 13, foreign: "Beach", russian: "Пляж", category: "2", learned: false, sentence: "We spent the whole day on the sunny beach." },
    { id: 14, foreign: "Map", russian: "Карта", category: "2", learned: false, sentence: "Let's check the map to find the route." },
    { id: 15, foreign: "Guide", russian: "Гид / Экскурсовод", category: "2", learned: false, sentence: "The tour guide told us historical facts." },
    { id: 16, foreign: "Journey", russian: "Путешествие", category: "2", learned: false, sentence: "Life is a beautiful journey." },
    { id: 17, foreign: "Island", russian: "Остров", category: "2", learned: false, sentence: "They traveled to a tropical island." },
    { id: 18, foreign: "Route", russian: "Маршрут", category: "2", learned: false, sentence: "This is the shortest route to the city." },
    { id: 19, foreign: "Border", russian: "Граница", category: "2", learned: false, sentence: "We crossed the border in the morning." },
    { id: 20, foreign: "Customs", russian: "Таможня", category: "2", learned: false, sentence: "We had to go through customs at the airport." },
    { id: 21, foreign: "Apple", russian: "Яблоко", category: "3", learned: false, sentence: "An apple a day keeps the doctor away." },
    { id: 22, foreign: "Dinner", russian: "Ужин", category: "3", learned: false, sentence: "We had a delicious fish dinner." },
    { id: 23, foreign: "Water", russian: "Вода", category: "3", learned: false, sentence: "He drank a whole bottle of fresh water." },
    { id: 24, foreign: "Breakfast", russian: "Завтрак", category: "3", learned: false, sentence: "Breakfast is the most important meal." },
    { id: 25, foreign: "Lunch", russian: "Обед", category: "3", learned: false, sentence: "Let's meet for lunch at one o'clock." },
    { id: 26, foreign: "Bread", russian: "Хлеб", category: "3", learned: false, sentence: "She bought a fresh loaf of white bread." },
    { id: 27, framework: "Cheese", foreign: "Cheese", russian: "Сыр", category: "3", learned: false, sentence: "This French cheese tastes incredible." },
    { id: 28, foreign: "Meat", russian: "Мясо", category: "3", learned: false, sentence: "He prefers vegetables over red meat." },
    { id: 29, foreign: "Fish", russian: "Рыба", category: "3", learned: false, sentence: "The cat loves eating fresh fish." },
    { id: 30, foreign: "Vegetable", russian: "Овощ", category: "3", learned: false, sentence: "Carrot is a healthy orange vegetable." },
    { id: 31, foreign: "Fruit", russian: "Фрукт", category: "3", learned: false, sentence: "Mango is my absolute favorite fruit." },
    { id: 32, foreign: "Sugar", russian: "Сахар", category: "3", learned: false, sentence: "Do you add sugar to your hot coffee?" },
    { id: 33, foreign: "Salt", russian: "Соль", category: "3", learned: false, sentence: "The soup needs a little bit more salt." },
    { id: 34, foreign: "Pepper", russian: "Перец", category: "3", learned: false, sentence: "Black pepper adds a good flavor." },
    { id: 35, foreign: "Milk", russian: "Молоко", category: "3", learned: false, sentence: "Pour some cold milk into the cereal." },
    { id: 36, foreign: "Butter", russian: "Сливочное масло", category: "3", learned: false, sentence: "Spread some soft butter on the toast." },
    { id: 37, foreign: "Egg", russian: "Яйцо", category: "3", learned: false, sentence: "He fried an egg for his breakfast." },
    { id: 38, foreign: "Juice", russian: "Сок", category: "3", learned: false, sentence: "Fresh orange juice is very refreshing." },
    { id: 39, foreign: "Coffee", russian: "Кофе", category: "3", learned: false, sentence: "I cannot start my day without black coffee." },
    { id: 40, foreign: "Tea", russian: "Чай", category: "3", learned: false, sentence: "She loves drinking hot green tea with lemon." }
];

let wordsDatabase = JSON.parse(localStorage.getItem("word_bloom_db")) || initialWords;
const itWords = [
    { id: 41, foreign: "Laptop", russian: "Ноутбук", category: "4", learned: false, sentence: "He closed his laptop after finishing work." },
    { id: 42, foreign: "Code", russian: "Код", category: "4", learned: false, sentence: "She wrote code for the new web application." },
    { id: 43, foreign: "Website", russian: "Веб-сайт", category: "4", learned: false, sentence: "Our company launched a modern official website." },
    { id: 44, foreign: "Computer", russian: "Компьютер", category: "4", learned: false, sentence: "The personal computer needs a hardware upgrade." },
    { id: 45, foreign: "Software", russian: "Программное обеспечение", category: "4", learned: false, sentence: "Install the latest software update immediately." },
    { id: 46, foreign: "Hardware", russian: "Железо / Аппаратная часть", category: "4", learned: false, sentence: "Computer hardware includes the CPU and RAM." },
    { id: 47, foreign: "Developer", russian: "Разработчик", category: "4", learned: false, sentence: "The lead developer assigned the tasks today." },
    { id: 48, foreign: "Programmer", russian: "Программист", category: "4", learned: false, sentence: "He works as a senior JavaScript programmer." },
    { id: 49, foreign: "Database", russian: "База данных", category: "4", learned: false, sentence: "User profiles are stored in the SQL database." },
    { id: 50, foreign: "Server", russian: "Сервер", category: "4", learned: false, sentence: "The remote server crashed due to high traffic." },
    { id: 51, foreign: "Network", russian: "Сеть", category: "4", learned: false, sentence: "Connect your device to the local office network." },
    { id: 52, foreign: "Application", russian: "Приложение", category: "4", learned: false, sentence: "Download our official mobile application now." },
    { id: 53, foreign: "Framework", russian: "Фреймворк", category: "4", learned: false, sentence: "React is a popular web frontend framework." },
    { id: 54, foreign: "Library", russian: "Библиотека (кода)", category: "4", learned: false, sentence: "This open-source library simplifies chart creation." },
    { id: 55, foreign: "Variable", russian: "Переменная", category: "4", learned: false, sentence: "Declare a global variable to store the count." },
    { id: 56, foreign: "Function", russian: "Функция", category: "4", learned: false, sentence: "This custom function returns a random number." },
    { id: 57, foreign: "Array", russian: "Массив", category: "4", learned: false, sentence: "The array contains a list of word objects." },
    { id: 58, foreign: "Object", russian: "Объект", category: "4", learned: false, sentence: "JavaScript objects hold key-value pairs." },
    { id: 59, foreign: "Bug", russian: "Ошибка / Баг", category: "4", learned: false, sentence: "The QA team discovered a major UI bug." },
    { id: 60, foreign: "Feature", russian: "Фича / Особенность", category: "4", learned: false, sentence: "Dark mode is the most requested design feature." }
];

if (!localStorage.getItem("word_bloom_db")) {
    wordsDatabase = [...initialWords, ...itWords];
    localStorage.setItem("word_bloom_db", JSON.stringify(wordsDatabase));
}

let currentWords = [];
let currentIndex = 0;
let currentLessonNum = "1";

const lessonTitles = {
    "1": "Урок №1: Первое знакомство",
    "2": "Урок №2: Путешествия",
    "3": "Урок №3: Еда и рестораны",
    "4": "Урок №4: IT и Работа"
};
function saveToStorage() {
    localStorage.setItem("word_bloom_db", JSON.stringify(wordsDatabase));
}

function speakWord(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        window.speechSynthesis.speak(utterance);
    }
}

function switchPage(pageId) {
    document.querySelectorAll(".page").forEach(page => page.style.display = "none");
    document.querySelectorAll(".nav-link").forEach(link => link.classList.remove("active"));
    
    const activePage = document.getElementById(`${pageId}-page`);
    if (activePage) activePage.style.display = "flex";
    
    const activeLink = document.getElementById(`nav-${pageId}`);
    if (activeLink) activeLink.classList.add("active");
    
    if (pageId === "dictionary") renderDictionary();
}
function startTraining(lessonNum) {
    currentLessonNum = lessonNum;
    
    let available = wordsDatabase.filter(w => w.category === String(lessonNum) && !w.learned);
    
    if (available.length === 0) {
        alert("Вы уже выучили все слова из этого урока!");
        switchPage("home");
        return;
    }
    
    available.sort(() => Math.random() - 0.5);
    currentWords = available;
    currentIndex = 0;
    
    const titleEl = document.getElementById("lesson-title");
    if (titleEl && lessonTitles[lessonNum]) {
        titleEl.textContent = lessonTitles[lessonNum];
    }
    
    switchPage("trainer");
    renderTrainerCard();
}
function renderTrainerCard() {
    if (currentIndex >= currentWords.length) {
        alert("Поздравляем! Вы успешно завершили этот урок.");
        switchPage("home");
        return;
    }
    
    const word = currentWords[currentIndex];
    
    const wordEngEl = document.getElementById("word-eng");
    const wordRusEl = document.getElementById("word-rus");
    const wordSentenceEl = document.getElementById("word-sentence");
    
    if (wordEngEl) wordEngEl.textContent = word.foreign;
    if (wordRusEl) {
        wordRusEl.textContent = word.russian;
        wordRusEl.style.display = "none";
    }
    if (wordSentenceEl) wordSentenceEl.textContent = word.sentence || "";
    
    const pBar = document.getElementById("p-bar");
    if (pBar) {
        const percent = (currentIndex / currentWords.length) * 100;
        pBar.style.width = `${percent}%`;
    }
}

function handleAnswer(knewIt) {
    const currentWord = currentWords[currentIndex];
    
    if (knewIt) {
        const dbWord = wordsDatabase.find(w => w.id === currentWord.id);
        if (dbWord) {
            dbWord.learned = true;
            saveToStorage();
        }
    }
    
    currentIndex++;
    renderTrainerCard();
}
function renderDictionary() {
    const grid = document.getElementById("dictionary-grid");
    if (!grid) return;
    grid.innerHTML = "";
    
    const searchQuery = document.getElementById("search-input").value.toLowerCase().trim();
    
    const filtered = wordsDatabase.filter(word => {
        return word.foreign.toLowerCase().includes(searchQuery) || word.russian.toLowerCase().includes(searchQuery);
    });
    
    filtered.forEach(word => {
        const row = document.createElement("div");
        row.className = "dict-row";
        row.style.display = "flex";
        row.style.justifyContent = "space-between";
        row.style.alignItems = "center";
        row.style.padding = "12px 16px";
        row.style.borderBottom = "1px solid var(--border-color)";
        
        row.innerHTML = `
            <div style="display: flex; gap: 16px; align-items: center;">
                <div class="status-circle-bloom" style="width: 12px; height: 12px; border-radius: 50%; background: ${word.learned ? 'var(--success)' : 'var(--border-color)'}; cursor: pointer;"></div>
                <div>
                    <strong style="font-size: 16px;">${word.foreign}</strong> — 
                    <span style="color: var(--text-muted);">${word.russian}</span>
                </div>
            </div>
            <div style="display: flex; gap: 12px;">
                <button class="btn-row-speak" style="background: transparent; border: none; cursor: pointer; font-size: 16px;">🔊</button>
                <button class="btn-row-delete" style="background: transparent; border: none; cursor: pointer; color: var(--danger); font-size: 16px; font-weight: bold;">×</button>
            </div>
        `;
        
        row.querySelector(".status-circle-bloom").addEventListener("click", () => {
            word.learned = !word.learned;
            saveToStorage();
            renderDictionary();
        });
        
        row.querySelector(".btn-row-speak").addEventListener("click", () => {
            speakWord(word.foreign);
        });
        
        row.querySelector(".btn-row-delete").addEventListener("click", () => {
            if (confirm(`Удалить слово "${word.foreign}"?`)) {
                wordsDatabase = wordsDatabase.filter(w => w.id !== word.id);
                saveToStorage();
                renderDictionary();
            }
        });
        
        grid.appendChild(row);
    });
}
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("nav-home").addEventListener("click", (e) => { e.preventDefault(); switchPage("home"); });
    
    const aboutModal = document.getElementById("about-modal");
    const aboutTrigger = document.getElementById("nav-about-trigger");
    if (aboutTrigger) {
        aboutTrigger.addEventListener("click", (e) => { e.preventDefault(); aboutModal.style.display = "flex"; });
    }
    document.getElementById("close-modal-btn").addEventListener("click", () => aboutModal.style.display = "none");
    
    const addWordModal = document.getElementById("add-word-modal");
    const openAddBtn = document.getElementById("open-add-modal-btn");
    if (openAddBtn) {
        openAddBtn.addEventListener("click", () => addWordModal.style.display = "flex");
    }
    document.getElementById("close-add-modal-btn").addEventListener("click", () => addWordModal.style.display = "none");
    
    const startLearningBtn = document.getElementById("start-learning-btn");
    if (startLearningBtn) {
        startLearningBtn.addEventListener("click", () => startTraining("1"));
    }
    
    document.getElementById("btn-leave-trainer").addEventListener("click", () => {
        if (confirm("Вы уверены, что хотите прервать тренировку? Прогресс текущего урока не сохранится.")) {
            switchPage("home");
        }
    });
    
    document.getElementById("card").addEventListener("click", () => {
        const rusText = document.getElementById("word-rus");
        if (rusText) rusText.style.display = "block";
    });
    
    document.getElementById("speak-btn").addEventListener("click", (e) => {
        e.stopPropagation();
        const engText = document.getElementById("word-eng").textContent;
        speakWord(engText);
    });
    
    document.getElementById("know-btn").addEventListener("click", () => handleAnswer(true));
    document.getElementById("dont-know-btn").addEventListener("click", () => handleAnswer(false));
    
    const searchInput = document.getElementById("search-input");
    if (searchInput) {
        searchInput.addEventListener("input", renderDictionary);
    }
    
    document.querySelectorAll(".lesson-card").forEach(card => {
        card.addEventListener("click", () => {
            const lessonNum = card.getAttribute("data-lesson");
            startTraining(lessonNum);
        });
    });
    
    const themeBtn = document.getElementById("theme-toggle");
    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            const currentTheme = document.body.getAttribute("data-theme");
            const newTheme = currentTheme === "dark" ? "light" : "dark";
            document.body.setAttribute("data-theme", newTheme);
            localStorage.setItem("word_bloom_theme", newTheme);
        });
        const savedTheme = localStorage.getItem("word_bloom_theme") || "light";
        document.body.setAttribute("data-theme", savedTheme);
    }
    
    document.getElementById("reset-db-btn").addEventListener("click", () => {
        if (confirm("Вы уверены, что хотите сбросить весь прогресс обучения?")) {
            wordsDatabase = [...initialWords, ...itWords];
            saveToStorage();
            if (document.getElementById("dictionary-page").style.display === "flex") {
                renderDictionary();
            }
            aboutModal.style.display = "none";
            alert("Прогресс успешно сброшен!");
        }
    });
    
    document.getElementById("add-word-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const foreignInput = document.getElementById("new-foreign");
        const russianInput = document.getElementById("new-russian");
        const categorySelect = document.getElementById("new-category");
        
        const foreign = foreignInput.value.trim();
        const russian = russianInput.value.trim();
        const category = categorySelect.value;
        
        if (!foreign || !russian) return;
        
        const newId = wordsDatabase.length > 0 ? Math.max(...wordsDatabase.map(w => w.id)) + 1 : 1;
        const newWord = { id: newId, foreign, russian, category, learned: false, sentence: "" };
        
        wordsDatabase.push(newWord);
        saveToStorage();
        
        foreignInput.value = "";
        russianInput.value = "";
        addWordModal.style.display = "none";
        
        alert("Слово успешно добавлено!");
        renderDictionary();
    });
    
    switchPage("home");
});
