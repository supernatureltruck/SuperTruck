import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-gestion-commandes',
  templateUrl: './gestion-commandes.component.html',
  styleUrls: ['./gestion-commandes.component.css']
})
export class GestionCommandesComponent implements OnInit {


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

}
