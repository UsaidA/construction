import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver  } from '@angular/core';
import axios from 'axios';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { data } from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('')
  })

  constructor(public router :Router, private vcr:ViewContainerRef, private cfr: ComponentFactoryResolver) { }

  loginText = "";
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  sendLoginRequest(email: any, password: any){}
}
