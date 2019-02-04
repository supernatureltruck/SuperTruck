import { Component, OnInit } from '@angular/core';
import { Router,  ActivatedRoute, } from '@angular/router';
import { ProductService } from 'src/app/_services/product.service';


@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})
export class InfosComponent implements OnInit {
  plat: Object;
  key: string;

  constructor(private router: Router,
     private productService: ProductService, 
     private route: ActivatedRoute) { }

     ngOnInit() {
      this.route.params
        .subscribe(parametres => {
          this.getProductByKey(parametres.key);
          this.key = parametres.key;
        });
    }

  getProductByKey(key) {
    this.productService.getProductByKey(key)
      .subscribe(data => {
        this.plat = data;
      })
  }

}
