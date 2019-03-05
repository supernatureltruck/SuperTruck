import { Component, OnInit } from '@angular/core';
import { CheckoutPaypalSettings } from 'ng-shopping-cart';
import { OrderService } from 'src/app/_services/order.service';
import { Order } from 'src/app/_class/order';
import { AdminNavComponent } from 'src/app/_Comp/admin-nav/admin-nav.component';
import { fadeInItems } from '@angular/material';
import { Router } from '@angular/router';
import { MailingService } from 'src/app/_services/mailing.service';
import { GestionCommandesComponent } from 'src/app/_Comp/gestion-commandes/gestion-commandes.component';

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

  constructor(private orderService: OrderService, private router: Router, private mailing: MailingService){}

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
      this.ngOnDestroy();
      this.router.navigate(['./validate/' + this.idCom]);
      let id = localStorage.getItem('id');
      this.mailing.mailing(id)
        .subscribe(data => data);
    })
  }

  ngOnDestroy() {
    localStorage.removeItem('NgShoppingCart');
  }

}
