import { Component, Input, OnInit } from '@angular/core';
import { Product } from './products.model';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
})
export class ListProductsComponent implements OnInit {
  @Input() products: Product[];
  constructor() {}

  ngOnInit(): void {}

  feedbackBuy(product) {
    alert(`Parabéns, você comprou um(a) ${product}`);
  }
}
