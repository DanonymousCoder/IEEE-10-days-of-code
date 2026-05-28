const filtBtns = document.querySelectorAll(".task-nav ul li");
const taskName = document.getElementById("taskName");
const submitTask = document.getElementById("submitTask");
const inputWarning = document.querySelector(".input-warning");

const completed_tasks = document.getElementById("completed");
const active_tasks = document.getElementById("active");
const all_tasks = document.getElementById("all");

const default_body = document.querySelector(".original")
const default_completed = document.querySelector(".no-completed")

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
        console.log(taskName.value)
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
    {
        "id": 0,
        "taskName": "test",
        "priority": "",
        "isCompleted": false,
        "isActive": true
    }
]


function createTask() {
    pass
}

function clearInput() {
    taskName.value = ''
}