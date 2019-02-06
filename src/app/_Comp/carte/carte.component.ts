import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/_services/product.service';
import { OrderService } from 'src/app/_services/order.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {

  constructor(private productService: ProductService, private orderService: OrderService) { }

  listes = [];
  categories = [];

  ngOnInit() {
    this.getProduct();
    this.getCat();
  }

  getCat() {
    this.productService.getCat()
     .subscribe(data => {
       if(data != null ){
        let cle = Object.keys(data);
        let donnees = Object.values(data);
        for(let i = 0; i < cle.length; i++){
          this.categories.push({key: cle[i], values:donnees[i]});
        }
      }
     });
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

   order66(order) {
     this.orderService.addOr(order).subscribe(data => data, error => console.log(error));
   }

}
