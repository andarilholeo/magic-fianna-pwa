import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventoService, Evento } from '../evento.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  eventos: Evento[] = [];
  resultadoSorteio: Evento | null = null;

  constructor(private eventoService: EventoService) {}

  ngOnInit(): void {
    this.eventoService.getEventos().subscribe(data => {
      this.eventos = data;
    });
  }

  sorteio(): void {
    if (!this.eventos.length) return;
    const totalPeso = this.eventos.reduce((s, ev) => s + ev.peso, 0);
    const rand = Math.random() * totalPeso;
    let acumulado = 0;

    for (const ev of this.eventos) {
      acumulado += ev.peso;
      if (rand < acumulado) {
        this.resultadoSorteio = ev;
        return;
      }
    }
    this.resultadoSorteio = this.eventos[0];
  }
}
