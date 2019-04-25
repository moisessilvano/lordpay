import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Auth } from '../../shared/models/auth.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  submitted: Boolean = false;

  authForm: FormGroup;
  auth = new Auth();

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    console.log('|----- LOGIN PAGE -----|');
    this.iniciarFormulario();
  }

  iniciarFormulario() {
    console.log('-- INICIA FORMULÁRIO --');
    this.authForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log('-- FORMULÁRIO ENVIADO --');
    this.submitted = true;

    if (this.authForm.invalid) {
      console.log('FORMULÁRIO INVÁLIDO');

    } else {
      console.log('FORMULÁRIO VÁLIDO');

      this.authService.validarAuth(this.authForm.value)
        .subscribe(res => {
          console.log('USUÁRIO AUTENTIFICADO COM SUCESSO');

          // this.toastr.success('Conectado com sucesso!');
          this.router.navigate(['/dashboard']);
          return res;
        }, err => {
          console.log('ERRO AO AUTENTIFICAR USUÁRIO');
          console.log(err);
          this.toastr.error('Erro ao efetuar login!');
          return err;
        });
    }
  }

}
