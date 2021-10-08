import { Component, OnInit } from '@angular/core';
import { Product } from './list-products/products.model';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.css'],
})
export class PromoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  ids: number[] = [];

  generateId(): number {
    return this.ids.push(this.ids.length + 1);
  }

  products: Product[] = [
    {
      id: this.generateId(),
      linkImg:
        'https://cdn.gatry.com/gatry-static/promocao/imagem/d18ff5c0d30722d40937e7c8d30f569f.jpg',
      titleProduct: 'Chinelo Salvador, Olympikus, Masculino',
      value: 40.37,
      fistComent: '40 conto uma chinela Olympikus',
      totalComents: 10,
      store: 'Amazon',
      timePost: '12 minutos',
    },
    {
      id: this.generateId(),
      linkImg:
        'https://cdn.gatry.com/gatry-static/promocao/imagem/447ab8012d4b41f97c987de4340e331c.jpg',
      titleProduct: 'Game Nioh 2 - PS4',
      value: 59.9,
      fistComent: '',
      totalComents: 3,
      store: 'Americanas',
      timePost: '22 minutos',
    },
    {
      id: this.generateId(),
      linkImg:
        'https://cdn.gatry.com/gatry-static/promocao/imagem_url/790566f43f57a453d8543e041cdcde4d.jpg',
      titleProduct: 'Cadeira Gamer Alpha Gamer Zeta Black Red - AGZETA-BK-R',
      value: 849.95,
      fistComent: '',
      totalComents: 5,
      store: 'Kabun',
      timePost: '25 minutos',
    },
    {
      id: this.generateId(),
      linkImg:
        'https://cdn.gatry.com/gatry-static/promocao/imagem/995122240e7c1c43aefd8b2589c2523d.jpg',
      titleProduct:
        'Bicicleta Aro 29 TK 7.0 Mountain Bike Vermelha, Track Bikes',
      value: 1549,
      fistComent: '',
      totalComents: 3,
      store: 'Americanas',
      timePost: '22 minutos',
    },
    {
      id: this.generateId(),
      linkImg:
        'https://cdn.gatry.com/gatry-static/promocao/imagem/a4a6ee16ee3fe49c195b552e8af0d09e.png',
      titleProduct:
        'Smartphone ASUS Zenfone Max Pro M2 6GB RAM, 64GB, Black Saphire',
      value: 899.99,
      fistComent: 'Menor preço já registrado',
      totalComents: 9,
      store: 'Americanas',
      timePost: '11 horas',
    },
    {
      id: this.generateId(),
      linkImg:
        'https://cdn.gatry.com/gatry-static/promocao/imagem/9d4a371f5e58297f1426ee2c17533bf1.jpg',
      titleProduct:
        'Fire TV Stick com Controle Remoto por Voz com Alexa Streaming em Full HD Preto (Girafa)',
      value: 234.04,
      fistComent: 'Menor preço que já vi',
      totalComents: 2,
      store: 'Amazon',
      timePost: '1 hora',
    },
  ];
}
