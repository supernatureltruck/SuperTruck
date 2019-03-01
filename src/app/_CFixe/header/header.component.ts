import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { Router, RouterEvent } from '@angular/router';
import { RouterLink } from '@angular/router';
import { OrderService } from 'src/app/_services/order.service';
import { Auth } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  authStatus: any;
  status: string;

  constructor(private userService : UserService, private router:Router, private orderService: OrderService, private auth: Auth) { }

  ngOnInit() {
    this.status = this.orderService.status;
  }
  
  logOut() {
      this.auth.logout();
  }


}
