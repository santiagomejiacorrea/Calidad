import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calidad';



  entrar(){
    console.log('entrando');
    alert("hola mundo")
  }


}
