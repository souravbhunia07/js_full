class React {
    constructor() {
        this.library = 'React';
        this.server = "http://localhost:3000";

        // requirement
        document.querySelector('button').addEventListener('click', this.handleClick.bind(this)); // bind(this) is important
    }

    handleClick() {
        console.log('Button clicked');
        console.log(this.server);
    }
}

const app = new React();