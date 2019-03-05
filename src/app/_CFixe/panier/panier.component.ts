import { Component, OnInit } from '@angular/core';
import { CheckoutPaypalSettings } from 'ng-shopping-cart';
import { OrderService } from 'src/app/_services/order.service';
import { Order } from 'src/app/_class/order';
import { AdminNavComponent } from 'src/app/_Comp/admin-nav/admin-nav.component';
import { fadeInItems } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  ids = [];
  order: Order;
  data;
  idCom;

  ngOnInit(){}

  constructor(private orderService: OrderService, private router: Router){}

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

    for(let i = 0; donnees.items.length > i ; i++){
      const quantity = donnees.items[i].quantity;
      const id =  JSON.stringify(donnees.items[i].id);
      for( let j = 0; quantity > j; j++) {
        this.ids.push(id);
      }
      const idUser = localStorage.getItem('id');
      this.order = new Order(this.ids,idUser);
    }
    this.orderService.addOr(this.order)
    .subscribe(data => {
      this.data = data;
      this.idCom = this.data.id;
      this.router.navigate(['./validate/' + this.idCom]);
      this.ngOnDestroy();
    })
  }

  // settings: CheckoutPaypalSettings = {
  //   business: 'myaccount@paypal.com',
  //   itemName: 'myMarketplaceAppCart',
  //   itemNumber: '1234',
  //   serviceName: 'MyBusiness',
  //   country: 'FR'
  // };

  ngOnDestroy() {
    localStorage.removeItem('NgShoppingCart');
  }

}
