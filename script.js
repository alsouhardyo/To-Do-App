const ulContainer = document.querySelector("#list_container");
const inputElement = document.querySelector(".input");

function addTask() {
    const inputValue = inputElement.value;
    if (inputValue === "" || inputValue === null) {
        alert("You have to add a task first !");
    } else {
        const liElement = document.createElement("li");
        liElement.innerHTML = inputValue;
        ulContainer.appendChild(liElement);
        const spanElement = document.createElement("span");
        spanElement.innerHTML = "\u00d7";
        liElement.appendChild(spanElement);
        inputElement.value = "";
        saveData(); // Save data to localStorage
    }
}

ulContainer.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
        saveData(); // Save data to localStorage on check/uncheck
    } else if (event.target.tagName === "SPAN") {
        event.target.parentElement.remove();
        saveData(); // Save data to localStorage on delete
    }
});

// Load data from localStorage and display it
function loadData() {
    const storedData = localStorage.getItem("data");
    if (storedData) {
        ulContainer.innerHTML = storedData;
    }
}

loadData(); // Load data on page load

function saveData() {
    localStorage.setItem("data", ulContainer.innerHTML);
}
