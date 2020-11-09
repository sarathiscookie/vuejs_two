let app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    },
    methods: {
        reverse() {
            this.message = this.message.split('').reverse().join('');
        }
    }
    
}) 