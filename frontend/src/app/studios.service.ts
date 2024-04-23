import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from './studios.model';

@Injectable({
  providedIn: 'root',
})
export class StudiosService {
  constructor(private client: HttpClient) {}
  getAlmaty(): Observable<Country[]> {
    return this.client.get<Country[]>(
      'http://127.0.0.1:8000/studios/almaty/gym'
    );
  }
  getAstana(): Observable<Country[]> {
    return this.client.get<Country[]>(
      'http://127.0.0.1:8000/studios/astana/gym'
    );
  }
  getUralsk(): Observable<Country[]> {
    return this.client.get<Country[]>(
      'http://127.0.0.1:8000/studios/uralsk/gym'
    );
  }
  getShymkent(): Observable<Country[]> {
    return this.client.get<Country[]>(
      'http://127.0.0.1:8000/studios/shymkent/gym'
    );
  }
  getKaraganda(): Observable<Country[]> {
    return this.client.get<Country[]>(
      'http://127.0.0.1:8000/studios/karaganda/gym'
    );
  }
}
