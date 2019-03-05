export class Order {
    constructor(   
        private ids = [],
        private user_id: string
        ){
        this.ids = ids,
        this.user_id = user_id
    }
}
