import {Injectable} from '@angular/core';
import {HttpClient, HttpEventType, HttpRequest, HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  public host: String = "http://localhost:8888/CLIENT-SERVICE";

  constructor(private http: HttpClient, private router: Router) {
  }

  public getClient() {

    return this.http.get(this.host + "/clients")

  }


}
