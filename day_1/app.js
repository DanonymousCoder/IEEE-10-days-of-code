const filtBtns = document.querySelectorAll(".task-nav ul li");
const taskName = document.getElementById("taskName");
const prioritySelected = document.getElementById("prioritySelected");
const submitTask = document.getElementById("submitTask");
const inputWarning = document.querySelector(".input-warning");

const completed_tasks = document.getElementById("completed");
const active_tasks = document.getElementById("active");
const all_tasks = document.getElementById("all");

const default_body = document.querySelector(".original")
const default_completed = document.querySelector(".no-completed")
const taskSection = document.querySelector(".tasks-section")

const task_uncomplete = document.querySelector(".tasks-section .top")
const task_complete = document.querySelector(".tasks-section .bottom")

const task_display = document.querySelectorAll(".t-body");

filtBtns.forEach(filtBtn => {

    filtBtn.addEventListener('click', () => {
        filtBtns.forEach(filtBtn => filtBtn.classList.remove("active"))

        filtBtn.classList.add("active")
    })
})

submitTask.addEventListener("click", () => {
    if (taskName.value == '') {
        inputWarning.style.display = 'block';
    } else {
        inputWarning.style.display = 'none';
        createTask(taskName.value)
        displayTasks()
        clearInput()
    }
})


completed_tasks.addEventListener('click', () => {
    task_display.forEach(element => {
        if (!(element.classList.contains('hidden'))) {
            element.classList.add('hidden')
        }
    })

    default_completed.classList.remove('hidden')
})

all_tasks.addEventListener('click', () => {
    task_display.forEach(element => {
        if (!(element.classList.contains('hidden'))) {
            element.classList.add('hidden')
        }
    })

    default_body.classList.remove('hidden')
})

active_tasks.addEventListener('click', () => {
    task_display.forEach(element => {
        if (!(element.classList.contains('hidden'))) {
            element.classList.add('hidden')
        }
    })

    default_body.classList.remove('hidden')
})



const tasksCreated = [
    /**
     * {
            "id": 0,
            "title": "test",
            "priority": "",
            "isCompleted": false,
            "createdAt": true
        }
     */
]

console.log(tasksCreated)


function createTask(title) {
    let new_obj = {}
    new_obj.id = Date.now().toString()
    new_obj.title = taskName.value
    new_obj.priority = prioritySelected.value
    new_obj.isCompleted = false
    new_obj.createdAt = Date.now()

    console.log(new_obj)
    tasksCreated.push(new_obj)
    count++
}

function displayTasks() {
    task_display.forEach(element => {
        if (!(element.classList.contains("hidden"))) {
            element.classList.add("hidden")
        }
    })

    taskSection.classList.remove("hidden")
    document.querySelector(".task-body").style.backgroundColor = '#F8F9FF'

    tasksCreated.forEach(element => {
    let task = document.createElement('div')
    task.className = 'task'
    task.id = `task-${count}`
    task.innerHTML = `
    <div class="left">
        <p class="task-name">
            ${element.title}
        </p>

        <p class="high">
             ${element.priority}
        </p>
    </div>

    <div class="right">
        <img src="./assets/img/done.png" alt="">
        <img src="./assets/img/delete.png" alt="">
    </div>
    `

    // task_uncomplete.insertAdjacentElement('beforeend', task)
    console.log(task)
    task_uncomplete.insertAdjacentElement('beforeend', task)
})
}

let count = 0



function clearInput() {
    taskName.value = ''
}