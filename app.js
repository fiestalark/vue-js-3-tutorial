const app = Vue.createApp({
    // data, functions to react to events that we want
    //template: '<h2>I am the template</h2>'

    // Make a function & then return object within that function
    data() {
        return {
            url: 'http://www.thenetninja.co.uk',
            showBooks: true,
            books: [
                { title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/1.jpg', isFav: true},
                { title: 'the way of kings', author: 'brandon sanderson', img: 'assets/2.jpg', isFav: false},
                { title: 'the final empire', author: 'brandon sanderson', img: 'assets/3.jpg', isFav: true}
            ],
            x: 0,
            y: 0
        }
    },
    methods: {
        changeTitle(title) {
           //this.title = 'Words of Radiance'
            this.title = title
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data) {
            // E (event) comes with a lot of properties like type, or alt/ctrl click on event
            console.log(e)
            console.log(e.type)
            if (data) {
                console.log(data)
            }
        },
        handleMouseMove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleFav(book) {
            book.isFav = !book.isFav
        }
    }
})

app.mount('#app')