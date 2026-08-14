import { Routes } from '@angular/router';
import { First } from './components/first/first';
import { CvPage } from './cv/cv-page/cv-page';
import { TodoComponent } from './todo/todo/todo.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { DetailsCvComponent } from './cv/details-cv/details-cv.component';
import { NF404 } from './components/nf404/nf404';
import { Login } from './auth/login/login';

export const routes: Routes = [
  {
    //ca informe sur l'URI
    path: '',
    // Le composant a afficher lorsque tu match la route
    component: First
  },
  { path: 'cv', component: CvPage},
  // avec : devant le id on indique que id est variable
  { path: 'cv/:id', component: DetailsCvComponent},
  { path: 'todo', component: TodoComponent},
  { path: 'login', component: Login},
  { path: 'word', component: MiniWordComponent},
  { path: '**', component: NF404}
];
