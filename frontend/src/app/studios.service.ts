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
    return this.client.get<Country[]>('http://127.0.0.1:8000/studios/almaty/');
  }
  getAstana(): Observable<Country[]> {
    return this.client.get<Country[]>('http://127.0.0.1:8000/studios/astana/');
  }
  getUralsk(): Observable<Country[]> {
    return this.client.get<Country[]>('http://127.0.0.1:8000/studios/uralsk/');
  }
  getShymkent(): Observable<Country[]> {
    return this.client.get<Country[]>(
      'http://127.0.0.1:8000/studios/shymkent/'
    );
  }
  getKaraganda(): Observable<Country[]> {
    return this.client.get<Country[]>(
      'http://127.0.0.1:8000/studios/karaganda/'
    );
  }
}
