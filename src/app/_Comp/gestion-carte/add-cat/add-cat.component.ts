import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/_services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-cat',
  templateUrl: './add-cat.component.html',
  styleUrls: ['./add-cat.component.css']
})
export class AddCatComponent implements OnInit {
  
  listes = [];
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.getCat();
  }

  getCat() {
    this.productService.getCat()
     .subscribe(data => this.listes = data);
   }

   addCat(form) {
    this.productService.addCat(form.form.value)
      .subscribe((data) => {
            this.ngOnInit();
      });
  }

  delete(key) {
    this.productService.removeCat(key).subscribe();
    this.listes = this.listes.filter(listes => listes.id !== key); //Permet de filtrer la liste en direct
   }

}
