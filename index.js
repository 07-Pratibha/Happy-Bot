document.getElementById("bored-button").addEventListener("click", function getActivityIdea () {
    fetch("https://www.boredapi.com/api/activity/")
    .then(res => res.json())
    .then(data => {
        document.getElementById("idea").textContent = data.activity
        document.body.classList.add("fun")
        document.getElementById("title").textContent = "🦾 HappyBot🦿"
    })
})
