import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  private apiUrl = 'http://localhost/api_proyecto/public/favoritos';

  private favoritosSubject = new BehaviorSubject<any[]>([]);
  favoritos$ = this.favoritosSubject.asObservable();

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    const token = (typeof localStorage !== 'undefined')
      ? localStorage.getItem('token') || ''
      : '';

    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

 obtenerFavoritos(): Observable<any> {
  return this.http.get(this.apiUrl, {
    headers: this.getAuthHeaders()
  }).pipe(
    tap((resp: any) => {
      // Si resp YA es un array → lo uso.
      // Si resp trae resp.favoritos → uso eso.
      // Si ninguna aplica → dejo array vacío.
      const favoritos = Array.isArray(resp) ? resp : resp.favoritos ?? [];
      this.favoritosSubject.next(favoritos);
    })
  );
}

  agregarFavorito(producto: any): Observable<any> {
    const body = { id_producto: producto.id };

    return this.http.post(
      `${this.apiUrl}/agregar`,
      body,
      { headers: this.getAuthHeaders() }
    ).pipe(
      tap(() => this.obtenerFavoritos().subscribe())
    );
  }

  eliminarFavorito(idProducto: number): Observable<any> {
    return this.http.delete(
      `${this.apiUrl}/eliminar/${idProducto}`,
      { headers: this.getAuthHeaders() }
    ).pipe(
      tap(() => this.obtenerFavoritos().subscribe())
    );
  }

}
