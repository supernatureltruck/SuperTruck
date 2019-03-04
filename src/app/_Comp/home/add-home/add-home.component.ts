import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/_services/home.service';

@Component({
  selector: 'app-add-home',
  templateUrl: './add-home.component.html',
  styleUrls: ['./add-home.component.css']
})
export class AddHomeComponent implements OnInit {

  constructor(private homeService : HomeService, private router:Router) { }

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

   addHome(form) {
    this.homeService.addHome(form.value).subscribe(home => {
        this.router.navigate([`./home`]);
      });
  }

}
