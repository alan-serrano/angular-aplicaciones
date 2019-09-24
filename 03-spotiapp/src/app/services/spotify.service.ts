import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQBmeY8EMRzTSY7-OobjA54OiP-BJArGgSmNqYKWS5eEoXtoJlEL90ccW-YC-EWx1-UAr3vM7m8O55BrMnk'
    });

    return  this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
              .pipe( map( ((data: any) => data.albums.items)));

  }

  getArtista(termino: string) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQBmeY8EMRzTSY7-OobjA54OiP-BJArGgSmNqYKWS5eEoXtoJlEL90ccW-YC-EWx1-UAr3vM7m8O55BrMnk'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers})
            .pipe(map((data: any) => data.artists.items));
  }
}
