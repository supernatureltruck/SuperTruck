import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/_class/contact';
import { ContactService } from 'src/app/_services/contact.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  

  constructor(private contactService : ContactService, private router:Router) { }

  donnees:any;
  isLoaded = false;
  
  ngOnInit() {
    this.getContact();
  }

  getContact() {
    this.contactService.getContact()
     .subscribe(data => {
        this.donnees = data;
        this.isLoaded = true;
        console.log(this.donnees);
     });
   }

   addContact(form) {
     console.log(form.value);
    this.contactService.addContact(form.value)
      .subscribe(contact => {
        this.router.navigate([`./contact`]);
      });
  }

}
