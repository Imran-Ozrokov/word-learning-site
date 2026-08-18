const initialWords = [
    { id: 1, foreign: "Ticket", russian: "Билет", category: "travel", learned: false },
    { id: 2, foreign: "Airport", russian: "Аэропорт", category: "travel", learned: false },
    { id: 3, foreign: "Hotel", russian: "Отель", category: "travel", learned: false },
    { id: 4, foreign: "Passport", russian: "Паспорт", category: "travel", learned: false },
    { id: 5, foreign: "Luggage", russian: "Багаж", category: "travel", learned: false },
    { id: 6, foreign: "Flight", russian: "Рейс / Полет", category: "travel", learned: false },
    { id: 7, foreign: "Train", russian: "Поезд", category: "travel", learned: false },
    { id: 8, foreign: "Beach", russian: "Пляж", category: "travel", learned: false },
    { id: 9, foreign: "Map", russian: "Карта", category: "travel", learned: false },
    { id: 10, foreign: "Guide", russian: "Гид / Экскурсовод", category: "travel", learned: false },
    { id: 11, foreign: "Journey", russian: "Путешествие", category: "travel", learned: false },
    { id: 12, foreign: "Island", russian: "Остров", category: "travel", learned: false },
    { id: 13, foreign: "Route", russian: "Маршрут", category: "travel", learned: false },
    { id: 14, foreign: "Border", russian: "Граница", category: "travel", learned: false },
    { id: 15, foreign: "Customs", russian: "Таможня", category: "travel", learned: false },
    { id: 16, foreign: "Suitcase", russian: "Чемодан", category: "travel", learned: false },
    { id: 17, foreign: "Visa", russian: "Виза", category: "travel", learned: false },
    { id: 18, foreign: "Cruise", russian: "Круиз", category: "travel", learned: false },
    { id: 19, foreign: "Excursion", russian: "Экскурсия", category: "travel", learned: false },
    { id: 20, foreign: "Resort", russian: "Курорт", category: "travel", learned: false },
    { id: 21, foreign: "Booking", russian: "Бронирование", category: "travel", learned: false },
    { id: 22, foreign: "Destination", russian: "Направление", category: "travel", learned: false },
    { id: 23, foreign: "Passenger", russian: "Пассажир", category: "travel", learned: false },
    { id: 24, foreign: "Departure", russian: "Вылет / Отправление", category: "travel", learned: false },
    { id: 25, foreign: "Arrival", russian: "Прибытие", category: "travel", learned: false },
    { id: 26, foreign: "Schedule", russian: "Расписание", category: "travel", learned: false },
    { id: 27, foreign: "Currency", russian: "Валюта", category: "travel", learned: false },
    { id: 28, foreign: "Souvenir", russian: "Сувенир", category: "travel", learned: false },
    { id: 29, foreign: "Adventure", russian: "Приключение", category: "travel", learned: false },
    { id: 30, foreign: "Luggage tag", russian: "Багажная бирка", category: "travel", learned: false },
    { id: 31, foreign: "Boarding pass", russian: "Посадочный талон", category: "travel", learned: false },
    { id: 32, foreign: "Flight attendant", russian: "Бортпроводник", category: "travel", learned: false },
    { id: 33, foreign: "Sightseeing", russian: "Осмотр достопримечательностей", category: "travel", learned: false },
    { id: 34, foreign: "Travel agency", russian: "Турагентство", category: "travel", learned: false },
    { id: 35, foreign: "Insurance", russian: "Страховка", category: "travel", learned: false },
    { id: 36, foreign: "Apple", russian: "Яблоко", category: "food", learned: false },
    { id: 37, foreign: "Dinner", russian: "Ужин", category: "food", learned: false },
    { id: 38, foreign: "Water", russian: "Вода", category: "food", learned: false },
    { id: 39, foreign: "Breakfast", russian: "Завтрак", category: "food", learned: false },
    { id: 40, foreign: "Lunch", russian: "Обед", category: "food", learned: false },
    { id: 41, foreign: "Bread", russian: "Хлеб", category: "food", learned: false },
    { id: 42, foreign: "Cheese", russian: "Сыр", category: "food", learned: false },
    { id: 43, foreign: "Meat", russian: "Мясо", category: "food", learned: false },
    { id: 44, foreign: "Fish", russian: "Рыба", category: "food", learned: false },
    { id: 45, foreign: "Vegetable", russian: "Овощ", category: "food", learned: false },
    { id: 46, foreign: "Fruit", russian: "Фрукт", category: "food", learned: false },
    { id: 47, foreign: "Sugar", russian: "Сахар", category: "food", learned: false },
    { id: 48, foreign: "Salt", russian: "Соль", category: "food", learned: false },
    { id: 49, foreign: "Pepper", russian: "Перец", category: "food", learned: false },
    { id: 50, foreign: "Milk", russian: "Молоко", category: "food", learned: false },
    { id: 51, foreign: "Butter", russian: "Сливочное масло", category: "food", learned: false },
    { id: 52, foreign: "Egg", russian: "Яйцо", category: "food", learned: false },
    { id: 53, foreign: "Juice", russian: "Сок", category: "food", learned: false },
    { id: 54, foreign: "Coffee", russian: "Кофе", category: "food", learned: false },
    { id: 55, foreign: "Tea", russian: "Чай", category: "food", learned: false },
    { id: 56, foreign: "Soup", russian: "Суп", category: "food", learned: false },
    { id: 57, foreign: "Salad", russian: "Салат", category: "food", learned: false },
    { id: 58, foreign: "Cake", russian: "Торт / Пирожное", category: "food", learned: false },
    { id: 59, foreign: "Dessert", russian: "Десерт", category: "food", learned: false },
    { id: 60, foreign: "Menu", russian: "Меню", category: "food", learned: false },
    { id: 61, foreign: "Chef", russian: "Шеф-повар", category: "food", learned: false },
    { id: 62, foreign: "Waiter", russian: "Официант", category: "food", learned: false },
    { id: 63, foreign: "Bill", russian: "Счет (в ресторане)", category: "food", learned: false },
    { id: 64, foreign: "Kitchen", russian: "Кухня", category: "food", learned: false },
    { id: 65, foreign: "Recipe", russian: "Рецепт", category: "food", learned: false },
    { id: 66, foreign: "Spices", russian: "Специи", category: "food", learned: false },
    { id: 67, foreign: "Spoon", russian: "Ложка", category: "food", learned: false },
    { id: 68, foreign: "Fork", russian: "Вилка", category: "food", learned: false },
    { id: 69, foreign: "Knife", russian: "Нож", category: "food", learned: false },
    { id: 70, foreign: "Plate", russian: "Тарелка", category: "food", learned: false },
    { id: 71, foreign: "Laptop", russian: "Ноутбук", category: "it", learned: false },
    { id: 72, foreign: "Code", russian: "Код", category: "it", learned: false },
    { id: 73, foreign: "Website", russian: "Веб-сайт", category: "it", learned: false },
    { id: 74, foreign: "Computer", russian: "Компьютер", category: "it", learned: false },
    { id: 75, foreign: "Software", russian: "Программное обеспечение", category: "it", learned: false },
    { id: 76, foreign: "Hardware", russian: "Железо / Аппаратная часть", category: "it", learned: false },
    { id: 77, foreign: "Developer", russian: "Разработчик", category: "it", learned: false },
    { id: 78, foreign: "Programmer", russian: "Программист", category: "it", learned: false },
    { id: 79, foreign: "Database", russian: "База данных", category: "it", learned: false },
    { id: 80, foreign: "Server", russian: "Сервер", category: "it", learned: false },
    { id: 81, foreign: "Network", russian: "Сеть", category: "it", learned: false },
    { id: 82, foreign: "Application", russian: "Приложение", category: "it", learned: false },
    { id: 83, foreign: "Framework", russian: "Фреймворк", category: "it", learned: false },
    { id: 84, foreign: "Library", russian: "Библиотека (кода)", category: "it", learned: false },
    { id: 85, foreign: "Variable", russian: "Переменная", category: "it", learned: false },
    { id: 86, foreign: "Function", russian: "Функция", category: "it", learned: false },
    { id: 87, foreign: "Array", russian: "Массив", category: "it", learned: false },
    { id: 88, foreign: "Object", russian: "Объект", category: "it", learned: false },
    { id: 89, foreign: "Bug", russian: "Ошибка / Баг", category: "it", learned: false },
    { id: 90, foreign: "Feature", russian: "Фича / Особенность", category: "it", learned: false },
    { id: 91, foreign: "Compiler", russian: "Компилятор", category: "it", learned: false },
    { id: 92, foreign: "Deployment", russian: "Деплой / Развертывание", category: "it", learned: false },
    { id: 93, foreign: "Repository", russian: "Репозиторий", category: "it", learned: false },
    { id: 94, foreign: "Commit", russian: "Коммит / Фиксация", category: "it", learned: false },
    { id: 95, foreign: "Branch", russian: "Ветка", category: "it", learned: false },
    { id: 96, foreign: "Merge", russian: "Слияние", category: "it", learned: false },
    { id: 97, foreign: "Interface", russian: "Интерфейс", category: "it", learned: false },
    { id: 98, foreign: "User", russian: "Пользователь", category: "it", learned: false },
    { id: 99, foreign: "Password", russian: "Пароль", category: "it", learned: false },
    { id: 100, foreign: "Security", russian: "Безопасность", category: "it", learned: false },
    { id: 101, foreign: "Algorithm", russian: "Алгоритм", category: "it", learned: false },
    { id: 102, foreign: "Authentication", russian: "Аутентификация", category: "it", learned: false },
    { id: 103, foreign: "Frontend", russian: "Фронтенд", category: "it", learned: false },
    { id: 104, foreign: "Backend", russian: "Бэкенд", category: "it", learned: false },
    { id: 105, foreign: "API", russian: "API / Интерфейс приложений", category: "it", learned: false }
];

