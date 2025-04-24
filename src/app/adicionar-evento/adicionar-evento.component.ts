import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-adicionar-evento',
  standalone: true,
  templateUrl: './adicionar-evento.component.html',
  styleUrls: ['./adicionar-evento.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class AdicionarEventoComponent {
  
  nome: string = '';
  peso: number = 0;
  eventos: any[] = [
    { nome: 'Criar 1 ficha de Tesouro', peso: 30 },
    { nome: 'Descarta e compra', peso: 25 },
    { nome: 'Sacrificar criatura', peso: 10 },
    { nome: 'Dragãozão', peso: 5 }
  ];

  adicionarEvento() {
    if (this.nome && this.peso) {
      this.eventos.push({ nome: this.nome, peso: this.peso });
      this.nome = '';
      this.peso = 0;
    }
  }
}
