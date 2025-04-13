function submitForm(event) {
    event.preventDefault();

    const form = document.getElementById('orderForm');
    const formData = new FormData(form);

    const receiptData = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        phoneNumber: formData.get('phoneNumber'),
        email: formData.get('email'),
        products: []
    };

    const products = formData.getAll('product');
    products.forEach(product => {
        const quantity = formData.get('quantity' + product);
        const price = form.querySelector(`input[value="${product}"]`).dataset.price;
        if (quantity && quantity > 0) {
            receiptData.products.push({
                name: product,
                quantity: quantity,
                price: price,
                total: quantity * price
            });
        }
    });

    localStorage.setItem('receiptData', JSON.stringify(receiptData));
    window.location.href = 'receipt.html';
}
