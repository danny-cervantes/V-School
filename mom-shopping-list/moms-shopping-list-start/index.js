const form = document["addItem"]

form.addEventListener("submit", (event) => {
    event.preventDefault()

    //console.log(form.title.value)

    //
    const listItem = form.title.value
    form.title.value = "";

    console.log(listItem);

    const li = document.createElement("li");

    li.textContent = listItem;

    const list = document.getElementById("list");

    list.append(li);

    const deleteButton = document.createElement("button");

    // document.getElementById("list").append(deleteButton)
    li.append(deleteButton)
    deleteButton.textContent = "x"
    deleteButton.style.display = "flexbox"
    deleteButton.style.justifyContent = "center"
    deleteButton.style.margin = "10px auto"
    deleteButton.addEventListener("click", function () {
        console.log("Item removed");
        // var removeItem = document.getElementById("list")
        // removeItem.remove();
        li.remove()
        // console.log(removeItem)
    })
    const editButton = document.createElement("button")
    // document.getElementById("list").append(editButton)
    li.append(editButton)
    editButton.textContent = "edit"
    editButton.style.display = "flexbox"
    editButton.style.justifyContent = "center"
    editButton.style.margin = "10px auto"
    editButton.addEventListener("click", function (event) {
        event.preventDefault();

    })
});