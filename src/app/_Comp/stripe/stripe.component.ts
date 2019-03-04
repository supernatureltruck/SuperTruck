import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-stripe',
  templateUrl: './stripe.component.html',
  styleUrls: ['./stripe.component.css']
})
export class StripeComponent implements OnInit {

  URL = 'http://localhost:8080/payment/charge';

  constructor(private http: HttpClient) { }

  ngOnInit() { }

  chargeCreditCard() {
    const form = document.getElementsByTagName('form')[0];
    (<any>window).Stripe.card.createToken({
      number: form.cardNumber.value,
      exp_month: form.expMonth.value,
      exp_year: form.expYear.value,
      cvc: form.cvc.value
    }, (status: number, response: any) => {
      if (status === 200) {
        const token = response.id;
        this.chargeCard(token);
      } else {
        console.log(response.error.message);
      }
    });
  }

  chargeCard(token: string) {
    const headers = new HttpHeaders();
    headers.append('token', token);
    headers.set('amount', '100');
    this.http.post(this.URL, {}, { headers: headers })
      .subscribe(resp => {
        console.log(resp);
      });
  }
}
