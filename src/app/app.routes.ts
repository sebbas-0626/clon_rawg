import { Routes } from '@angular/router';
import { MainLayoutComponent } from './core/main-layout/main-layout.component';
import { gamelistRoutes } from './shared/game-list/game-list.routes';

export const routes: Routes = [{

  path: '',
  component:MainLayoutComponent,
  children:[...gamelistRoutes],
}];
