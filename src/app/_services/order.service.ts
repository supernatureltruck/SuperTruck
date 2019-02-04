import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  status = 'Ouverture';

  constructor() { }

  change(status) {
    if(status === 'Fermeture') {
      this.status = "Ouverture";
    } else {
      this.status = "Fermeture";
    }

    return this.status;
  }

}
