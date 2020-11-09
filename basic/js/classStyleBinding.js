let app = new Vue({
    el : '#app',
    data: {
        product: 'Socks',
        image: './images/vmSocks-green-onWhite.jpg',
        details: [
            '80 % cotton',
            '20 % polyster',
            'Gender-neutral'
        ],
        variants: [
            { id: 1000, color: "green", image: "./images/vmSocks-green-onWhite.jpg"},
            { id: 1001, color: "blue", image: "./images/vmSocks-blue-onWhite.jpg"},
        ],
        sizes: ['M', 'L', 'XL', 'XXL', '3XL'],
        cart: 0,
        inStock: true,
    },
    methods: {
        addToCart() {
            this.cart += 1;
        },
        updateProduct(variantImage) {
            this.image = variantImage;
        },
        removeFromCart() {
            ( this.cart > 0 ) ? this.cart -= 1 : 0;
        }
    },
})