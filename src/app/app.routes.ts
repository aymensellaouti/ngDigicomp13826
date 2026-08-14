import { Routes } from '@angular/router';
import { First } from './components/first/first';
import { CvPage } from './cv/cv-page/cv-page';
import { TodoComponent } from './todo/todo/todo.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';

export const routes: Routes = [
  {
    //ca informe sur l'URI
    path: '',
    // Le composant a afficher lorsque tu match la route
    component: First
  },
  { path: 'cv', component: CvPage},
  { path: 'todo', component: TodoComponent},
  { path: 'word', component: MiniWordComponent}
];
