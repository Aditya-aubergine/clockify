import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'X-Api-Key': 'Y2ZhZWRjNTUtZWQzNS00YjRkLWEwMmEtOTM5ZTE5NjNkOWZh'
  }),
};

@Injectable({
  providedIn: 'root'
})
export class MyDataService {

  private apiUrl = 'https://api.clockify.me/api/v1/workspaces/5e0ddcf5579d860ff456dc3b/user/63c1550cce4abb1e1c035ed9/time-entries';

  constructor(private http: HttpClient) {}

  getEntries() {
    return this.http.get<any>(this.apiUrl, httpOptions);
  }

}
