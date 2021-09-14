
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  service!: AuthService;

  constructor(private authService: AuthService) {
    this.service = authService;
  }

  ngOnInit(): void {
    this.loginForm = this.createFormGroup();
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(7)])
    });
  }

  login(): void {
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(error => {
      this.arm() });
  }

  arm() {
    document.getElementById('congratsMessage')!.style.display = "block";
    document.getElementById('backMsg')!.style.display = "block";  
  }

  disarm() {
    document.getElementById('congratsMessage')!.style.display = "none";
    document.getElementById('backMsg')!.style.display = "none";
  }

}
