import { Routes } from "@angular/router";

export const gamelistRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/games-pages/games-pages.component').then(m => m.GamesPagesComponent)
  }
];
