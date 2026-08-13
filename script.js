const card = document.getElementById("card");
const rusWord = document.getElementById("word-rus");

card.addEventListener("click", () => {
    if (rusWord.style.display === "none") {
        rusWord.style.display = "block";
    } else {
        rusWord.style.display = "none";
    }
});
