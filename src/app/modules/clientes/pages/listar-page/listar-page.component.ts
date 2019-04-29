import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../shared/models/cliente.model';
import { ClienteService } from '../../shared/services/cliente.service';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-page',
  templateUrl: './listar-page.component.html',
  styleUrls: ['./listar-page.component.scss']
})
export class ListarPageComponent implements OnInit {

  clientes: Cliente[];

  displayedColumns: string[] = ['nome', 'cpf', 'telefone', 'email', 'opcoes'];
  dataSource = new MatTableDataSource(this.clientes);

  constructor(
    private clienteService: ClienteService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getClientes();
  }

  getClientes() {
    console.log('-- OBTEM OS CLIENTES --');
    return this.clienteService.getClientes()
      .subscribe(res => {
        this.clientes = res;
        console.log(this.clientes);
        this.dataSource = new MatTableDataSource(this.clientes);
        return res;
      }, err => {
        console.log(err);
        return err;
      });
  }

  editarCliente(clienteId: string) {
    this.router.navigate(['dashboard/clientes/editar', clienteId]);
  }

}