let wordsDatabase = JSON.parse(localStorage.getItem('wordlearn_db')) || initialWords;

let currentWords = [];
let currentIndex = 0;

const pages = {
    home: document.getElementById("home-page"),
    trainer: document.getElementById("trainer-page"),
    dictionary: document.getElementById("dictionary-page")
};

const navLinks = {
    home: document.getElementById("nav-home"),
    trainer: document.getElementById("nav-trainer"),
    dictionary: document.getElementById("nav-dictionary")
};

function saveToStorage() {
    localStorage.setItem('wordlearn_db', JSON.stringify(wordsDatabase));
}

function updateGlobalStats() {
    const totalWords = wordsDatabase.length;
    const totalLearned = wordsDatabase.filter(w => w.learned).length;

    if (document.getElementById("goal-total")) document.getElementById("goal-total").innerText = totalWords;
    if (document.getElementById("goal-today")) document.getElementById("goal-today").innerText = totalLearned;

    if (document.getElementById("stats-all-words")) document.getElementById("stats-all-words").innerText = totalWords;
    if (document.getElementById("stats-learned-words")) document.getElementById("stats-learned-words").innerText = totalLearned;

    const tCount = wordsDatabase.filter(w => w.category === 'travel').length;
    const fCount = wordsDatabase.filter(w => w.category === 'food').length;
    const iCount = wordsDatabase.filter(w => w.category === 'it').length;

    if (document.getElementById("count-travel")) document.getElementById("count-travel").innerText = `${tCount} слов`;
    if (document.getElementById("count-food")) document.getElementById("count-food").innerText = `${fCount} слов`;
    if (document.getElementById("count-it")) document.getElementById("count-it").innerText = `${iCount} слов`;
}

