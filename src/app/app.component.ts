import { Component } from '@angular/core';
import { Auth } from './_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SuperTruck';
 

  constructor(private auth:Auth){
  }

}
