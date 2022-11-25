/** Options API */

const app = Vue.createApp({
    data() {
        return {
            quote: "I'm Batman",
            author: 'Bruce Wayne'
        }
    },
    methods: {
        changeQuote() {
            console.log('Hola mundo');
            this.author = 'Marco Tienda';

            this.capitalize();
        },
        capitalize() {
            this.quote = this.quote.toUpperCase();
        }
    }
})

app.mount('#myApp')
