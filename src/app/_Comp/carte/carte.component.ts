import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/_services/product.service';
import { OrderService } from 'src/app/_services/order.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Product } from 'src/app/_class/product';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {

  constructor(private productService: ProductService, private orderService: OrderService) { }
  

  listes = [];
  products = [];
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
     .subscribe(data=>this.listes = data)
    }

   order66(order) {
     this.orderService.addOr(order).subscribe(data => data, error => console.log(error));
   }

}


  // getProduct() {
  //   this.productService.getProduct()
  //    .subscribe(data => {
  //      if(data != null ){
  //       let cle = Object.keys(data);
  //       let donnees = Object.values(data);
  //       for(let i = 0; i < cle.length; i++){
  //         const product = new Product(donnees[i].id,donnees[i].name,donnees[i].categorie,donnees[i].price,donnees[i].description,donnees[i].image);
  //         this.products.push(product);
  //         this.listes.push({key: cle[i], values:donnees[i]});
  //       }
  //     }
  //    });
  //  }

 
