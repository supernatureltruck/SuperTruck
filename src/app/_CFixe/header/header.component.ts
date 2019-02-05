import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { Router, RouterEvent } from '@angular/router';
import { RouterLink } from '@angular/router';
import { OrderService } from 'src/app/_services/order.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  authStatus: boolean;
  status: string;

  constructor(private userService : UserService, private router:Router, private orderService: OrderService) { }

  ngOnInit() {
    this.authStatus = this.userService.authStatus;
    this.status = this.orderService.status;
  }

  signIn() {
    this.userService.signIn();
    this.authStatus = this.userService.authStatus;
    let link = ['menu'];
    this.router.navigate(link);
  }

  signOut() {
    this.userService.signOut();
    this.authStatus = this.userService.authStatus;
    let link = ['menu'];
    this.router.navigate(link);
  }


}
