import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  //Recebendo o nome da loja
  @Input() store: string;
  @Input() product: string;
  @Output() buy = new EventEmitter<any>();

  onBuy() {
    this.buy.emit(this.product);
  }
}