function switchPage(pageId) {
    Object.keys(pages).forEach(key => {
        if (key === pageId) {
            pages[key].style.display = "flex";
            navLinks[key].classList.add("active");
        } else {
            pages[key].style.display = "none";
            navLinks[key].classList.remove("active");
        }
    });
    
    if (pageId === 'dictionary') {
        renderDictionary();
    }
    updateGlobalStats();
}

function startTraining(category = null) {
    if (category) {
        currentWords = wordsDatabase.filter(w => w.category === category);
    } else {
        currentWords = [...wordsDatabase];
    }
    
    if (currentWords.length === 0) {
        alert("В выбранной категории отсутствуют слова.");
        return;
    }

    currentIndex = 0;
    switchPage("trainer");
    updateTrainer();
}

function updateTrainer() {
    if (currentWords.length === 0) return;

    const currentWord = currentWords[currentIndex];
    document.getElementById("word-eng").innerText = currentWord.foreign;
    document.getElementById("word-rus").innerText = currentWord.russian;
    document.getElementById("word-rus").style.display = "none";

    const progressPercent = (currentIndex / currentWords.length) * 100;
    document.getElementById("p-bar").style.width = progressPercent + "%";

    const listElement = document.getElementById("words-list");
    listElement.innerHTML = "";
    
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
        listElement.appendChild(li);
    });
}

