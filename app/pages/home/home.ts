import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {daoDespesas} from '../../dao/daoDespesas';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    despesasDAO: any ;
    valorDespesas:number;
  constructor(private navController: NavController) {
     this.despesasDAO = new daoDespesas();
     this.valorDespesas = this.despesasDAO.getValorTotalDespesas();
     console.log("teste " +  this.valorDespesas);
  }
}
