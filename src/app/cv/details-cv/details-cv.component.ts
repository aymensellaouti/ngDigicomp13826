import { Component, inject, signal } from "@angular/core";
import { Cv } from "../model/cv.model";
import { ActivatedRoute, Router } from "@angular/router";
import { CvService } from "../services/cv-service";
import { DefaultImagePipe } from "../pipes/default-image-pipe";

@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css'],
  imports: [DefaultImagePipe],
})
export class DetailsCvComponent {
  // cv/1 => je dois récupérer le paramètre id
  // 1- Récupérer le service
  acr = inject(ActivatedRoute);
  cv = signal<Cv | null>(null);
  cvService = inject(CvService);
  router = inject(Router);
  constructor() {
    console.log(this.acr.snapshot.params);
    // Todos:
    // récupérer le id
    const id = this.acr.snapshot.params['id'];
    // récupérer le cv d'id id
    // Si je le trouve
    // je le met dans le signal cv
    this.cv.set(this.cvService.findCvById(id));

    this.cvService.getCvsFromApiById(id).subscribe({
      next: (cv) => {
        this.cv.set(cv)
      },
      error: (e) => {
        this.router.navigate(['cv']);
      },
    });
    // Sinon
    // if (!this.cv())
      // Rediriger vers la liste des cvs (Router qu'il faudra injecter)

  }
  delete() {
    const cv = this.cv();
    if (cv) {
      this.cvService.deleteCv(cv);
      this.router.navigate(['cv']);
    }
  }
}
