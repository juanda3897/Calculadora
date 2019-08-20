import { Component } from '@angular/core';
import { when } from 'q';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent  {


    public numero1: any;
    public numero2: any;
    public resultado:any;

    
    addition(){
      this.resultado = this.numero1 + this.numero2;
    }
    rest(){
      this.resultado = this.numero1 - this.numero2;
    }
    mult(){
      this.resultado = this.numero1 * this.numero2;
    }
    div(){
      {
      if (this.numero2==0){
      alert ("No es posible dividr entre cero Intente de nuevo")
      this.numero2 = " ";
      this.resultado=" ";
      }
      
    else {this.resultado= (this.numero1) / (this.numero2) ;
    }
  }            
    
}
      
  reset() {
    debugger;
    this.numero1 = " ";
    this.numero2 = " ";
    this.resultado = " ";
     }

    }
  
  

