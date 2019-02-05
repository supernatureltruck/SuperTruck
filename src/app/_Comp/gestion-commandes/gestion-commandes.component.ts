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
    this.getCommandePrep();
    this.getCommandeTerm();
  }

  getCommande() {
    this.orderService.getCommande()
     .subscribe(data => {
       if(data != null ){
        let cle = Object.keys(data);
        let donnees = Object.values(data);
        for(let i = 0; i < cle.length; i++){
          this.commandes.push({key: cle[i], values:donnees[i]});
        }
      }
     });
   }

   getCommandePrep() {
    this.orderService.getCommandePrep()
     .subscribe(data => {
       if(data != null ){
        let cle = Object.keys(data);
        let donnees = Object.values(data);
        for(let i = 0; i < cle.length; i++){
          this.preparations.push({key: cle[i], values:donnees[i]});
        }
      }
     });
   }

   getCommandeTerm() {
    this.orderService.getCommandeTerm()
     .subscribe(data => {
       if(data != null ){
        let cle = Object.keys(data);
        let donnees = Object.values(data);
        for(let i = 0; i < cle.length; i++){
          this.termines.push({key: cle[i], values:donnees[i]});
        }
      }
     });
   }

   delete(key) {
    this.orderService.remove(key).subscribe();
    this.termines = this.termines.filter(termines => termines.key !== key);
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
