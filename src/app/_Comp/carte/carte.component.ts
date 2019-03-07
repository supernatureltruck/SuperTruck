import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  ProductService
} from 'src/app/_services/product.service';
import {
  OrderService
} from 'src/app/_services/order.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import {
  Product
} from 'src/app/_class/product';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {

  constructor(private productService: ProductService, private orderService: OrderService,private modalService: NgbModal) {}


  listes = [];
  products = [];
  categories = [];


  ngOnInit() {
    this.getProduct();
    this.getCat();
  }

  getCat() {
    this.productService.getCat()
      .subscribe(data => this.categories = data);
  }

  getProduct() {
    this.productService.getProduct()
      .subscribe(data => {
        for (let i = 0; i < data.length; i++) {
          const product = new Product(data[i].id,data[i].name,data[i].category,data[i].price,data[i].description,data[i].image);
          this.products.push(product);
          this.listes = data;
        }
      });
  }

  open(content) {
    this.modalService.open(content, { centered: true });
  }
}


