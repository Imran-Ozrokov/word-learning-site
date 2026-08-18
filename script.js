const initialWords = [
    { id: 1, foreign: "Ticket", russian: "Билет", category: "travel", learned: true },
    { id: 2, foreign: "Airport", russian: "Аэропорт", category: "travel", learned: true },
    { id: 3, foreign: "Hotel", russian: "Отель", category: "travel", learned: true },
    { id: 4, foreign: "Apple", russian: "Яблоко", category: "food", learned: true },
    { id: 5, foreign: "Dinner", russian: "Ужин", category: "food", learned: true },
    { id: 6, foreign: "Water", russian: "Вода", category: "food", learned: true },
    { id: 7, foreign: "Laptop", russian: "Ноутбук", category: "it", learned: true },
    { id: 8, foreign: "Code", russian: "Код", category: "it", learned: true },
    { id: 9, foreign: "Website", russian: "Веб-сайт", category: "it", learned: false }
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
