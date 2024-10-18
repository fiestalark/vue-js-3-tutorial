const app = Vue.createApp({
    // data, functions to react to events that we want
    //template: '<h2>I am the template</h2>'

    // Make a function & then return object within that function
    data() {
        return {
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45
        }
    }
})

app.mount('#app')