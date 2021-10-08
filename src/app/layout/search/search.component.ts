import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  btnCloseClass: string = '';

  closaAlert() {
    this.btnCloseClass = 'hiden-alert';
    setTimeout(() => {
      this.btnCloseClass = 'hiden-alert hiden-alert-display-none';
    }, 500);
  }
}
