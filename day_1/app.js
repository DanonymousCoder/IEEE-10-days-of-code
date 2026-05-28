const filtBtns = document.querySelectorAll(".task-nav ul li");

filtBtns.forEach(filtBtn => {

    filtBtn.addEventListener('click', () => {
        filtBtns.forEach(filtBtn => filtBtn.classList.remove("active"))

        filtBtn.classList.add("active")
    })
})