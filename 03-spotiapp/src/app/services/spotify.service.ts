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
      Authorization: 'Bearer BQCg34UHHSPfmKJQSv4sc82FKt3bgzS1DzAW_EFGDntlawpzaVbJaGvZlWTI4XJP9WtfFoE0hzubA6VXzd0'
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
