import { RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './components/game-list/game-list.component';
import { NgModule } from '@angular/core';
const ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: GameListComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES)
    ],
    exports: [RouterModule]
})
export class GamesRouting {
    
}
