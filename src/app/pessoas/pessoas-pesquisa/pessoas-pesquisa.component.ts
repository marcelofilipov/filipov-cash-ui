import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent {

  pessoas = [
    { nome: 'Marcelo Filipov', cidade: 'Santo André', estado: 'SP', ativo: true },
    { nome: 'Rosana Altruda Filipov', cidade: 'São Paulo', estado: 'SP', ativo: false },
    { nome: 'Luan Gustavo Altruda Filipov', cidade: 'São Bernardo do Campo', estado: 'SP', ativo: true },
    { nome: 'Carla Souza', cidade: 'Mauá', estado: 'SP', ativo: true },
    { nome: 'Vilmar Andrada', cidade: 'Rio de Janeiro', estado: 'RJ', ativo: false },
    { nome: 'José Alves', cidade: 'Curitiba', estado: 'PR', ativo: false },
    { nome: 'Miriam Loro', cidade: 'Bom Jesus dos Perdões', estado: 'SP', ativo: true }
  ];

}
