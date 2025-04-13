function calculateTotal() {
    var adults = parseInt(document.getElementById("adults").value);
    var children = document.getElementById("children").value;

    var totalCost = (adults * 10) + (children * 5);

    document.getElementById("total").value = "₹" + totalCost;
}
