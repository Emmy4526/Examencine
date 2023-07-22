import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{


emailFormControl: any;
isLoading: boolean = false;

constructor(private router : Router){}
ngOnInit():void {}

login(){

this.isLoading = true;
  setTimeout(() => {
this.router.navigate(['/blogpage']);
  }, 2000);
  
}
goToRegister(): void {
  this.router.navigate(['/register']);
}
}





