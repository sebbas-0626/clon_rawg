import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class GameSearchService {

  constructor(private httpClient: HttpClient) { }
  seaechGames(): Observable<any> {
    return this.httpClient.get(environment.BASE_API_URL + 'games');
  }
}
