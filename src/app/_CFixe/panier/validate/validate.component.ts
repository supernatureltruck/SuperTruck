import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PanierComponent } from '../panier.component';
import { CartService } from 'ng-shopping-cart';


@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.css']
})
export class ValidateComponent implements OnInit {
  numero;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.numero = this.route.snapshot.paramMap.get("id");
  }

}
