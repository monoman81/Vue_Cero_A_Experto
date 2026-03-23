const {createApp, ref} = Vue;

const app = createApp({
    // template: `
    //     <h1>{{ message }}</h1>
    //     <p>{{ author }}</p>
    // `,

    setup() {
        const message = ref("I'm batman");
        const author = ref("Bruce Wayne");

        const changeQuote = () => {
            message.value = "Hola, soy goku"
            author.value = "Goku"
        }

        // setTimeout(() => {
        //     message.value = "Soy goku";
        //     author.value = "Goku";
        // }, 1000)

        return {
            message,
            author,
            changeQuote,
        }
    }

});

app.mount('#myApp');