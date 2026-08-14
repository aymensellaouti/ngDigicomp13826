import { Injectable, signal } from '@angular/core';
import { Cv } from '../model/cv.model';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private cvs = signal<Cv[]>([
    new Cv(1, 'Begin', 'Thierry', 'Ingénieur', '1234', 20, 'rotating_card_profile3.png'),
    new Cv(2, 'Khribech', 'Anass', 'Bibliothècaire', '1234', 20, 'rotating_card_profile.png'),
    new Cv(3, 'Sellaouti', 'Aymen', 'Formateur', '1234', 44, ''),
    new Cv(4, 'Sellaouti', 'Aymen', 'Formateur', '1234', 44, '                   '),
  ]);

  getCvs() {
    return this.cvs.asReadonly();
  }

  /**
   * @var le cv sélectionné
   */
  private selectedCv = signal<Cv | null>(null);

  getSelectedCv() {
    return this.selectedCv.asReadonly();
  }

  /**
   * Permet de sélectionner le cv
   * @param cv le cv sélectionné
   */
  selectCv(cv: Cv) {
    this.selectedCv.set(cv);
  }

  /**
   *
   * Cherche un cv avec son id dans lai liste fictive de cvs
   *
   * @param id
   * @returns Cv | null
   */
  findCvById(id: number): Cv | null {
    return this.cvs().find((cv) => cv.id == id) ?? null;
  }

  /**
   *
   * Supprime un cv s'il le trouve
   *
   * @param cv : Cv
   * @returns boolean
   */
  deleteCv(cv: Cv): boolean {
    const oldTodosLength = this.cvs().length;
    this.cvs.update((cvs) => {
      return cvs.filter((actualCv) => actualCv != cv);
    });
    return oldTodosLength != this.cvs().length;
  }
}
