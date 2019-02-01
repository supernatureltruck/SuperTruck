import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-plat',
  templateUrl: './plat.component.html',
  styleUrls: ['./plat.component.css']
})
export class PlatComponent implements OnInit {
  @Input() nom: String;
  @Input() description: String;
  @Input() prix: String;
  @Input() img: String;
  @Input() categorie: String;

  constructor() { }

  ngOnInit() {
  }

}
