// Selecting the elements
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

// Classes names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

// Variables
let LIST, id;

// Getting Item from Local Storage
let data = localStorage.getItem("TODO");

// Check if the data is not empty that means data exists
if (data) {
    LIST = JSON.parse(data);
    id = LIST.length; // Setting the ID to the last one in the list
    loadList(LIST); // Loading the LIST to the UI
} else {
    // If data is empty
    LIST = [];
    id = 0;
}

// FUNCTION: Loading Items to UIs
function loadList(array) {
    array.forEach(function(item) {
        addToDo(item.name, item.id, item.done, item.trash);
    });
}

// FUNCTION: Clearing the Local Storage
clear.addEventListener("click", function() {
    localStorage.clear();
    location.reload(); // Reloading the page
});

// Show today's date
const options = {
    weekday : "long",
    month : "short",
    day : "numeric",
    year: "numeric"
};
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options);

// FUNCTION: ADD TODO
function addToDo(toDo, id, done, trash) {

    if (trash) { return; } // It will get out of the function causing the function code not to be executed.

    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : '';

    const item = `
                <li class="item">
                    <i class="fa ${ DONE } co" job="complete" id="${ id }"></i>
                    <p class="text ${ LINE }">${ toDo }</p>
                    <i class="fa fa-trash-o de" job="delete" id="${ id }"></i>
                </li>
                 `;
    const position = "beforeend";
    list.insertAdjacentHTML(position, item);
}

// addToDo("Drink Coffee", 1, false, true);

// Add an item to the list when the user presses the ENTER key
document.addEventListener("keyup", function(event) {

    // ENTER Key ASCII Code: 13
    const ENTER_KEY_CODE = 13;

    if (event.keyCode == ENTER_KEY_CODE) {
        
        const toDo = input.value;

        // If the input is not empty
        if (toDo) {

            // For a new ToDo (done will be false and trash will be false)
            addToDo(toDo, id, false, false);

            LIST.push({
                name : toDo,
                id : id,
                done : false,
                trash : false
            });

            // Add Item To Local Storage (This code MUST BE ADDED everywhere the LIST array is updated)
            localStorage.setItem("TODO", JSON.stringify(LIST));

            id++;
        }

        input.value = '';
    }
});

// FUNCTION: COMPLETE TODO ITEM
function completeToDo(element) {
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

    LIST[element.id].done = LIST[element.id].done ? false : true; // Toggling the done
}

// FUNCTION: REMOVE A TODO ITEM
function removeToDo(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].trash = true;
}

// Targeting items created dynamically
list.addEventListener("click", function(event) {
    const element = event.target; // Return the clicked element inside list
    const elementJob = element.attributes.job.value; // return 'complete' or 'delete'

    if (elementJob == "complete") {
        completeToDo(element);
    } else if (elementJob == "delete") {
        removeToDo(element);
    }

    // Add Item To Local Storage (This code MUST BE ADDED everywhere the LIST array is updated)
    localStorage.setItem("TODO", JSON.stringify(LIST));
});