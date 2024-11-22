import { reactive } from 'vue';

export const cartStore = reactive({
    items: [], // Array to store cart items

    addToCart(product) {
        const existingItem = this.items.find(item => item.id === product.id);
        if (existingItem) {
            existingItem.quantity += 1;
            alert("Quantity Updated");
            console.log("Product quantity updated:", existingItem);
        } else {
            this.items.push({ ...product, quantity: 1 });
            alert("Product Added");
            console.log("Product added to cart:", product);
        }
    },
    get cartCount() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }
});
