import {CrudInterface} from "./crud.interface";
import {catchError, Observable, throwError} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Entity} from "../entity/entity.interface";

export class RestCrud<T extends Entity> extends CrudInterface<T> {
  constructor(private httpClient: HttpClient, private apiUrl: string) {
    super();
  }

  create(entity: T): Observable<T | undefined> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };

    return this.httpClient.post<T | undefined>(this.apiUrl, entity, httpOptions).pipe(
      catchError(
      (error) => {
        return throwError(() => error);
      })
    );
  }

  get(id: Number): Observable<T | undefined> {
    return this.httpClient.get<T | undefined>(`${this.apiUrl}${id}`).pipe(
        catchError((error) => {
          return throwError(() => error);
        })
      );
  }

  getAll(): Observable<T[]> {
    return this.httpClient.get<T[]>(this.apiUrl).pipe(
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }

  update(entity: T): Observable<T> {
    const httpOptions= {
      headers: new HttpHeaders({
        'Content-Type': 'application/json-patch+json'
      }),
    };

    return this.httpClient.patch<T>(`${this.apiUrl}${entity.id}`, entity, httpOptions).pipe(
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }
}
