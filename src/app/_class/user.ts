export class User {
    constructor(
        private id: string,
        private lastName: string,
        private firstName: string,
        private password: string,
        private email: string,
        private phone: string,

    ) {
        this.id = id;
        this.lastName = lastName;
        this.firstName = firstName;
        this.password = password;
        this.email = email;
        this.phone = phone;
    }
}
