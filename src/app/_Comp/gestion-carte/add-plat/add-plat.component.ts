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

  imageSrc;
  selectedFile;
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
    const formData = new FormData();
    formData.append('file', this.selectedFile);
    this.productService.add(form.form.value,form.form.value.categorie)
      .subscribe(plat => {
        this.productService.uploadPicture(plat.id,formData).subscribe(img => {
          this.router.navigate([`./gcarte`]);
        });
      });
  }
  
  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }



}
