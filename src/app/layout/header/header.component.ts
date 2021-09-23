import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  classSubNav: string = 'hiden-sub-nav';
  classSubNavControl: boolean = false;
  hidenNavPromo() {
    this.classSubNavControl = !this.classSubNavControl;
    this.classSubNavControl ? this.classSubNav = 'show-sub-nav' : this.classSubNav = 'hiden-sub-nav';

  }
}
