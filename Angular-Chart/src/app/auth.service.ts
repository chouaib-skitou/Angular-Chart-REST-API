import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders } from '@angular/common/http';

const apiKey = 'coinrankingefac230bdb76524cc266f9003efea7f108ae774d5c299565';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'X-My-custom-Header': `${apiKey}`,
    'Access-Control-Allow-Origin': '*'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'https://api.coinranking.com/v2/coins';
  private proxyUrl = 'https://cors-anywhere.herokuapp.com/'

  constructor(private http: HttpClient) {}

  cryptoData() {
    const url = `${this.proxyUrl}${this.baseUrl}`

    return this.http.get(url, httpOptions).toPromise().then((data) => {
      return data;
    });
  }
}
