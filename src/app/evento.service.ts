import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, merge, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

export interface Evento {
  nome: string;
  descricao: string;
  peso: number;
  imagemUrl: string;
}

@Injectable({ providedIn: 'root' })
export class EventoService {
  private readonly STORAGE_KEY = 'eventos_custom';
  private eventosSubject = new BehaviorSubject<Evento[]>([]);
  public eventos$ = this.eventosSubject.asObservable();

  constructor(private http: HttpClient) {
    this.init();
  }

  private init() {
    const json$ = this.http.get<Evento[]>('assets/bencao_maldicao.json');

    const custom = localStorage.getItem(this.STORAGE_KEY);
    const stored: Evento[] = custom ? JSON.parse(custom) : [];

    json$
      .pipe(
        map(originais => [...originais, ...stored]),
        tap(all => this.eventosSubject.next(all))
      )
      .subscribe();
  }

  adicionarEvento(novo: Evento) {

    const atuais = this.eventosSubject.getValue();
    const updated = [...atuais, novo];
    this.eventosSubject.next(updated);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(updated));
  }

  getEventos(): Observable<Evento[]> {
    return this.eventos$;
  }
}
