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
    { id: 40, foreign: "Lunch", russian: "Обед", category: "food", learned: false, sentence: "Let's meet for lunch at one o'clock." },
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
      { id: 69, foreign: "Knife", russian: "Нож", category: "food", learned: false, sentence: "Be careful because that steak knife is sharp.", sentenceRus: "Будьте осторожны, этот нож для стейка очень острый." },
  { id: 70, foreign: "Plate", russian: "Тарелка", category: "food", learned: false, sentence: "She put the hot food on a clean plate.", sentenceRus: "Она положила горячую еду на чистую тарелку." },
  { id: 71, foreign: "Laptop", russian: "Ноутбук", category: "it", learned: false, sentence: "He closed his laptop after finishing work.", sentenceRus: "Он закрыл свой ноутбук после завершения работы." },
  { id: 72, foreign: "Code", russian: "Код", category: "it", learned: false, sentence: "She wrote code for the new web application.", sentenceRus: "Она написала код для нового веб-приложения." },
  { id: 73, foreign: "Website", russian: "Веб-сайт", category: "it", learned: false, sentence: "Our company launched a modern official website.", sentenceRus: "Наша компания запустила современный официальный сайт." },
  { id: 74, foreign: "Computer", russian: "Компьютер", category: "it", learned: false, sentence: "The personal computer needs a hardware upgrade.", sentenceRus: "Персональному компьютеру требуется обновление железа." },
  { id: 75, foreign: "Software", russian: "Программное обеспечение", category: "it", learned: false, sentence: "Install the latest software update immediately.", sentenceRus: "Немедленно установите последнее обновление ПО." },
  { id: 76, foreign: "Hardware", russian: "Железо / Аппаратная часть", category: "it", learned: false, sentence: "Computer hardware includes the CPU and RAM.", sentenceRus: "Компьютерное железо включает в себя процессор и ОЗУ." },
  { id: 77, foreign: "Developer", russian: "Разработчик", category: "it", learned: false, sentence: "The lead developer assigned the tasks today.", sentenceRus: "Ведущий разработчик распределил задачи на сегодня." },
  { id: 78, foreign: "Programmer", russian: "Программист", category: "it", learned: false, sentence: "He works as a senior JavaScript programmer.", sentenceRus: "Он работает старшим JavaScript-программистом." },
  { id: 79, foreign: "Database", russian: "База данных", category: "it", learned: false, sentence: "User profiles are stored in the SQL database.", sentenceRus: "Профили пользователей хранятся в базе данных SQL." },
  { id: 80, foreign: "Server", russian: "Сервер", category: "it", learned: false, sentence: "The remote server crashed due to high traffic.", sentenceRus: "Удаленный сервер упал из-за высокого трафика." },
  { id: 81, foreign: "Network", russian: "Сеть", category: "it", learned: false, sentence: "Connect your device to the local office network.", sentenceRus: "Подключите устройство к локальной сети офиса." },
  { id: 82, foreign: "Application", russian: "Приложение", category: "it", learned: false, sentence: "Download our official mobile application now.", sentenceRus: "Скачайте наше официальное мобильное приложение прямо сейчас." },
  { id: 83, foreign: "Framework", russian: "Фреймворк", category: "it", learned: false, sentence: "React is a popular web frontend framework.", sentenceRus: "React — популярный веб-фреймворк для фронтенда." },
  { id: 84, foreign: "Library", russian: "Библиотека (кода)", category: "it", learned: false, sentence: "This open-source library simplifies chart creation.", sentenceRus: "Эта библиотека с открытым исходным кодом упрощает создание графиков." },
  { id: 85, foreign: "Variable", russian: "Переменная", category: "it", learned: false, sentence: "Declare a global variable to store the count.", sentenceRus: "Объявите глобальную переменную для хранения счетчика." },
  { id: 86, foreign: "Function", russian: "Функция", category: "it", learned: false, sentence: "This custom function returns a random number.", sentenceRus: "Эта кастомная функция возвращает случайное число." },
  { id: 87, foreign: "Array", russian: "Массив", category: "it", learned: false, sentence: "The array contains a list of word objects.", sentenceRus: "Массив содержит список объектов слов." },
  { id: 88, foreign: "Object", russian: "Объект", category: "it", learned: false, sentence: "JavaScript objects hold key-value pairs.", sentenceRus: "Объекты JavaScript хранят пары ключ-значение." },
  { id: 89, foreign: "Bug", russian: "Ошибка / Баг", category: "it", learned: false, sentence: "The QA team discovered a major UI bug.", sentenceRus: "Команда тестирования обнаружила серьезный баг интерфейса." },
  { id: 90, foreign: "Feature", russian: "Фича / Особенность", category: "it", learned: false, sentence: "Dark mode is the most requested design feature.", sentenceRus: "Темная тема — самая запрашиваемая фича в дизайне." },
  { id: 91, foreign: "Compiler", russian: "Компилятор", category: "it", learned: false, sentence: "The compiler translates source code into machine code.", sentenceRus: "Компилятор переводит исходный код в машинный код." },
  { id: 92, foreign: "Deployment", russian: "Деплой / Развертывание", category: "it", learned: false, sentence: "The production deployment took thirty minutes yesterday.", sentenceRus: "Вчера деплой на прод занял тридцать минут." },
  { id: 93, foreign: "Repository", russian: "Репозиторий", category: "it", learned: false, sentence: "Push your recent commits to the remote repository.", sentenceRus: "Отправьте ваши последние коммиты в удаленный репозиторий." },
  { id: 94, foreign: "Commit", russian: "Коммит / Фиксация", category: "it", learned: false, sentence: "Write a descriptive message for every git commit.", sentenceRus: "Пишите понятные сообщения для каждого коммита в git." },
  { id: 95, foreign: "Branch", russian: "Ветка", category: "it", learned: false, sentence: "Create a separate branch for testing features.", sentenceRus: "Создайте отдельную ветку для тестирования фич." },
  { id: 96, foreign: "Merge", russian: "Слияние", category: "it", learned: false, sentence: "Merge the feature branch into main safely.", sentenceRus: "Безопасно слейте ветку фичи в main." },
  { id: 97, foreign: "Interface", russian: "Интерфейс", category: "it", learned: false, sentence: "The user interface should be simple and intuitive.", sentenceRus: "Пользовательский интерфейс должен быть простым и интуитивным." },
  { id: 98, foreign: "User", russian: "Пользователь", category: "it", learned: false, sentence: "The active user logged out of the system.", sentenceRus: "Активный пользователь вышел из системы." },
  { id: 99, foreign: "Password", russian: "Пароль", category: "it", learned: false, sentence: "Choose a strong password containing special characters.", sentenceRus: "Выберите надежный пароль, содержащий специальные символы." },
  { id: 100, foreign: "Security", russian: "Безопасность", category: "it", learned: false, sentence: "Cyber security protects against online threats.", sentenceRus: "Кибербезопасность защищает от онлайн-угроз." },
  { id: 101, foreign: "Algorithm", russian: "Алгоритм", category: "it", learned: false, sentence: "The search algorithm sorts data very efficiently.", sentenceRus: "Алгоритм поиска сортирует данные очень эффективно." },
  { id: 102, foreign: "Authentication", russian: "Аутентификация", category: "it", learned: false, sentence: "Two-factor authentication secures your account.", sentenceRus: "Двухфакторная аутентификация защищает ваш аккаунт." },
  { id: 103, foreign: "Frontend", russian: "Фронтенд", category: "it", learned: false, sentence: "The frontend developer styles the web pages.", sentenceRus: "Фронтенд-разработчик стилизует веб-страницы." },
  { id: 104, foreign: "Backend", russian: "Бэкенд", category: "it", learned: false, sentence: "The backend server handles database management operations.", sentenceRus: "Бэкенд-сервер обрабатывает операции по управлению базами данных." },
  { id: 105, foreign: "API", russian: "API / Интерфейс приложений", category: "it", learned: false, sentence: "The weather service provides a free public API.", sentenceRus: "Сервис погоды предоставляет бесплатный публичный API." }];
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

