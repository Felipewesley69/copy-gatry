import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.css']
})
export class PromoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  products: any[] = [
    {
      linkImg: 'https://cdn.gatry.com/gatry-static/promocao/imagem/d18ff5c0d30722d40937e7c8d30f569f.jpg',
      titleProduct: 'Chinelo Salvador, Olympikus, Masculino',
      value: 40.37,
      fistComent: '40 conto uma chinela Olympikus',
      totalComents: 10,
      store: 'Amazon',
      timePost: '27 minutos'
    },
    {
      linkImg: 'https://cdn.gatry.com/gatry-static/promocao/imagem/447ab8012d4b41f97c987de4340e331c.jpg',
      titleProduct: 'Game Nioh 2 - PS4',
      value: 59.90,
      fistComent: '',
      totalComents: 3,
      store: 'Americanas',
      timePost: '22 minutos'
    }
  ];
}
