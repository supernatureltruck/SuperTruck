import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {


  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  open() {

  }

}
