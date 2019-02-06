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

  listes = [];

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


  getPlatByKey(key) {
    this.productService.getProductByKey(key)
      .subscribe(data => {
        this.product = data;
      })
  }

  editPlat(product) {
    this.productService.edit(product.form.value, this.key)
      .subscribe(product => this.router.navigate([`./gcarte`]));
  }

}
