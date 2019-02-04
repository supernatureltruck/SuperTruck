import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  status = 'Ouvert';

  constructor() { }

  change(status) {
    if(status === 'Fermé') {
      this.status = "Ouvert";
    } else {
      this.status = "Fermé";
    }
    return this.status;
  }

}
