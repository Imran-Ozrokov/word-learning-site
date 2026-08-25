const initialWords = [
    { id: 1, foreign: "Ticket", russian: "Билет", category: "travel", learned: false, sentence: "I bought a train ticket to London." },
    { id: 2, foreign: "Airport", russian: "Аэропорт", category: "travel", learned: false, sentence: "The plane landed safely at the airport." },
    { id: 3, foreign: "Hotel", russian: "Отель", category: "travel", learned: false, sentence: "We booked a room at a five-star hotel." },
    { id: 4, foreign: "Passport", russian: "Паспорт", category: "travel", learned: false, sentence: "Don't forget to pack your passport." },
    { id: 5, foreign: "Luggage", russian: "Багаж", category: "travel", learned: false, sentence: "The airline lost my luggage." },
    { id: 6, foreign: "Flight", russian: "Рейс / Полет", category: "travel", learned: false, sentence: "Our flight was delayed by two hours." },
    { id: 7, foreign: "Train", russian: "Поезд", category: "travel", learned: false, sentence: "The train departs from platform four." },
    { id: 8, foreign: "Beach", russian: "Пляж", category: "travel", learned: false, sentence: "We spent the whole day on the sunny beach." },
    { id: 9, foreign: "Map", russian: "Карта", category: "travel", learned: false, sentence: "Let's check the map to find the route." },
    { id: 10, foreign: "Guide", russian: "Гид / Экскурсовод", category: "travel", learned: false, sentence: "The tour guide told us historical facts." },
    { id: 11, foreign: "Journey", russian: "Путешествие", category: "travel", learned: false, sentence: "Life is a beautiful journey." },
    { id: 12, foreign: "Island", russian: "Остров", category: "travel", learned: false, sentence: "They traveled to a tropical island." },
    { id: 13, foreign: "Route", russian: "Маршрут", category: "travel", learned: false, sentence: "This is the shortest route to the city." },
    { id: 14, foreign: "Border", russian: "Граница", category: "travel", learned: false, sentence: "We crossed the border in the morning." },
    { id: 15, foreign: "Customs", russian: "Таможня", category: "travel", learned: false, sentence: "We had to go through customs at the airport." },
    { id: 16, foreign: "Suitcase", russian: "Чемодан", category: "travel", learned: false, sentence: "My suitcase is too heavy to lift." },
    { id: 17, foreign: "Visa", russian: "Виза", category: "travel", learned: false, sentence: "He applied for a tourist visa." },
    { id: 18, foreign: "Cruise", russian: "Круиз", category: "travel", learned: false, sentence: "They went on a luxury Mediterranean cruise." },
    { id: 19, foreign: "Excursion", russian: "Экскурсия", category: "travel", learned: false, sentence: "Tomorrow we have an excursion to the museum." },
    { id: 20, foreign: "Resort", russian: "Курорт", category: "travel", learned: false, sentence: "This seaside resort is perfect for families." },
    { id: 21, foreign: "Booking", russian: "Бронирование", category: "travel", learned: false, sentence: "I received a confirmation for my booking." },
    { id: 22, foreign: "Destination", russian: "Направление", category: "travel", learned: false, sentence: "Paris is a popular travel destination." },
    { id: 23, foreign: "Passenger", russian: "Пассажир", category: "travel", learned: false, sentence: "The passenger boarded the bus." },
    { id: 24, foreign: "Departure", russian: "Вылет / Отправление", category: "travel", learned: false, sentence: "Check the screen for departure times." },
    { id: 25, foreign: "Arrival", russian: "Прибытие", category: "travel", learned: false, sentence: "We waited for his arrival at the station." },
    { id: 26, foreign: "Schedule", russian: "Расписание", category: "travel", learned: false, sentence: "The train schedule has changed recently." },
    { id: 27, foreign: "Currency", russian: "Валюта", category: "travel", learned: false, sentence: "You need to exchange your local currency." },
    { id: 28, foreign: "Souvenir", russian: "Сувенир", category: "travel", learned: false, sentence: "I bought a small souvenir from Italy." },
    { id: 29, foreign: "Adventure", russian: "Приключение", category: "travel", learned: false, sentence: "Hiking in the mountains is a great adventure." },
    { id: 30, foreign: "Luggage tag", russian: "Багажная бирка", category: "travel", learned: false, sentence: "Write your name on the luggage tag." },
    { id: 31, foreign: "Boarding pass", russian: "Посадочный талон", category: "travel", learned: false, sentence: "Please show your boarding pass here." },
    { id: 32, foreign: "Flight attendant", russian: "Бортпроводник", category: "travel", learned: false, sentence: "The flight attendant served drinks." },
    { id: 33, foreign: "Sightseeing", russian: "Осмотр достопримечательностей", category: "travel", learned: false, sentence: "We did some sightseeing in London." },
    { id: 34, foreign: "Travel agency", russian: "Турагентство", category: "travel", learned: false, sentence: "The travel agency planned our whole trip." },
    { id: 35, foreign: "Insurance", russian: "Страховка", category: "travel", learned: false, sentence: "Medical insurance is necessary for travel." },
    { id: 36, foreign: "Apple", russian: "Яблоко", category: "food", learned: false, sentence: "An apple a day keeps the doctor away." },
    { id: 37, foreign: "Dinner", russian: "Ужин", category: "food", learned: false, sentence: "We had a delicious fish dinner." },
    { id: 38, foreign: "Water", russian: "Вода", category: "food", learned: false, sentence: "He drank a whole bottle of fresh water." },
    { id: 39, foreign: "Breakfast", russian: "Завтрак", category: "food", learned: false, sentence: "Breakfast is the most important meal." },
    { id: 40, foreign: "Lunch", russian: "Обед", category: "food", learned: false, sentence: "Let's meet for lunch at one o'clock." }
];

