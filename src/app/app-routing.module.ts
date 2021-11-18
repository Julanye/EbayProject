import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'connexion',
    loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'encheres',
    loadChildren: () => import('./encheres/encheres.module').then(m => m.EncheresPageModule)
  },
  {
    path: 'mes-encheres',
    loadChildren: () => import('./mes-encheres/mes-encheres.module').then( m => m.MesEncheresPageModule)
  },
  {
    path: 'une-enchere',
    loadChildren: () => import('./une-enchere/une-enchere.module').then( m => m.UneEncherePageModule)
  },
  {
    path: 'mon-profil',
    loadChildren: () => import('./mon-profil/mon-profil.module').then( m => m.MonProfilPageModule)
  },
  {
    path: 'creer-enchere',
    loadChildren: () => import('./creer-enchere/creer-enchere.module').then( m => m.CreerEncherePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
