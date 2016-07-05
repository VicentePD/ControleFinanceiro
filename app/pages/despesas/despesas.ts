import {Component} from '@angular/core';
import {NavController, Modal} from 'ionic-angular';
import {daoDespesas} from '../../dao/daoDespesas';
import {IncluirDespesasPage} from '../incluirdespesas/incluirdespesas';

@Component({
  templateUrl: 'build/pages/despesas/despesas.html'
})

export class Despesas {
    despesasDAO: any ;
    itens: any ;
  constructor(private navController: NavController) {
        this.despesasDAO = new daoDespesas();
        this.itens= this.despesasDAO.getDespesas();
  }

  incluirDespesa (){
     let modal = Modal.create(IncluirDespesasPage);
    this.navController.present(modal);
  }
}