let wordsDatabase = JSON.parse(localStorage.getItem("words_db")) || initialWords;
const foodWords = [
    { id: 41, foreign: "Bread", russian: "Хлеб", category: "food", learned: false, sentence: "She bought a fresh loaf of white bread." },
    { id: 42, foreign: "Cheese", russian: "Сыр", category: "food", learned: false, sentence: "This French cheese tastes incredible." },
    { id: 43, foreign: "Meat", russian: "Мясо", category: "food", learned: false, sentence: "He prefers vegetables over red meat." },
    { id: 44, foreign: "Fish", russian: "Рыба", category: "food", learned: false, sentence: "The cat loves eating fresh fish." },
    { id: 45, foreign: "Vegetable", russian: "Овощ", category: "food", learned: false, sentence: "Carrot is a healthy orange vegetable." },
    { id: 46, foreign: "Fruit", russian: "Фрукт", category: "food", learned: false, sentence: "Mango is my absolute favorite fruit." },
    { id: 47, foreign: "Sugar", russian: "Сахар", category: "food", learned: false, sentence: "Do you add sugar to your hot coffee?" },
    { id: 48, foreign: "Salt", russian: "Соль", category: "food", learned: false, sentence: "The soup needs a little bit more salt." },
    { id: 49, foreign: "Pepper", russian: "Перец", category: "food", learned: false, sentence: "Black pepper adds a good flavor." },
    { id: 50, foreign: "Milk", russian: "Молоко", category: "food", learned: false, sentence: "Pour some cold milk into the cereal." },
    { id: 51, foreign: "Butter", russian: "Сливочное масло", category: "food", learned: false, sentence: "Spread some soft butter on the toast." },
    { id: 52, foreign: "Egg", russian: "Яйцо", category: "food", learned: false, sentence: "He fried an egg for his breakfast." },
    { id: 53, foreign: "Juice", russian: "Сок", category: "food", learned: false, sentence: "Fresh orange juice is very refreshing." },
    { id: 54, foreign: "Coffee", russian: "Кофе", category: "food", learned: false, sentence: "I cannot start my day without black coffee." },
    { id: 55, foreign: "Tea", russian: "Чай", category: "food", learned: false, sentence: "She loves drinking hot green tea with lemon." },
    { id: 56, foreign: "Soup", russian: "Суп", category: "food", learned: false, sentence: "The hot chicken soup smelled delicious." },
    { id: 57, foreign: "Salad", russian: "Салат", category: "food", learned: false, sentence: "We ordered a fresh Greek salad." },
    { id: 58, foreign: "Cake", russian: "Торт / Пирожное", category: "food", learned: false, sentence: "She baked a chocolate birthday cake." },
    { id: 59, foreign: "Dessert", russian: "Десерт", category: "food", learned: false, sentence: "Ice cream is the best summer dessert." },
    { id: 60, foreign: "Menu", russian: "Меню", category: "food", learned: false, sentence: "The waiter handed us the dinner menu." },
    { id: 61, foreign: "Chef", russian: "Шеф-повар", category: "food", learned: false, sentence: "The talented chef prepared an amazing meal." },
    { id: 62, foreign: "Waiter", russian: "Официант", category: "food", learned: false, sentence: "The friendly waiter took our order quickly." },
    { id: 63, foreign: "Bill", russian: "Счет (в ресторане)", category: "food", learned: false, sentence: "Could we please have the bill, sir?" },
    { id: 64, foreign: "Kitchen", russian: "Кухня", category: "food", learned: false, sentence: "The restaurant has a modern spacious kitchen." },
    { id: 65, foreign: "Recipe", russian: "Рецепт", category: "food", learned: false, sentence: "Follow this simple recipe to bake bread." },
    { id: 66, foreign: "Spices", russian: "Специи", category: "food", learned: false, sentence: "Indian food uses many traditional spices." },
    { id: 67, foreign: "Spoon", russian: "Ложка", category: "food", learned: false, sentence: "Eat your warm soup with a soup spoon." },
    { id: 68, foreign: "Fork", russian: "Вилка", category: "food", learned: false, sentence: "He used a fork to eat his salad." },   
    { id: 69, foreign: "Knife", russian: "Нож", category: "food", learned: false, sentence: "Be careful because that steak knife is sharp." },
    { id: 70, foreign: "Plate", russian: "Тарелка", category: "food", learned: false, sentence: "She put the hot food on a clean plate." },
    { id: 71, foreign: "Laptop", russian: "Ноутбук", category: "it", learned: false, sentence: "He closed his laptop after finishing work." },
    { id: 72, foreign: "Code", russian: "Код", category: "it", learned: false, sentence: "She wrote code for the new web application." },
    { id: 73, foreign: "Website", russian: "Веб-сайт", category: "it", learned: false, sentence: "Our company launched a modern official website." },
    { id: 74, foreign: "Computer", russian: "Компьютер", category: "it", learned: false, sentence: "The personal computer needs a hardware upgrade." },
    { id: 75, foreign: "Software", russian: "Программное обеспечение", category: "it", learned: false, sentence: "Install the latest software update immediately." }
];
const itWords = [
    { id: 76, foreign: "Hardware", russian: "Железо / Аппаратная часть", category: "it", learned: false, sentence: "Computer hardware includes the CPU and RAM." },
    { id: 77, foreign: "Developer", russian: "Разработчик", category: "it", learned: false, sentence: "The lead developer assigned the tasks today." },
    { id: 78, foreign: "Programmer", russian: "Программист", category: "it", learned: false, sentence: "He works as a senior JavaScript programmer." },
    { id: 79, foreign: "Database", russian: "База данных", category: "it", learned: false, sentence: "User profiles are stored in the SQL database." },
    { id: 80, foreign: "Server", russian: "Сервер", category: "it", learned: false, sentence: "The remote server crashed due to high traffic." },
    { id: 81, foreign: "Network", russian: "Сеть", category: "it", learned: false, sentence: "Connect your device to the local office network." },
    { id: 82, foreign: "Application", russian: "Приложение", category: "it", learned: false, sentence: "Download our official mobile application now." },
    { id: 83, foreign: "Framework", russian: "Фреймворк", category: "it", learned: false, sentence: "React is a popular web frontend framework." },
    { id: 84, foreign: "Library", russian: "Библиотека (кода)", category: "it", learned: false, sentence: "This open-source library simplifies chart creation." },
    { id: 85, foreign: "Variable", russian: "Переменная", category: "it", learned: false, sentence: "Declare a global variable to store the count." },
    { id: 86, foreign: "Function", russian: "Функция", category: "it", learned: false, sentence: "This custom function returns a random number." },
    { id: 87, foreign: "Array", russian: "Массив", category: "it", learned: false, sentence: "The array contains a list of word objects." },
    { id: 88, foreign: "Object", russian: "Объект", category: "it", learned: false, sentence: "JavaScript objects hold key-value pairs." },
    { id: 89, foreign: "Bug", russian: "Ошибка / Баг", category: "it", learned: false, sentence: "The QA team discovered a major UI bug." },
    { id: 90, foreign: "Feature", russian: "Фича / Особенность", category: "it", learned: false, sentence: "Dark mode is the most requested design feature." },
    { id: 91, foreign: "Compiler", russian: "Компилятор", category: "it", learned: false, sentence: "The compiler translates source code into machine code." },
    { id: 92, foreign: "Deployment", russian: "Деплой / Развертывание", category: "it", learned: false, sentence: "The production deployment took thirty minutes yesterday." },
    { id: 93, foreign: "Repository", russian: "Репозиторий", category: "it", learned: false, sentence: "Push your recent commits to the remote repository." },
    { id: 94, foreign: "Commit", russian: "Коммит / Фиксация", category: "it", learned: false, sentence: "Write a descriptive message for every git commit." },
    { id: 95, foreign: "Branch", russian: "Ветка", category: "it", learned: false, sentence: "Create a separate branch for testing features." },
    { id: 96, foreign: "Merge", russian: "Слияние", category: "it", learned: false, sentence: "Merge the feature branch into main safely." },
    { id: 97, foreign: "Interface", russian: "Интерфейс", category: "it", learned: false, sentence: "The user interface should be simple and intuitive." },
    { id: 98, foreign: "User", russian: "Пользователь", category: "it", learned: false, sentence: "The active user logged out of the system." },
    { id: 99, foreign: "Password", russian: "Пароль", category: "it", learned: false, sentence: "Choose a strong password containing special characters." },
    { id: 100, foreign: "Security", russian: "Безопасность", category: "it", learned: false, sentence: "Cyber security protects against online threats." },
    { id: 101, foreign: "Algorithm", russian: "Алгоритм", category: "it", learned: false, sentence: "The search algorithm sorts data very efficiently." },
    { id: 102, foreign: "Authentication", russian: "Аутентификация", category: "it", learned: false, sentence: "Two-factor authentication secures your account." },
    { id: 103, foreign: "Frontend", russian: "Фронтенд", category: "it", learned: false, sentence: "The frontend developer styles the web pages." },
    { id: 104, foreign: "Backend", russian: "Бэкенд", category: "it", learned: false, sentence: "The backend server handles database management operations." },
    { id: 105, foreign: "API", russian: "API / Интерфейс приложений", category: "it", learned: false, sentence: "The weather service provides a free public API." }
];

