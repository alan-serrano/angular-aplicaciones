import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';


@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html',
    styles: []
})
export class HeroeComponent {

    heroe: any = {};

    constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService) {
        // Regresa un observador
        this.activatedRoute.params.subscribe( params => {
            console.log(params.id);
            this.heroe = this.heroesService.getHeroe(params.id);
        });
    }
}