// Поиск по словарю и переключение табов (категорий)
document.getElementById("search-input").addEventListener("input", renderDictionary);

document.querySelectorAll(".tag").forEach(tagBtn => {
  tagBtn.addEventListener("click", () => {
    document.querySelectorAll(".tag").forEach(b => b.classList.remove("active"));
    tagBtn.classList.add("active");
    renderDictionary();
  });
});

// Добавление нового слова через форму
document.getElementById("add-word-form").addEventListener("submit", (e) => {
  e.preventDefault();
  
  const foreignInput = document.getElementById("new-foreign");
  const russianInput = document.getElementById("new-russian");
  const categorySelect = document.getElementById("new-category");
  const sentenceInput = document.getElementById("new-sentence");
  const sentenceRusInput = document.getElementById("new-sentence-rus");

  const foreign = foreignInput.value.trim();
  const russian = russianInput.value.trim();
  const category = categorySelect.value;
  const sentence = sentenceInput ? sentenceInput.value.trim() : "";
  const sentenceRus = sentenceRusInput ? sentenceRusInput.value.trim() : "";

  if (!foreign || !russian) {
    alert("Пожалуйста, заполните обязательные поля: Слово и Перевод.");
    return;
  }

  const newId = wordsDatabase.length > 0 ? Math.max(...wordsDatabase.map(w => w.id)) + 1 : 1;

  const newWord = {
    id: newId,
    foreign,
    russian,
    category,
    learned: false,
    sentence,
    sentenceRus
  };

  wordsDatabase.push(newWord);
  saveToStorage();
  
  foreignInput.value = "";
  russianInput.value = "";
  if (sentenceInput) sentenceInput.value = "";
  if (sentenceRusInput) sentenceRusInput.value = "";

  alert("Слово успешно добавлено в словарь!");
  renderDictionary();
  updateGlobalStats();
});