if (!localStorage.getItem("words_db")) {
    wordsDatabase = [...initialWords, ...foodWords, ...itWords];
    localStorage.setItem("words_db", JSON.stringify(wordsDatabase));
}

let currentWords = [];
let currentIndex = 0;
let timerInterval = null;
let isTimerActive = false;
function saveToStorage() {
    localStorage.setItem("words_db", JSON.stringify(wordsDatabase));
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
    if (pageId === "home") updateGlobalStats();
    
    if (pageId !== "trainer") clearInterval(timerInterval);
}
function updateGlobalStats() {
    const total = wordsDatabase.length;
    const learned = wordsDatabase.filter(w => w.learned).length;
    
    const goalTotalEl = document.getElementById("goal-total");
    const goalTodayEl = document.getElementById("goal-today");
    const statsAllEl = document.getElementById("stats-all-words");
    const statsLearnedEl = document.getElementById("stats-learned-words");
    
    if (goalTotalEl) goalTotalEl.textContent = total;
    if (goalTodayEl) goalTodayEl.textContent = learned;
    if (statsAllEl) statsAllEl.textContent = total;
    if (statsLearnedEl) statsLearnedEl.textContent = learned;
    
    const counts = { travel: 0, food: 0, it: 0 };
    wordsDatabase.forEach(w => { if(counts[w.category] !== undefined) counts[w.category]++; });
    
    const countTravelEl = document.getElementById("count-travel");
    const countFoodEl = document.getElementById("count-food");
    const countItEl = document.getElementById("count-it");
    
    if (countTravelEl) countTravelEl.textContent = `${counts.travel} слов`;
    if (countFoodEl) countFoodEl.textContent = `${counts.food} слов`;
    if (countItEl) countItEl.textContent = `${counts.it} слов`;
}

