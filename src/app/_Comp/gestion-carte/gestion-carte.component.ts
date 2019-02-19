import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/_services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-carte',
  templateUrl: './gestion-carte.component.html',
  styleUrls: ['./gestion-carte.component.css']
})
export class GestionCarteComponent implements OnInit {
  
  constructor(private productService: ProductService,private router: Router) { }

  listes = [];
  categories = [];
  ngOnInit() {
    this.getProduct();
    this.getCat();
  }

  getCat() {
    this.productService.getCat()
    .subscribe(data=>this.categories = data);
   }

  getProduct() {
    this.productService.getProduct()
      .subscribe(data=>this.listes = data);
   }

   delete(key) {
    this.productService.remove(key).subscribe();
    this.listes = this.listes.filter(listes => listes.id !== key); //Permet de filtrer la liste en direct
   }
}
