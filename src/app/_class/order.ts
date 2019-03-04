export class Order {
    constructor(   
        private quantity: string,
        private item: string,
        private id: string
        ){
        this.quantity = quantity,
        this.item = item,
        this.id = id
    }
}
