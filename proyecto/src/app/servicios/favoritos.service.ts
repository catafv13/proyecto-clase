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

  constructor(private http: HttpClient) {
    // Cargar favoritos al iniciar la app (opcional, pero recomendado)
    this.obtenerFavoritos().subscribe();
  }

  private getAuthHeaders(): HttpHeaders {
    const token = (typeof localStorage !== 'undefined')
      ? localStorage.getItem('token') || ''
      : '';

    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  obtenerFavoritos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl, {
      headers: this.getAuthHeaders()
    }).pipe(
      tap(favoritos => {
        this.favoritosSubject.next(favoritos);
      })
    );
  }

  agregarFavorito(producto: any): Observable<any> {
    const body = { id_producto: producto.id };

    return this.http.post<any>(
      `${this.apiUrl}/agregar`,
      body,
      { headers: this.getAuthHeaders() }
    ).pipe(
      tap((response) => {
        // Si el backend devuelve la lista actualizada en 'response.favoritos', úsala
        if (response && response.favoritos) {
          this.favoritosSubject.next(response.favoritos);
        } else {
          // Si no, recarga la lista completa
          this.obtenerFavoritos().subscribe();
        }
      })
    );
  }

  eliminarFavorito(idProducto: number): Observable<any> {
    return this.http.delete(
      `${this.apiUrl}/eliminar/${idProducto}`,
      { headers: this.getAuthHeaders() }
    ).pipe(
      tap(() => {
        // Recargar la lista después de eliminar
        this.obtenerFavoritos().subscribe();
      })
    );
  }
}