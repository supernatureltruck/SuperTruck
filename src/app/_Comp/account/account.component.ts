import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  mail = localStorage.getItem("mail");
  profil = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUserByMail(this.mail);
  }

  getUserByMail(mail) {
    this.userService.getUserByMail(mail)
    .subscribe(data => this.profil = data);
  }

}
