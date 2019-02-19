import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/_class/contact';
import { ContactService } from 'src/app/_services/contact.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private contactService : ContactService, private router:Router) { }

  donnees:any;
  
  ngOnInit() {
    this.getContact();
  }

  getContact() {
    this.contactService.getContact()
     .subscribe(data => {
       if(data != null ){
        let cle = Object.keys(data);
        this.donnees = data;
      }
     });
   }
   addContact(form) {
    this.contactService.addContact(form.form.value)
      .subscribe(contact => {
        this.router.navigate([`./contact`]);
      });
  }

}
