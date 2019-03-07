import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router,
  ActivatedRoute,
  ParamMap
} from '@angular/router';
import {
  ProductService
} from 'src/app/_services/product.service';
import { Category } from 'src/app/_class/category';
import { Product } from 'src/app/_class/product';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  product: Object;
  key: string;
  imageSrc;
  selectedFile;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params
      .subscribe(parametres => {
        this.getPlatByKey(parametres.key);
        this.key = parametres.key;
      });
      this.getCat();

  
  }

  categories = [];

  getCat() {
    this.productService.getCat()
    .subscribe(data=>this.categories = data);
   }

  getPlatByKey(key) {
    this.productService.getProductByKey(key)
      .subscribe(data => {
        this.product = data;
      })
  }

  editPlat(form) {
    const formData = new FormData();
    formData.append('file', this.selectedFile);
    const cat = new Category(this.categories[0].name,this.categories[0].id);
    const product = new Product(+this.key,form.form.value.name,cat,form.form.value.price,form.form.value.description,form.form.value.image);
    this.productService.edit(product, +this.key)
      .subscribe(plat => {
        if(!this.selectedFile){
          this.router.navigate([`./gcarte`]);
        } else {
        this.productService.uploadPicture(plat.id,formData).subscribe(img => {
          this.router.navigate([`./gcarte`]);
        });
      }
      });
  }


  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

}
