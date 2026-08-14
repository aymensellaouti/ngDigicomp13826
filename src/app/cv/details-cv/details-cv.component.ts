import { Component, inject, signal } from "@angular/core";
import { Cv } from "../model/cv.model";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css'],
})
export class DetailsCvComponent {
  // cv/1 => je dois récupérer le paramètre id
  // 1- Récupérer le service
  acr = inject(ActivatedRoute);
  cv= signal<Cv | null>(null);

  constructor() {
    console.log(this.acr.snapshot.params);
    // Todos:
    // récupérer le id
    const id = this.acr.snapshot.params['id'];
    // récupérer le cv d'id id
      // Si je le trouve
        // je le met dans le signal cv
      // Sinon
        // Rediriger vers la liste des cvs (Router qu'il faudra injecter)
  }
}
