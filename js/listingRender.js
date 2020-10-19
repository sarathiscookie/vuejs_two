let app = new Vue({
    el : '#app',
    data: {
        product: 'Socks',
        details: [
            '80 % cotton',
            '20 % polyster',
            'Gender-neutral'
        ],
        variants: [
            { id: 1000, color: "Red"},
            { id: 1001, color: "Blue"},
        ],
        sizes: ['M', 'L', 'XL', 'XXL', '3XL']
    }
})