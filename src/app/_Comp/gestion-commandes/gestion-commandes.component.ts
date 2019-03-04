import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/_services/order.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-gestion-commandes',
  templateUrl: './gestion-commandes.component.html',
  styleUrls: ['./gestion-commandes.component.css']
})
export class GestionCommandesComponent implements OnInit {


  constructor(private orderService: OrderService) { }

  commandes = [];
  preparations = []
  termines = [];

  ngOnInit() {
    this.getCommande();
  }

  getCommande() {
    this.orderService.getCommande()
    .subscribe(data=> { 
      this.commandes = data;
      console.log(this.commandes)
    });
   }

   


  //  delete(key) {
  //   this.orderService.remove(key).subscribe();
  //   this.termines = this.termines.filter(termines => termines.key !== key);
  //  }

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
