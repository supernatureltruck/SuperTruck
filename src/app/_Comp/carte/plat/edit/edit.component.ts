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

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  product: Object;
  key: string;

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

  editPlat(product) {
    this.productService.edit(product.form.value, this.key, product.form.value.categorie)
      .subscribe(product => this.router.navigate([`./gcarte`]));
  }

}
