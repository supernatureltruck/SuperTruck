import { Component, OnInit } from '@angular/core';
import { CheckoutPaypalSettings } from 'ng-shopping-cart';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  headers = {
    empty: 'Votre panier est vide !',
    name: 'Nom du plat',
    quantity: 'Quantitée',
    price: 'Coût',
    total: 'Total x article(s)',
  }
  footers = {
    total: 'Prix total'
  }

  settings: CheckoutPaypalSettings = {
    business: 'myaccount@paypal.com',
    itemName: 'myMarketplaceAppCart',
    itemNumber: '1234',
    serviceName: 'MyBusiness',
    country: 'FR'
  };


  constructor() { }

  ngOnInit() {
  }

}
