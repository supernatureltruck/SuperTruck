import { CartItem } from 'ng-shopping-cart';

export class Product extends CartItem {
        public id: any;
        public name: string;
        public categorie: string;
        public price: number;
        public quantity: number;
        public description: string;
        public image: string;
        public data: any;

        constructor(id: any, name:string, categorie:string, price:number,description: string,image: string) {
            super();
            this.id = id;
            this.name = name;
            this.categorie = categorie;
            this.price = price;
            this.quantity = 1;
            this.description = description;
            this.image = image;
            this.data = "any";
        }
 
    setId(id : number) {
        this.id = id;
    }

    getId(): any{
        return this.id;
    }

    setName(name : string) {
        this.name = name;
    }

    getName(): string{
        return this.name;
    }

    setPrice(price : number) {
        this.price = price;
    }

    getPrice(): number{
        return this.price;
    }

    setImage(image : string) {
        this.image = image;
    }

    getImage(): string{
        return this.image;
    }

    setDescription(decribe : string) {
        this.description = decribe;
    }

    getDescription(): string{
        return this.description;
    }
 
    getQuantity(): number{
        return this.quantity;
    }
   
    setQuantity(quantity: number): void{
        this.quantity = quantity;
    }
     
}
