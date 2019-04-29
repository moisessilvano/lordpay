import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Pedido } from '../../shared/models/pedido.model';
import { Produto } from '../../shared/models/produto.model';
import { Endereco } from '../../shared/models/endereco.model';
import { PedidoService } from '../../shared/services/pedido.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { ViaCepService } from '../../../../shared/services/via-cep.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-criar-pedido-page',
  templateUrl: './criar-pedido-page.component.html',
  styleUrls: ['./criar-pedido-page.component.scss']
})
export class CriarPedidoPageComponent implements OnInit {

  @ViewChild('numero') Numero: any;

  pedidoForm: FormGroup;
  pedido = new Pedido();
  pedidoId: string;
  private sub: any;

  submitted = false;

  produtos: FormArray;

  constructor(
    private pedidoService: PedidoService,
    private viaCepService: ViaCepService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // OBTEM OS PARAMETROS ESTIPULADOS NA ROTA
    this.sub = this.route.params.subscribe(params => {
      console.log('-- OBTEM pedidoID');
      this.pedidoId = params['id'];
      console.log(this.pedidoId);
    });

    const produto = new Produto();
    this.pedido.produtos = [produto];
    if (this.pedidoId) {
      this.getPedido();
    }

    this.iniciarFormulario();    
  }

  iniciarFormulario() {
    console.log('-- INICIAR FORMULÁRIO --');
    this.pedidoForm = this.formBuilder.group({
      obs: [this.pedido.obs, Validators.required],
      subTotal: [this.pedido.subTotal, Validators.required],
      valorDesconto: [this.pedido.valorDesconto, Validators.required],
      taxaEntrega: [this.pedido.taxaEntrega, Validators.required],
      valorTotal: [this.pedido.valorTotal, Validators.required],
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
      produtos: this.formBuilder.array([])
    });

    this.initProdutosFormArray(this.pedido.produtos);
  }

  initProdutosFormArray(produtos: Produto[]) {
    const formArray = this.pedidoForm.get('produtos') as FormArray;
    produtos.map(item => {
      formArray.push(this.createProduto(item));
    });
    this.pedidoForm.setControl('produtos', formArray);
  }

  createProduto(produto: Produto): FormGroup {
    return this.formBuilder.group({
      descricao: [produto.descricao, Validators.required],
      quantidade: [produto.quantidade, Validators.required],
      valorUnitario: [produto.valorUnitario, Validators.required],
      valorDesconto: [produto.valorDesconto, Validators.required],
      valorTotal: [produto.valorTotal, Validators.required]
    });
  }

  addProduto(): void {
    console.log('-- ADICIONAR PRODUTO A LISTAGEM --');
    const produto = new Produto();
    this.produtos = this.pedidoForm.get('produtos') as FormArray;
    this.produtos.push(this.createProduto(produto));
  }

  removeProduto(index) {
    console.log('-- REMOVER PRODUTO DA LISTAGEM --');
    this.produtos.removeAt(index);
  }

  calcValorTotalProduto(index) {
    console.log('-- CALCULAR VALOR TOTAL PRODUTO --');
    
    const controlArray = <FormArray> this.pedidoForm.get('produtos');

    const produto = this.pedidoForm.value.produtos[index];
    const valorUnitario = produto.valorUnitario;
    const quantidade = produto.quantidade;
    const subTotal = valorUnitario * quantidade;
    let valorDesconto = produto.valorDesconto;

    if (valorDesconto > subTotal) {
      valorDesconto = 0;
      controlArray.controls[index].get('valorDesconto').setValue(valorDesconto);
      this.toastr.error('DESCONTO NÃO PODE SER MAIOR QUE O VALOR DO PRODUTO!');
    }

    const valorTotal = (valorUnitario * quantidade) - valorDesconto;
    
    controlArray.controls[index].get('valorTotal').setValue(valorTotal);

    this.calcValorTotalPedido();
  }

  calcValorTotalPedido() {
    console.log('-- CALCULAR VALOR TOTAL PEDIDO --');

    const formValue = this.pedidoForm.value;

    let subTotal = 0;
    const valorDesconto = formValue.valorDesconto;
    const taxaEntrega = formValue.taxaEntrega;
    let valorTotal = 0;

    formValue.produtos.map(produto => {
      subTotal += produto.valorTotal;
    });

    valorTotal = subTotal - valorDesconto;
    valorTotal += taxaEntrega;

    this.pedidoForm.get('subTotal').setValue(subTotal);
    this.pedidoForm.get('valorTotal').setValue(valorTotal);
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

  consultarCep() {
    console.log('-- CONSULTAR CEP --');
      return this.viaCepService.getEndereco(this.pedidoForm.value.endereco.cep)
      .then(res => {
        this.pedido = this.pedidoForm.value;
        this.pedido.endereco.cep = res.cep;
        this.pedido.endereco.logradouro = res.logradouro;
        this.pedido.endereco.bairro = res.bairro;
        this.pedido.endereco.cidade = res.localidade;
        this.pedido.endereco.estado = res.uf;
        console.log(res);

        this.iniciarFormulario();
        this.Numero.setFocus();
      });  
  }

}
