import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string ) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQBmeY8EMRzTSY7-OobjA54OiP-BJArGgSmNqYKWS5eEoXtoJlEL90ccW-YC-EWx1-UAr3vM7m8O55BrMnk'
    });

    return this.http.get(url, {headers});
  }

  getNewReleases() {
    return  this.getQuery('browse/new-releases')
              .pipe( map( ((data: any) => data.albums.items)));

  }

  getArtista(termino: string) {

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
            .pipe(map((data: any) => data.artists.items));
  }
}
