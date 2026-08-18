const wordsDatabase = [
    { id: 1, foreign: "Ticket", russian: "Билет", category: "travel", learned: false },
    { id: 2, foreign: "Airport", russian: "Аэропорт", category: "travel", learned: false },
    { id: 3, foreign: "Hotel", russian: "Отель", category: "travel", learned: false },
    { id: 4, foreign: "Apple", russian: "Яблоко", category: "food", learned: false },
    { id: 5, foreign: "Dinner", russian: "Ужин", category: "food", learned: false },
    { id: 6, foreign: "Water", russian: "Вода", category: "food", learned: false },
    { id: 7, foreign: "Laptop", russian: "Ноутбук", category: "it", learned: false },
    { id: 8, foreign: "Code", russian: "Код", category: "it", learned: false },
    { id: 9, foreign: "Website", russian: "Веб-сайт", category: "it", learned: false }
];

let currentWords = [];
let currentIndex = 0;
let todayLearnedCount = 8;

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

function switchPage(pageId) {
    Object.keys(pages).forEach(key => {
        if (key === pageId) {
            pages[key].style.display = (key === 'home' || key === 'dictionary') ? 'flex' : 'flex';
            if (key === 'trainer') pages[key].style.display = 'flex';
            navLinks[key].classList.add("active");
        } else {
            pages[key].style.display = "none";
            navLinks[key].classList.remove("active");
        }
    });
    if (pageId === 'dictionary') {
        renderDictionary();
    }
}

function startTraining(category = null) {
    if (category) {
        currentWords = wordsDatabase.filter(w => w.category === category);
    } else {
        currentWords = [...wordsDatabase];
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
    if (isKnown) {
        const wordInDb = wordsDatabase.find(w => w.id === currentWords[currentIndex].id);
        if (wordInDb && !wordInDb.learned) {
            wordInDb.learned = true;
            todayLearnedCount++;
            document.getElementById("goal-today").innerText = todayLearnedCount;
        }
    }

    if (currentIndex < currentWords.length - 1) {
        currentIndex++;
        updateTrainer();
    } else {
        document.getElementById("p-bar").style.width = "100%";
        alert("Урок завершен! Отличная работа.");
        switchPage("home");
    }
}

function renderDictionary() {
    const searchQuery = document.getElementById("search-input").value.toLowerCase();
    const activeTag = document.querySelector(".tag.active").dataset.tag;
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
        row.innerHTML = `
            <div class="dict-info">
                <div class="dict-eng">${word.foreign}</div>
                <div class="dict-rus">— ${word.russian}</div>
            </div>
            <div class="status-circle ${word.learned ? 'learned' : ''}" data-id="${word.id}">
                ${word.learned ? '✓' : '✓'}
            </div>
        `;
        grid.appendChild(row);
    });

    const totalLearned = wordsDatabase.filter(w => w.learned).length;
    document.getElementById("stats-all-words").innerText = wordsDatabase.length;
    document.getElementById("stats-learned-words").innerText = totalLearned;

    document.querySelectorAll(".status-circle").forEach(circle => {
        circle.addEventListener("click", (e) => {
            const id = parseInt(e.target.dataset.id);
            const word = wordsDatabase.find(w => w.id === id);
            if (word) {
                word.learned = !word.learned;
                renderDictionary();
            }
        });
    });
}

document.getElementById("card").addEventListener("click", () => {
    const rus = document.getElementById("word-rus");
    rus.style.display = rus.style.display === "none" ? "block" : "none";
});

document.getElementById("know-btn").addEventListener("click", () => handleAnswer(true));
document.getElementById("dont-know-btn").addEventListener("click", () => handleAnswer(false));
document.getElementById("start-learning-btn").addEventListener("click", () => startTraining());

navLinks.home.addEventListener("click", () => switchPage("home"));
navLinks.trainer.addEventListener("click", () => startTraining());
navLinks.dictionary.addEventListener("click", () => switchPage("dictionary"));

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
