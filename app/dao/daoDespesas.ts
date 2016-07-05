import {Component} from '@angular/core';

export class daoDespesas {
listaDespesas: Array<{despesa: any, valor: number, dataDesp: number, recorrente: number }>;
  constructor( ) {

  }
  getDespesas(){
    this.listaDespesas = [ {despesa: 'TV A Cabo', valor: 389.89, dataDesp: 15072016, recorrente:12},
    {despesa: 'Celular', valor: 189.89, dataDesp: 10072016, recorrente:12}];

     return this.listaDespesas;
  }
  insertContas(){

  }
  getValorTotalDespesas(){

    return 587.99;
  }

}
