import { Injectable, Signal, signal } from '@angular/core';
import { Cv } from '../model/cv.model';

@Injectable({
  providedIn: 'root',
})
export class EmbaucheService {
  private embauchees = signal<Cv[]>([]);

  getEmbauchees(): Signal<Cv[]> {
    // Encapuslation, je protége ma variable
    return this.embauchees.asReadonly();
  }
  /**
   *
   * Permet d'embaucher des cvs
   *
   * @param cv - le Cv à embaucher
   * @returns {boolean} return true si embauchée false sinon
   */
  embaucher(cv: Cv): boolean {
    if (this.embauchees().includes(cv))
        return false;
    this.embauchees.update(embauchees => [
      ...embauchees,
      cv
    ]);
    return true
  }
}
