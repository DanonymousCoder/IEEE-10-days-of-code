const filtBtns = document.querySelectorAll(".task-nav ul li");
const taskName = document.getElementById("taskName");
const prioritySelected = document.getElementById("prioritySelected");
const submitTask = document.getElementById("submitTask");
const inputWarning = document.querySelector(".input-warning");

const completed_tasks = document.getElementById("completed");
const active_tasks = document.getElementById("active");
const all_tasks = document.getElementById("all");

const default_body = document.querySelector(".no-tasks");
const default_completed = document.querySelector(".no-completed");
const taskSection = document.querySelector(".tasks-section");

const task_uncomplete = document.querySelector(".tasks-section .top");
const task_complete = document.querySelector(".tasks-section .bottom");

let tasksCreated = [];
let activeFilter = 'all';

// Load tasks from LocalStorage
try {
    const data = localStorage.getItem('myTasks');
    if (data) {
        tasksCreated = JSON.parse(data);
    }
} catch (error) {
    console.error('Failed to parse array from storage:', error);
    tasksCreated = [];
}

// Escapes HTML tags to prevent Cross-Site Scripting (XSS)
function escapeHTML(str) {
    if (!str) return '';
    return str.replace(/[&<>'"]/g, 
        tag => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        }[tag] || tag)
    );
}

// Generate the HTML block for a single task
function renderTaskHTML(eachObj) {
    const isCompleted = eachObj.isCompleted;
    const checkmarkImg = isCompleted ? './assets/img/redo.png' : './assets/img/done.png';
    const checkmarkClass = 'markedDone';
    
    return `
        <div class='task' data-id='${eachObj.id}'>
            <div class="left">
                <p class="task-name">
                    ${escapeHTML(eachObj.title)}
                </p>
                <p class="${escapeHTML(eachObj.priority)}">
                    ${escapeHTML(eachObj.priority)}
                </p>
            </div>
            <div class="right">
                <img src="${checkmarkImg}" alt="checkmark icon" class="${checkmarkClass}" data-id='${eachObj.id}'>
                <img src="./assets/img/delete.png" alt="delete icon" class="deleteTask" data-id='${eachObj.id}'>
            </div>
        </div>
    `;
}

// Renders the entire tasks interface based on activeFilter
function render() {
    // 1. Calculate & render stats
    const total = tasksCreated.length;
    const completed = tasksCreated.filter(t => t.isCompleted).length;
    document.getElementById('curr-task').textContent = completed;
    document.getElementById('total-task').textContent = total;

    // 2. Clear rendering targets
    task_uncomplete.innerHTML = '';
    task_complete.innerHTML = '';

    // 3. Filter tasks lists
    const activeTasks = tasksCreated.filter(t => !t.isCompleted);
    const completedTasks = tasksCreated.filter(t => t.isCompleted);

    // 4. Update navbar active class styles
    filtBtns.forEach(btn => {
        if (btn.id === activeFilter) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // 5. Layout rendering by activeFilter
    if (activeFilter === 'all') {
        if (tasksCreated.length === 0) {
            default_body.classList.remove('hidden');
            default_completed.classList.add('hidden');
            taskSection.classList.add('hidden');
            document.querySelector('.task-body').style.backgroundColor = '#FFFFFF';
        } else {
            default_body.classList.add('hidden');
            default_completed.classList.add('hidden');
            taskSection.classList.remove('hidden');
            document.querySelector('.task-body').style.backgroundColor = '#F8F9FF';

            task_uncomplete.innerHTML = activeTasks.map(renderTaskHTML).join('');
            task_complete.innerHTML = completedTasks.map(renderTaskHTML).join('');
        }
    } else if (activeFilter === 'active') {
        if (activeTasks.length === 0) {
            default_body.classList.remove('hidden');
            default_completed.classList.add('hidden');
            taskSection.classList.add('hidden');
            document.querySelector('.task-body').style.backgroundColor = '#FFFFFF';
        } else {
            default_body.classList.add('hidden');
            default_completed.classList.add('hidden');
            taskSection.classList.remove('hidden');
            document.querySelector('.task-body').style.backgroundColor = '#F8F9FF';

            task_uncomplete.innerHTML = activeTasks.map(renderTaskHTML).join('');
        }
    } else if (activeFilter === 'completed') {
        if (completedTasks.length === 0) {
            default_body.classList.add('hidden');
            default_completed.classList.remove('hidden');
            taskSection.classList.add('hidden');
            document.querySelector('.task-body').style.backgroundColor = '#FFFFFF';
        } else {
            default_body.classList.add('hidden');
            default_completed.classList.add('hidden');
            taskSection.classList.remove('hidden');
            document.querySelector('.task-body').style.backgroundColor = '#F8F9FF';

            task_complete.innerHTML = completedTasks.map(renderTaskHTML).join('');
        }
    }
}

// Add task functionality
function handleAddTask() {
    const titleVal = taskName.value.trim();
    if (titleVal === '') {
        inputWarning.style.display = 'block';
    } else {
        inputWarning.style.display = 'none';
        
        const new_obj = {
            id: Date.now().toString(),
            title: titleVal,
            priority: prioritySelected.value,
            isCompleted: false,
            createdAt: Date.now()
        };

        tasksCreated.push(new_obj);
        localStorage.setItem('myTasks', JSON.stringify(tasksCreated));
        
        clearInput();
        render();
    }
}

function clearInput() {
    taskName.value = '';
}

// Action Event Listeners
submitTask.addEventListener("click", (event) => {
    event.preventDefault();
    handleAddTask();
});

taskName.addEventListener("keydown", (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        handleAddTask();
    }
});

// Tab Filter Navigation Event Listeners
all_tasks.addEventListener('click', () => {
    activeFilter = 'all';
    render();
});

active_tasks.addEventListener('click', () => {
    activeFilter = 'active';
    render();
});

completed_tasks.addEventListener('click', () => {
    activeFilter = 'completed';
    render();
});

// Event Delegation for Complete / Delete click events
task_uncomplete.addEventListener('click', (event) => {
    if (event.target.classList.contains('markedDone')) {
        markComplete(event.target.dataset.id);
    } else if (event.target.classList.contains('deleteTask')) {
        deleteTasks(event.target.dataset.id);
    }
});

task_complete.addEventListener('click', (event) => {
    if (event.target.classList.contains('markedDone')) {
        redoTask(event.target.dataset.id);
    } else if (event.target.classList.contains('deleteTask')) {
        deleteTasks(event.target.dataset.id);
    }
});

// Task mutations
function deleteTasks(id) {
    const index = tasksCreated.findIndex(obj => obj.id === id);
    if (index !== -1) {
        tasksCreated.splice(index, 1);
        localStorage.setItem('myTasks', JSON.stringify(tasksCreated));
        render();
    }
}

function markComplete(id) {
    const task = tasksCreated.find(obj => obj.id === id);
    if (task) {
        task.isCompleted = true;
        localStorage.setItem('myTasks', JSON.stringify(tasksCreated));
        render();
    }
}

function redoTask(id) {
    const task = tasksCreated.find(obj => obj.id === id);
    if (task) {
        task.isCompleted = false;
        localStorage.setItem('myTasks', JSON.stringify(tasksCreated));
        render();
    }
}

// DOM Init
document.addEventListener('DOMContentLoaded', render);