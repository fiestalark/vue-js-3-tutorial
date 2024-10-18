const app = Vue.createApp({
    // data, functions to react to events that we want
    //template: '<h2>I am the template</h2>'

    // Make a function & then return object within that function
    data() {
        return {
            showBooks: true,
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45
        }
    },
    methods: {
        changeTitle(title) {
           //this.title = 'Words of Radiance'
            this.title = title
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }
    }
})

app.mount('#app')