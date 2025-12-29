let groceryItem1;
let groceryItem2;
let groceryItem3;
let groceryItem4;

function calculateTotalAmount() {
    groceryItem1 = parseFloat(document.getElementById("groceryItem1").value);
    groceryItem2 = parseFloat(document.getElementById("groceryItem2").value);
    groceryItem3 = parseFloat(document.getElementById("groceryItem3").value);
    groceryItem4 = parseFloat(document.getElementById("groceryItem4").value);
    let totalAmount = groceryItem1 + groceryItem2 + groceryItem3 + groceryItem4;
    document.getElementById("totalAmount").innerHTML = "Total Amount: " + totalAmount;
}