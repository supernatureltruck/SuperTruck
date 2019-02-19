import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/_services/product.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/_class/product';

@Component({
  selector: 'app-add-plat',
  templateUrl: './add-plat.component.html',
  styleUrls: ['./add-plat.component.css']
})
export class AddPlatComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router) { }

  categories = [];
  catID: number;
  ngOnInit() {
    this.getCat();
  }

  onSubmit() {
    return this.catID;
  }

  getCat() {
    this.productService.getCat()
    .subscribe(data=>this.categories = data);
   }

  addPlat(form) {
    this.productService.add(form.form.value,form.form.value.categorie)
      .subscribe(plat => {
        this.router.navigate([`./gcarte`]);
      });
  }



}
