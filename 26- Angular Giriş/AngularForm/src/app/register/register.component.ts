import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  registerForm = new FormGroup({
    email:new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    ad: new FormControl(null, [Validators.required]),
    soyad: new FormControl(null, [Validators.required]),
    adres: new FormControl(null, [Validators.required]),
    telefon: new FormControl(null, [Validators.required]),
    passwordtekrar: new FormControl(null, [Validators.required, Validators.minLength(8)])
  });
  constructor(){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
