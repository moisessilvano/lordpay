import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.authService.checkAuth() === true) {
      console.log('-- USUÁRIO CONECTADO --');
      this.router.navigate(['/dashboard']);
    } else {
      console.log('-- USUÁRIO NÃO CONECTADO --');
      this.router.navigate(['/login']);
    }
  }

}
