import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pedido } from '../../shared/models/pedido.model';
import { PedidoService } from '../../shared/services/pedido.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-criar-pedido-page',
  templateUrl: './criar-pedido-page.component.html',
  styleUrls: ['./criar-pedido-page.component.scss']
})
export class CriarPedidoPageComponent implements OnInit {

  pedidoForm: FormGroup;
  pedido = new Pedido();
  pedidoId: string;
  private sub: any;

  submitted = false;

  constructor(
    private pedidoService: PedidoService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.iniciarFormulario();

    // OBTEM OS PARAMETROS ESTIPULADOS NA ROTA
    this.sub = this.route.params.subscribe(params => {
      console.log('-- OBTEM pedidoID');
      this.pedidoId = params['id'];
      console.log(this.pedidoId);
    });

    if (this.pedidoId) {
      this.getPedido();
    }
  }

  iniciarFormulario() {
    this.pedidoForm = this.formBuilder.group({
      cliente: this.formBuilder.group({
        nome: [this.pedido.cliente.nome, Validators.required],
        telefone: [this.pedido.cliente.telefone],
        cpf: [this.pedido.cliente.cpf],
        email: [this.pedido.cliente.email]
      }),
      endereco: this.formBuilder.group({
        cep: [this.pedido.endereco.cep, Validators.required],
        logradouro: [this.pedido.endereco.logradouro, Validators.required],
        numero: [this.pedido.endereco.numero, Validators.required],
        complemento: [this.pedido.endereco.complemento],
        bairro: [this.pedido.endereco.bairro, Validators.required],
        cidade: [this.pedido.endereco.cidade, Validators.required],
        estado: [this.pedido.endereco.estado, Validators.required]
      }),
      obs: [this.pedido.obs, Validators.required],
      taxaEntrega: [this.pedido.taxaEntrega, Validators.required],
      valorTotal: [this.pedido.valorTotal, Validators.required]
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

      if (this.pedidoId) {
        this.pedidoService.updatePedido(this.pedidoId, this.pedidoForm.value)
          .subscribe(res => {
            console.log('PEDIDO ATUALIZADO COM SUCESSO!');
            this.toastr.success('PEDIDO ATUALIZADO COM SUCESSO!');            
            return res;
          }, err => {
            console.log('ERRO AO ATUALIZAR PEDIDO');
            console.log(err);
            this.toastr.error('ERRO AO ATUALIZAR PEDIDO!');
            return err;
          });
      } else {
        this.pedidoService.createPedido(this.pedidoForm.value)
          .subscribe(res => {
            console.log('PEDIDO EFETUADO COM SUCESSO');
            this.toastr.success('PEDIDO INSERIDO COM SUCESSO!');
            return res;
          }, err => {
            console.log('ERRO AO EFETUAR PEDIDO');
            console.log(err);
            this.toastr.error('ERRO AO EFETUAR PEDIDO!');
            return err;
          });
      }


    }
  }

  getPedido() {
    console.log('-- GET PEDIDO --');
    return this.pedidoService.getPedido(this.pedidoId)
      .subscribe(res => {
        console.log(res);
        this.pedido = res;
        this.iniciarFormulario();
        return res;
      },err => {
        console.log(err);
        return err;
      });
  }

}
