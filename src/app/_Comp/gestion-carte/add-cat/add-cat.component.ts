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

   addCat(form) {
    this.productService.addCat(form.form.value)
      .subscribe(plat => {
        this.router.navigate([`./gcarte`]);
      });
  }

  delete(key) {
    this.productService.removeCat(key).subscribe();
    this.listes = this.listes.filter(listes => listes.key !== key); //Permet de filtrer la liste en direct
   }

}
