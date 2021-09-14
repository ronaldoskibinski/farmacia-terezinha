import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

  signupForm!: FormGroup;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.createFormGroup();
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(2)]),
      phone: new FormControl("", [Validators.required, Validators.minLength(2)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      address: new FormControl("", [Validators.required, Validators.minLength(2)]),
      password: new FormControl("", [Validators.required, Validators.minLength(7)])
    });
  }

  signup(): void {
    if(this.authService.signup(this.signupForm.value).subscribe((msg) => console.log(msg))) {

      document.getElementById('congratsMessage')!.style.display = "block";
      document.getElementById('backMsg')!.style.display = "block";
      
    }       
  }

}
