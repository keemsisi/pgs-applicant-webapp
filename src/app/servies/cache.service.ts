import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CacheService {
  username: string ;
  password: string ;
  loggedIn: boolean;
  serverURL = 'http://localhost:8081';

  constructor() { }
}
