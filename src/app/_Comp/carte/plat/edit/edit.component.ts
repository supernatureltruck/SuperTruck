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
        this.getGamesByKey(parametres.key);
        this.key = parametres.key;
      });
  }


  getGamesByKey(key) {
    this.productService.getProductByKey(key)
      .subscribe(data => {
        this.product = data;
      })
  }

  editPlat(game) {
    this.productService.edit(game.form.value, this.key)
      .subscribe(games => this.router.navigate([`./list`]));

  }

}
