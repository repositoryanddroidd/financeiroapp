import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'autenticacao',
    pathMatch: 'full'
  },
  {
    path: 'autenticacao',
    loadChildren: () => import('./page/autenticacao/autenticacao.module').then( m => m.AutenticacaoPageModule)
  },
  {
    path: 'tabmenu',
    loadChildren: () => import('./component/tabmenu/tabmenu.module').then( m => m.TabmenuPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
