document.getElementById("submit").addEventListener("click", function (e) {
    const subItem = createSubItem(e)
    document.getElementById("list").appendChild(subItem)
 })