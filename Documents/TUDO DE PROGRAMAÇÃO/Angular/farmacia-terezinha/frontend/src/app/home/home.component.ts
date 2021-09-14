import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'
import { Medicines } from '../models/Medicines';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  service!: AuthService;
  medicines!: Medicines[];

  constructor(private authService: AuthService) {
      this.service = authService;
  }

  ngOnInit(): void {
    this.authService.listMedicines().subscribe(dados => this.medicines = dados);
  }

}
