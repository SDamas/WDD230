
const input = document.querySelector("#favchap")
const submitButton = document.querySelector("button")
const list = document.querySelector(".list")

submitButton.addEventListener("click", function() {

    if (input.value != "") {
        
        let li = document.createElement("li")
        li.textContent = input.value
        let deleteButton = document.createElement("button")
        deleteButton.textContent = "✖"

        li.appendChild(deleteButton)
        list.appendChild(li)

        deleteButton.addEventListener("click", () => {
            li.remove()
            input.focus()
            input.value = ""
        })
    }

    input.value = ""
})

