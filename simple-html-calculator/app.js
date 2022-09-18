var additionForm = document.addition
var subtractionForm = document.subtraction
var multiplyForm = document.multiply

//add
var addNum1 = addition.add1
var addNum2 = addition.add2

//subtract
var subNum1 = subtraction.sub1
var subNum2 = subtraction.sub2

//multiply
var multiplyNum1 = multiply.multiply1
var multiplyNum2 = multiply.multiply2

// var doesAddResultExist = false;
// var doesSubtractResultExist = false;
// var doesMultiplyResultExist = false;

//eventListeners
additionForm.addEventListener('submit', addTotal)
subtractionForm.addEventListener('submit', subTotal)
multiplyForm.addEventListener('submit', multiplyTotal)

//functions
function addTotal(e) {
    e.preventDefault()

    var container = document.getElementById('additionValue')
    var addResult = document.createElement('p')

    addResult.textContent = Number(addNum1.value) + Number(addNum2.value)

    container.innerHTML = ""
    container.appendChild(addResult)

    additionForm.add1.value = ""
    additionForm.add2.value = ""

}

function subTotal(e) {
    e.preventDefault()

    var container = document.getElementById('subtractionValue')
    var subResult = document.createElement('p')

    subResult.textContent = Number(subNum1.value) - Number(subNum2.value)

    container.innerHTML = ""
    container.appendChild(subResult)

    subtractionForm.sub1.value = ""
    subtractionForm.sub2.value = ""
}

function multiplyTotal(e) {
    e.preventDefault()

    var container = document.getElementById('multiplyValue')
    var multiplyResult = document.createElement('p')

    multiplyResult.textContent = Number(multiplyNum1.value) * Number(multiplyNum2.value)

    container.innerHTML = ""
    container.appendChild(multiplyResult)

    multiplyForm.multiply1.value = ""
    multiplyForm.multiply2.value = ""
}