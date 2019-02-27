import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private productService: ProductService) { }


  listes = [];
  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    this.productService.getProduct()
     .subscribe(data => this.listes = data);
   }
}