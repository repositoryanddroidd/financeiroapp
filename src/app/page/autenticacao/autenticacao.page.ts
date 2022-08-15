import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autenticacao',
  templateUrl: './autenticacao.page.html',
  styleUrls: ['./autenticacao.page.scss'],
})
export class AutenticacaoPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() { }

  public redirecionarTelaMonitoramento() {
    this.router.navigate(["../tabmenu"]);
  }

}
