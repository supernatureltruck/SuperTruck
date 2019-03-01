import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  email = localStorage.getItem("mail");
  profil = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUserByMail(this.email);
  }

  getUserByMail(email) {
    this.userService.getUserByMail(email)
    .subscribe(data => console.log(data));
  }

}
