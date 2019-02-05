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

  listes = [];
  ngOnInit() {
    this.getCat();
  }

  getCat() {
    this.productService.getCat()
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

  addPlat(form) {
    this.productService.add(form.form.value)
      .subscribe(plat => {
        this.router.navigate([`./gcarte`]);
      });
  }



}
