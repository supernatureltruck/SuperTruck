export class Product {
    constructor(
        private id: string,
        private nom: string,
        private categorie: string,
        private prix: number,
        private description: string,
        private image: string
    ) {
        this.id = id;
        this.nom = nom,
        this.categorie = categorie;
        this.prix = prix;
        this.description = description;
        this.image = image;
    }
}
