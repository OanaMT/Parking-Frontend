import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { PinStates } from './custom classes/pin-states';

@Injectable({
  providedIn: 'root',
})
export class PinStateService {
  private pinstateUrl = 'https://oana-parking-backend.herokuapp.com/pins';
  constructor(private httpClient: HttpClient) {}

  getPinStates(): Observable<PinStates[]> {
    return this.httpClient
      .get<PinStates[]>(this.pinstateUrl)
      .pipe(catchError(this.handleError<PinStates[]>('getPinstates')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (err: HttpErrorResponse): Observable<T> => {
      console.error(err);

      this.log(`${operation} failed: ${err.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(`ActivityService: ${message}`);
  }
}
