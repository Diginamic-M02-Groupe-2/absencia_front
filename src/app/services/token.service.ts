import { TokenType } from '@angular/compiler';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  public getDecodedToken(token: string): TokenType | null {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }
}
