import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-buscar',
    templateUrl: './buscar.component.html'
})
export class BuscarComponent implements OnInit {

    heroes: Heroe[];
    keyWord: string;


    constructor(
        private heroesService: HeroesService,
        private router: Router,
        private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe( params => {
            this.keyWord = params.keyWord;
            this.heroes = this.heroesService.buscarHeroes(params.keyWord);
        });
    }

    verHeroe(i: number) {
        this.router.navigate(['/heroe', i]);
    }

}