function handleAnswer(isKnown) {
    if (currentWords.length === 0) return;

    const currentWordInSession = currentWords[currentIndex];
    const targetWord = wordsDatabase.find(w => w.id === currentWordInSession.id);
    
    if (targetWord) {
        targetWord.learned = isKnown;
        saveToStorage();
    }

    if (currentIndex < currentWords.length - 1) {
        currentIndex++;
        updateTrainer();
    } else {
        document.getElementById("p-bar").style.width = "100%";
        setTimeout(() => {
            alert("Урок завершен! Отличная работа.");
            switchPage("home");
        }, 200);
    }
}

function renderDictionary() {
    const searchQuery = document.getElementById("search-input").value.toLowerCase();
    const activeTagElement = document.querySelector(".tag.active");
    const activeTag = activeTagElement ? activeTagElement.dataset.tag : "all";
    const grid = document.getElementById("dictionary-grid");
    
    grid.innerHTML = "";

    const filtered = wordsDatabase.filter(word => {
        const matchesSearch = word.foreign.toLowerCase().includes(searchQuery) || word.russian.toLowerCase().includes(searchQuery);
        const matchesTag = activeTag === "all" || word.category === activeTag;
        return matchesSearch && matchesTag;
    });

    filtered.forEach(word => {
        const row = document.createElement("div");
        row.className = "dict-row";
        
        const circleStyle = word.learned 
            ? "background: rgba(16, 185, 129, 0.15); color: #10B981;" 
            : "background: rgba(100, 116, 139, 0.15); color: #64748B;";
        const circleIcon = word.learned ? "✓" : "•";

        row.innerHTML = `
            <div class="dict-info">
                <div class="dict-eng">${word.foreign}</div>
                <div class="dict-rus">— ${word.russian}</div>
            </div>
            <div class="status-circle" style="${circleStyle}">${circleIcon}</div>
        `;

        row.addEventListener("click", () => {
            word.learned = !word.learned;
            saveToStorage();
            renderDictionary();
            updateGlobalStats();
        });

        grid.appendChild(row);
    });

    updateGlobalStats();
}

const modal = document.getElementById("about-modal");
document.getElementById("logo-btn").addEventListener("click", () => {
    modal.style.display = "flex";
});
document.getElementById("close-modal-btn").addEventListener("click", () => {
    modal.style.display = "none";
});
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

document.getElementById("card").addEventListener("click", () => {
    const rus = document.getElementById("word-rus");
    rus.style.display = rus.style.display === "none" ? "block" : "none";
});

document.getElementById("know-btn").addEventListener("click", () => handleAnswer(true));
document.getElementById("dont-know-btn").addEventListener("click", () => handleAnswer(false));
document.getElementById("start-learning-btn").addEventListener("click", () => startTraining());

navLinks.home.addEventListener("click", (e) => { e.preventDefault(); switchPage("home"); });
navLinks.trainer.addEventListener("click", (e) => { e.preventDefault(); startTraining(); });
navLinks.dictionary.addEventListener("click", (e) => { e.preventDefault(); switchPage("dictionary"); });

document.querySelectorAll(".category-card").forEach(card => {
    card.addEventListener("click", () => {
        startTraining(card.dataset.category);
    });
});

document.getElementById("search-input").addEventListener("input", renderDictionary);

document.querySelectorAll(".tag").forEach(tag => {
    tag.addEventListener("click", () => {
        document.querySelectorAll(".tag").forEach(t => t.classList.remove("active"));
        tag.classList.add("active");
        renderDictionary();
    });
});

updateGlobalStats();
