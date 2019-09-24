import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;

  constructor(private spotify: SpotifyService) {

    this.error = false;
    this.loading = true;

    this.spotify.getNewReleases()
      .subscribe((data: any) => {
        console.log(data);
        this.nuevasCanciones = data;
        this.loading = false;
      }, ( error ) => {
        this.loading = false;
        this.error = true;
        this.mensajeError = error.error.error.message; // Error de la api de spotify
      });

  }

  ngOnInit() {
  }

}
