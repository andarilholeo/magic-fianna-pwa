import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [CommonModule]
})
export class HomeComponent {

  eventos = [
    { nome: 'Criar 1 ficha de Tesouro', peso: 30 },
    { nome: 'Descarta e compra', peso: 25 },
    { nome: 'Sacrificar criatura', peso: 10 },
    { nome: 'Dragãozão', peso: 5 }
  ];

  sorteio() {
    const totalPeso = this.eventos.reduce((soma, ev) => soma + ev.peso, 0);
    const rand = Math.random() * totalPeso;
    let acumulado = 0;
    
    for (const ev of this.eventos) {
      acumulado += ev.peso;
      if (rand < acumulado) return ev;
    }
    
    return this.eventos[0];
  }
}
