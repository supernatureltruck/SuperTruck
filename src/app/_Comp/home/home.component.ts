import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/_services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private homeService:HomeService) { }

  donnees:any;
  paragraphe: string;
  isLoaded = false;

  ngOnInit() {
    this.getHome();
  }

  getHome() {
    this.homeService.getHome()
     .subscribe(data => {
        this.donnees = data;
        this.isLoaded = true;
     });
   }


  commande() {
    let link = ['menu'];
      this.router.navigate(link);
  }

}
