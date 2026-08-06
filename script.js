const words = [
    { foreign: "Apple", russian: "Яблоко" },
    { foreign: "Book", russian: "Книга" },
    { foreign: "Laptop", russian: "Ноутбук" }
];
let index = 0;
const card = document.getElementById("card");
const button = document.getElementById("next-btn");

button.addEventListener("click", () => {
    index = (index + 1) % words.length;
    card.innerText = `${words[index].foreign} — ${words[index].russian}`;
});
