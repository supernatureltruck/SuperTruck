import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-gestion-carte',
  templateUrl: './gestion-carte.component.html',
  styleUrls: ['./gestion-carte.component.css']
})
export class GestionCarteComponent implements OnInit {
  
  constructor(private productService: ProductService) { }

  listes = [];
  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    this.productService.getProduct()
     .subscribe(data => {
       if(data != null ){
        let cle = Object.keys(data);
        let donnees = Object.values(data);
        for(let i = 0; i < cle.length; i++){
          this.listes.push({key: cle[i], values:donnees[i]});
        }
      }
     });
   }

   delete(key) {
    this.productService.remove(key).subscribe();
    this.listes = this.listes.filter(listes => listes.key !== key); //Permet de filtrer la liste en direct
   }
}
