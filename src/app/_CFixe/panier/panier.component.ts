import { Component, OnInit } from '@angular/core';
import { CheckoutPaypalSettings } from 'ng-shopping-cart';
import { OrderService } from 'src/app/_services/order.service';
import { Order } from 'src/app/_class/order';
import { AdminNavComponent } from 'src/app/_Comp/admin-nav/admin-nav.component';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  constructor(private orderService: OrderService){}

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

  Inorder() {
    const donnees = JSON.parse(localStorage.getItem('NgShoppingCart'));
    const quantity = donnees.items[0].quantity;
    const item:[] = donnees.items[0].id;
    const idUser = localStorage.getItem('id');
    const order = new Order(JSON.stringify(quantity*item),idUser);
    console.log(order);
    this.orderService.addOr(order);
  }

  // settings: CheckoutPaypalSettings = {
  //   business: 'myaccount@paypal.com',
  //   itemName: 'myMarketplaceAppCart',
  //   itemNumber: '1234',
  //   serviceName: 'MyBusiness',
  //   country: 'FR'
  // };

  ngOnInit() {
  }

}
