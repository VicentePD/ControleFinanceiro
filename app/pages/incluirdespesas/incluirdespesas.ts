import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

/*
  Generated class for the IncluirDespesasPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/incluirdespesas/incluirdespesas.html',
})
export class IncluirDespesasPage {

viewCtrl;
  constructor(private nav: NavController, viewCtrl: ViewController) {
      this.viewCtrl = viewCtrl;
  }

  fechar()
  {
      let data = { 'foggggggggggo': 'bar' };
      this.viewCtrl.dismiss(data);
  }
  salvar()
  {


  }

}