function startTraining(category = null, isMix = false) {
    let available = wordsDatabase.filter(w => !w.learned);
    if (category) {
        available = available.filter(w => w.category === category);
    }
    
    if (available.length === 0) {
        alert("Отличная работа! Все слова из этой категории уже выучены.");
        switchPage("home");
        return;
    }
    
    if (isMix) {
        available.sort(() => Math.random() - 0.5);
    }
    
    currentWords = available.slice(0, 10);
    currentIndex = 0;
    
    const titleEl = document.getElementById("lesson-title");
    if (titleEl) {
        if (category === "travel") titleEl.textContent = "Урок: Путешествия";
        else if (category === "food") titleEl.textContent = "Урок: Еда и рестораны";
        else if (category === "it") titleEl.textContent = "Урок: IT и Работа";
        else titleEl.textContent = "Урок: Случайный микс";
    }
    
    switchPage("trainer");
    renderTrainerCard();
}
function renderTrainerCard() {
    if (currentIndex >= currentWords.length) {
        clearInterval(timerInterval);
        alert("Поздравляем! Вы завершили текущий урок тренировки.");
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
    
    resetAndStartTimer();
}

function resetAndStartTimer() {
    clearInterval(timerInterval);
    const timerDisplay = document.getElementById("timer-display");
    
    if (!isTimerActive) {
        if (timerDisplay) timerDisplay.style.display = "none";
        return;
    }
    
    if (timerDisplay) {
        timerDisplay.style.display = "block";
        let timeLeft = 10;
        timerDisplay.textContent = `${timeLeft}с`;
        
        timerInterval = setInterval(() => {
            timeLeft--;
            timerDisplay.textContent = `${timeLeft}с`;
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                handleAnswer(false);
            }
        }, 1000);
    }
}

