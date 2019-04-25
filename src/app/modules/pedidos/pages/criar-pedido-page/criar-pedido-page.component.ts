import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pedido } from '../../shared/models/pedido.model';
import { PedidoService } from '../../shared/services/pedido.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pedido-page',
  templateUrl: './criar-pedido-page.component.html',
  styleUrls: ['./criar-pedido-page.component.scss']
})
export class CriarPedidoPageComponent implements OnInit {

  pedidoForm: FormGroup;
  pedido = new Pedido();

  submitted = false;

  constructor(
    private pedidoService: PedidoService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.iniciarFormulario();
  }

  iniciarFormulario() {
    this.pedidoForm = this.formBuilder.group({
      cliente: this.formBuilder.group({
        nome: ['', Validators.required],
        telefone: ['', Validators.required],
        cpf: ['', Validators.required],
        email: ['', Validators.required]
      }),
      password: ['']
    });
  }

  onSubmit() {
    console.log('-- FORMULÁRIO ENVIADO --');
    this.submitted = true;

    if (this.pedidoForm.invalid) {
      console.log('FORMULÁRIO INVÁLIDO');

    } else {
      console.log('FORMULÁRIO VÁLIDO');
      console.log(this.pedidoForm.value);

      // this.pedidoService.newPedido(this.pedidoForm.value)
      //   .subscribe(res => {
      //     console.log('USUÁRIO AUTENTIFICADO COM SUCESSO');

      //     // this.toastr.success('Conectado com sucesso!');
      //     this.router.navigate(['/dashboard']);
      //     return res;
      //   }, err => {
      //     console.log('ERRO AO AUTENTIFICAR USUÁRIO');
      //     console.log(err);
      //     this.toastr.error('Erro ao efetuar login!');
      //     return err;
      //   });
    }
  }

}
