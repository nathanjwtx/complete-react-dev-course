class OldSyntax {
    constructor() {
        this.name = "wibble";
        //    had to do the following to avoid breaking the 'this' binding
        this.getGreeting = this.getGreeting.bind(this);
    }
    getGreeting() {
        return `Hello, my name ${this.name}`;
    }
}

const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
// console.log(oldSyntax);
console.log(getGreeting());

// class property syntax
class NewSyntax {
    name = "nathan";
    getGreeting = () => {
        return `Hello world, it's ${this.name}`;
    }
}

const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
// console.log(newSyntax);
console.log(newGetGreeting());