function handleAnswer(knewIt) {
    const word = currentWords[currentIndex];
    if (knewIt) {
        const dbWord = wordsDatabase.find(w => w.id === word.id);
        if (dbWord) dbWord.learned = true;
        saveToStorage();
    }
    
    currentIndex++;
    renderTrainerCard();
}

function renderDictionary() {
    const grid = document.getElementById("dictionary-grid");
    if (!grid) return;
    grid.innerHTML = "";
    
    const searchQuery = document.getElementById("search-input").value.toLowerCase().trim();
    const activeTagBtn = document.querySelector(".tag.active");
    const activeTag = activeTagBtn ? activeTagBtn.getAttribute("data-tag") : "all";
    
    const filtered = wordsDatabase.filter(word => {
        const matchesSearch = word.foreign.toLowerCase().includes(searchQuery) || word.russian.toLowerCase().includes(searchQuery);
        const matchesTag = activeTag === "all" || word.category === activeTag;
        return matchesSearch && matchesTag;
    });
    
    filtered.forEach(word => {
        const row = document.createElement("div");
        row.className = "dict-row";
        
        row.innerHTML = `
            <div class="dict-info">
                <div class="status-circle-bloom" style="width: 16px; height: 16px; border-radius: 50%; background: ${word.learned ? 'var(--success)' : 'var(--border-color)'}; cursor: pointer;"></div>
                <div class="dict-eng">${word.foreign}</div>
                <div class="dict-rus">${word.russian}</div>
            </div>
            <div class="dict-actions">
                <button class="btn-row-speak" title="Прослушать">🔊</button>
                <button class="btn-row-delete" title="Удалить">×</button>
            </div>
        `;
        
        row.querySelector(".status-circle-bloom").addEventListener("click", (e) => {
            e.stopPropagation();
            word.learned = !word.learned;
            saveToStorage();
            renderDictionary();
            updateGlobalStats();
        });
        
        row.querySelector(".btn-row-speak").addEventListener("click", (e) => {
            e.stopPropagation();
            speakWord(word.foreign);
        });
        
        row.querySelector(".btn-row-delete").addEventListener("click", (e) => {
            e.stopPropagation();
            if (confirm(`Удалить слово "${word.foreign}"?`)) {
                wordsDatabase = wordsDatabase.filter(w => w.id !== word.id);
                saveToStorage();
                renderDictionary();
                updateGlobalStats();
            }
        });
        
        grid.appendChild(row);
    });
}
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("nav-home").addEventListener("click", (e) => { e.preventDefault(); switchPage("home"); });
    document.getElementById("nav-trainer").addEventListener("click", (e) => { e.preventDefault(); startTraining(null, true); });
    document.getElementById("nav-dictionary").addEventListener("click", (e) => { e.preventDefault(); switchPage("dictionary"); });
    
    const aboutModal = document.getElementById("about-modal");
    document.getElementById("logo-btn").addEventListener("click", () => aboutModal.style.display = "flex");
    document.getElementById("close-modal-btn").addEventListener("click", () => aboutModal.style.display = "none");
    
    const addWordModal = document.getElementById("add-word-modal");
    document.getElementById("open-add-modal-btn").addEventListener("click", () => addWordModal.style.display = "flex");
    document.getElementById("close-add-modal-btn").addEventListener("click", () => addWordModal.style.display = "none");
    
    document.getElementById("start-learning-btn").addEventListener("click", () => startTraining(null, true));
    document.getElementById("mix-learning-btn").addEventListener("click", () => startTraining(null, true));
    
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
        const wordText = document.getElementById("word-eng").textContent;
        speakWord(wordText);
    });
    
    document.getElementById("know-btn").addEventListener("click", () => handleAnswer(true));
    document.getElementById("dont-know-btn").addEventListener("click", () => handleAnswer(false));
    
    const timerToggle = document.getElementById("timer-toggle");
    if (timerToggle) {
        timerToggle.addEventListener("change", (e) => {
            isTimerActive = e.target.checked;
            if (document.getElementById("trainer-page").style.display === "flex") {
                resetAndStartTimer();
            }
        });
    }

    document.querySelectorAll(".category-card").forEach(card => {
        card.addEventListener("click", () => {
            const cat = card.getAttribute("data-category");
            startTraining(cat, true);
        });
    });
    
    document.getElementById("search-input").addEventListener("input", renderDictionary);
    document.querySelectorAll(".tag").forEach(tagBtn => {
        tagBtn.addEventListener("click", () => {
            document.querySelectorAll(".tag").forEach(b => b.classList.remove("active"));
            tagBtn.classList.add("active");
            renderDictionary();
        });
    });
    
    document.getElementById("reset-db-btn").addEventListener("click", () => {
        if (confirm("Вы уверены, что хотите сбросить весь прогресс обучения? Это действие нельзя отменить.")) {
            wordsDatabase.forEach(w => w.learned = false);
            saveToStorage();
            renderDictionary();
            updateGlobalStats();
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
        
        alert("Слово успешно добавлено в словарь!");
        renderDictionary();
        updateGlobalStats();
    });

    const themeBtn = document.getElementById("theme-toggle");
    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            const currentTheme = document.body.getAttribute("data-theme");
            const newTheme = currentTheme === "dark" ? "light" : "dark";
            document.body.setAttribute("data-theme", newTheme);
            localStorage.setItem("word_learn_theme", newTheme);
        });
        const savedTheme = localStorage.getItem("word_learn_theme") || "light";
        document.body.setAttribute("data-theme", savedTheme);
    }

    switchPage("home");
    updateGlobalStats();
});
