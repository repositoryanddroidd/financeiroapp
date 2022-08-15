import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabmenuPage } from './tabmenu.page';

const routes: Routes = [
  {
    path: '',
    component: TabmenuPage,
    children: [
      {
        path: "monitoramento",
        children: [
          {
            path: "",
            loadChildren: () => import("../../page/monitoramento/monitoramento.module").then(module => module.MonitoramentoPageModule)
          }
        ]
      },
      {
        path: "configuracao",
        children: [
          {
            path: "",
            loadChildren: () => import("../../page/configuracao/configuracao.module").then(module => module.ConfiguracaoPageModule)
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabmenuPageRoutingModule { }
