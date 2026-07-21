const dayElement = document.getElementById("day");
const dateElement = document.getElementById("date");
const timeElement = document.getElementById("time");

function updateDateTime(){

    const now = new Date();

    const days = [
        "Sunday","Monday","Tuesday",
        "Wednesday","Thursday",
        "Friday","Saturday"
    ];

    const months = [
        "January","February","March",
        "April","May","June",
        "July","August","September",
        "October","November","December"
    ];

    dayElement.textContent = days[now.getDay()];

    dateElement.textContent = `${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;

    timeElement.textContent = now.toLocaleTimeString([],{
        hour:"2-digit",
        minute:"2-digit",
        second:"2-digit"
    });
}

updateDateTime();
setInterval(updateDateTime,1000);


const Input = document.querySelector("#Todo-Input")
const result = document.querySelector("#Todo-result")
const tasks = []

function showtask() {
    result.innerHTML = ""
        for(let i = 0; i < tasks.length; i++){
        result.innerHTML += ` <li>
         

        <div class="task-content">

        <input type="checkbox">
       
        ${tasks[i]}

    </div>

    <button class="task-delete" onclick="deltask(${i})">🗑</button>

    </li>`
    }
}
function ToDoApp(event) {
    event.preventDefault()
    
    const InputValue = Input.value 

    tasks.push(InputValue)
    
    showtask()

    Input.value = ""
}

function ClearAll() {
    tasks.length = 0
    result.innerHTML = ""
}
function deltask(index) {
    tasks.splice(index , 1)
    showtask()
}
