import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/_services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-localisation',
  templateUrl: './localisation.component.html',
  styleUrls: ['./localisation.component.css']
})
export class LocalisationComponent implements OnInit {
  lat: number;
  lng: number;
  zoom: number;
  

  constructor(private contactService : ContactService, private router:Router) { }

  donnees:any;
  isLoaded= false;
  
  ngOnInit() {
    this.lat = 50.6327635;
    this.lng = 3.0209538;
    this.zoom = 16;
    this.getContact();
  }

  getContact() {
    this.contactService.getContact()
     .subscribe(data => {
        this.donnees = data;
        this.isLoaded = true;
     });
   }

}
