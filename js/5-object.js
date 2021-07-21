const cart = {
    items: [],
    getItems() {
        return this.items;
    },
    add(product) {
        // console.table(product);
        for (const item of this.items) {
            if (item.name === product.name) {
                item.quantity += 1;
                return;
            }            
        }
        const newProduct = {
            ...product,
            quantity: 1,
        }
        this.items.push(newProduct);
     },
    remove(productName) {
        const { items } = this;
        for (let i = 0; i < items.length; i += 1) {
            const { name } = items[i];

            if (name === productName) {
                console.log(`find this produst ${name}`)
                items.splice(i, 1);
                return;
            }
        }
     },
    clear() {
        this.items = [];
     },
    countTotalPrice() {
        const { items } = this;
        let total = 0;
        for (const { price, quantity} of items) {
            total += price * quantity;
        }
        return total;
     },
    increseQuantity(productName) {
        for (const item of this.items) {
            if (item.name === productName) {
                item.quantity += 1;
                return;
            }
        }
    },
    decreaseQuantity(productName) {
        for (const item of this.items) {
            if (item.name === productName) {
                item.quantity -= 1;
                return;
            }
        }
    },
    };
console.log(cart.getItems());




cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'lemon', price: 60 });
cart.add({ name: 'lemon', price: 60 });
cart.add({ name: 'cherry', price: 70 });
cart.add({ name: 'strawberry', price: 110 });
cart.add({ name: 'strawberry', price: 110 });
cart.add({ name: 'strawberry', price: 110 });



console.table(cart.getItems());

cart.increseQuantity('strawberry');
cart.decreaseQuantity('lemon');
cart.decreaseQuantity('lemon');
console.table(cart.getItems());

console.log(`totalPrise: ${cart.countTotalPrice()}`);

cart.remove('cherry');

console.table(cart.getItems());

console.log(`totalPrise: ${cart.countTotalPrice()}`);



cart.clear();

console.log(cart.getItems());