// Полный сброс прогресса
function resetAllProgress() {
  if (confirm("Вы уверены, что хотите сбросить весь прогресс обучения? Это действие нельзя отменить.")) {
    wordsDatabase.forEach(w => w.learned = false);
    saveToStorage();
    renderDictionary();
    updateGlobalStats();
    alert("Прогресс успешно сброшен!");
  }
}

const btnReset = document.getElementById("btn-reset-progress");
if (btnReset) {
  btnReset.addEventListener("click", resetAllProgress);
}

// Кнопки верхней панели навигации (меню)
navLinks.home.addEventListener("click", (e) => {
  e.preventDefault();
  switchPage("home");
});

navLinks.trainer.addEventListener("click", (e) => {
  e.preventDefault();
  startTraining(null, false);
});

navLinks.dictionary.addEventListener("click", (e) => {
  e.preventDefault();
  switchPage("dictionary");
});

// Клики по карточкам категорий на главной странице
const cardTravel = document.getElementById("card-travel");
if (cardTravel) {
  cardTravel.addEventListener("click", () => startTraining("travel", true));
}

const cardFood = document.getElementById("card-food");
if (cardFood) {
  cardFood.addEventListener("click", () => startTraining("food", true));
}

const cardIt = document.getElementById("card-it");
if (cardIt) {
  cardIt.addEventListener("click", () => startTraining("it", true));
}

const cardAll = document.getElementById("card-all");
if (cardAll) {
  cardAll.addEventListener("click", () => startTraining(null, true));
}

// Управление кнопками внутри интерфейса тренажера
const btnShowTranslate = document.getElementById("btn-show-translation");
if (btnShowTranslate) {
  btnShowTranslate.addEventListener("click", () => {
    document.getElementById("word-rus").style.display = "block";
    const sentenceRusElement = document.getElementById("word-sentence-rus");
    if (sentenceRusElement) {
      sentenceRusElement.style.display = "block";
    }
  });
}

const btnSpeak = document.getElementById("btn-speak-word");
if (btnSpeak) {
  btnSpeak.addEventListener("click", () => {
    if (currentWords.length > 0) {
      speakWord(currentWords[currentIndex].foreign);
    }
  });
}

const btnKnown = document.getElementById("btn-known");
if (btnKnown) {
  btnKnown.addEventListener("click", () => handleAnswer(true));
}

const btnNotKnown = document.getElementById("btn-not-known");
if (btnNotKnown) {
  btnNotKnown.addEventListener("click", () => handleAnswer(false));
}

// Кнопка возврата на главную из тренажера
const btnLeaveTrainer = document.getElementById("btn-leave-trainer");
if (btnLeaveTrainer) {
  btnLeaveTrainer.addEventListener("click", () => {
    if (confirm("Вы уверены, что хотите прервать тренировку? Прогресс текущего урока не сохранится.")) {
      switchPage("home");
    }
  });
}

// Первоначальная инициализация приложения при загрузке страницы
document.addEventListener("DOMContentLoaded", () => {
  // Устанавливаем корректное состояние чекбокса таймера из настроек, если нужно
  const timerToggle = document.getElementById("timer-toggle");
  if (timerToggle) {
    // По умолчанию таймер можно включить или выключить
    timerToggle.checked = true; 
  }

  // Показываем главную страницу при старте
  switchPage("home");
  
  // Обновляем счетчики слов и статистику на главном экране
  updateGlobalStats();
});

