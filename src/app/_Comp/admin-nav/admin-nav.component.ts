import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/_services/product.service';
import { OrderService } from 'src/app/_services/order.service';
import { HeaderComponent } from '../../_CFixe/header/header.component';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {
  status: string;
  constructor(private productService: ProductService, private orderService: OrderService) { }

  ngOnInit() {
    this.status = this.orderService.status;
  }

  change(status) {
    this.status = this.orderService.change(status);
  }

}
