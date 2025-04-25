import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventoService, Evento } from '../evento.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-evento',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './add-evento.component.html',
  styleUrl: './add-evento.component.scss'
})

export class AddEventoComponent {
  modelo: Evento = {
    nome: '',
    descricao: '',
    peso: 1,
    imagemUrl: ''
  };

  constructor(private eventoService: EventoService) {}

  onSubmit() {
    this.eventoService.adicionarEvento({ ...this.modelo });
    alert('Evento adicionado com sucesso!');
    this.modelo = { nome: '', descricao: '', peso: 1, imagemUrl: '' };
  }
}
