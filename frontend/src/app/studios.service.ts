import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gym } from './studios.model';

@Injectable({
  providedIn: 'root',
})
export class StudiosService {
  constructor(private client: HttpClient) {}

  getAlmaty(): Observable<Gym[]> {
    return this.client.get<Gym[]>('http://127.0.0.1:8000/studios/almaty/');
  }

  getAlmatyItem(username: string): Observable<Gym[]> {
    return this.client.get<Gym[]>(
      `http://127.0.0.1:8000/studios/almaty/${username}`
    );
  }

  getAstana(): Observable<Gym> {
    return this.client.get<Gym>('http://127.0.0.1:8000/studios/astana/');
  }

  getUralsk(): Observable<Gym> {
    return this.client.get<Gym>('http://127.0.0.1:8000/studios/uralsk/');
  }

  getShymkent(): Observable<Gym> {
    return this.client.get<Gym>('http://127.0.0.1:8000/studios/shymkent/');
  }

  getKaraganda(): Observable<Gym> {
    return this.client.get<Gym>('http://127.0.0.1:8000/studios/karaganda/');
  }
}
