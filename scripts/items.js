const add = document.querySelector("#addOne");
const substract = document.querySelector("#substractOne");
const quantity = document.querySelector("#quantityOne");

add.addEventListener('click', () => quantity.value = Number(quantity.value) + 1);

substract.addEventListener('click', () => {
    const currentQuantity = Number(quantity.value); // Obtén el valor actual del input
    if (currentQuantity > 0) {
        quantity.value = currentQuantity - 1;
    } else {
        quantity.value = 0;
    }
});

