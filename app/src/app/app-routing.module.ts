import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'spellen',
    pathMatch: 'full'
  },
  {
    path: 'spellen',
    loadChildren: () =>
      import('./modules/games/games.module').then(
        (m) => m.GamesModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
