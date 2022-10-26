const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            msgTitle: 'Hello Vue !!! Hidden the logo!',
            msgToggle: 'Toggle Visibility Image',
            img: './img/logo.png',
            logoVueAlt: 'logo Vue',
            classBtn: 'btn btn-success',
            classImg: 'w-50'
        }
    },
    methods: {
        changeVisibility() {
            this.classImg = this.classImg === 'w-50' ? 'd-none' : 'w-50';
        }
    }
});
app.mount('#container')