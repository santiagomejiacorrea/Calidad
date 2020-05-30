import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  entrar(){

    console.log("bienbenido");

    let x= 10;

    for (let index = 1;index <= x;index++){

      console.log(index);

    }
    
  }

}
