import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPnyStore } from './pny-stores.model';
import { Observable } from 'rxjs';

@Injectable()
export class PnyStoresService {
  protected configUrl =
    'https://613b55d9110e000017a45595.mockapi.io/api/v1/stores/suppliers';

  constructor(private http: HttpClient) {}

  getStores(): Observable<IPnyStore[]> {
    return this.http.get<IPnyStore[]>(this.configUrl);
  }
}
