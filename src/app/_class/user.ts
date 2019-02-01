export class User {
    constructor(
        private id: string,
        private nom: string,
        private prenom: string,
        private mdp: string,
        private mail: string,
        private tel: string,

    ) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.mdp = mdp;
        this.mail = mail;
        this.tel = tel;
    }
}
