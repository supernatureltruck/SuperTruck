import { Component, OnInit, Input } from '@angular/core';
import { OrderService } from 'src/app/_services/order.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { PanierComponent } from 'src/app/_CFixe/panier/panier.component';

@Component({
  selector: 'app-gestion-commandes',
  templateUrl: './gestion-commandes.component.html',
  styleUrls: ['./gestion-commandes.component.css'],
  providers: [PanierComponent]
})
export class GestionCommandesComponent implements OnInit {


  constructor(private orderService: OrderService, private panier: PanierComponent) { }

  commandes = [];

  @Input()
  nbCommandes = 0;

  ngOnInit() {
    this.getCommande();
  }

  getCommande() {
    this.orderService.getCommande()
    .subscribe(data=> { 
      this.commandes = data;
    });
   }

  remove(id) {
    this.orderService.remove(id)
    .subscribe ( data => {
      this.commandes = this.commandes.filter(commandes => commandes.id !== id);
    })
    }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
