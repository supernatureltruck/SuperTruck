import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-localisation',
  templateUrl: './localisation.component.html',
  styleUrls: ['./localisation.component.css']
})
export class LocalisationComponent implements OnInit {
  lat: number;
  lng: number;
  zoom: number;

  constructor() { }

  ngOnInit() {
    this.lat = 50.2789254;
    this.lng = 3.9677517999999736;
    this.zoom = 16;
  }

}
