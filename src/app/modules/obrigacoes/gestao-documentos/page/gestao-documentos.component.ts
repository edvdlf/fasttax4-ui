import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Subject } from 'rxjs';
import { GestaoDocumentosResponse } from 'src/app/models/interfaces/gestao-documentos/response/gestaoDocumentosResponse';
import { GestaoDocumentosService } from 'src/app/services/obrigacoes/gestao-documentos/gestao-documentos.service';

@Component({
  selector: 'app-gestao-documentos',
  templateUrl: './gestao-documentos.component.html',
  styleUrls: ['./gestao-documentos.component.scss']
})
export class GestaoDocumentosComponent implements OnInit, OnDestroy {
  sideBarOpen = true;
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
   }

   private destroy$ = new Subject<void>();
   public gestaoDocumentosDatas: Array<GestaoDocumentosResponse> = [];


   constructor(
     private gestaoDocumentosService: GestaoDocumentosService,
     private messageService: MessageService,

   ) {}

   ngOnInit(): void {
     this.getDocumentosDatas();
   }
   ngOnDestroy(): void {
     this.destroy$.next();
     this.destroy$.complete();
   }

   getDocumentosDatas(): void {
     this.gestaoDocumentosService
       .getAllDocumentos()
              .subscribe({
         next: (response) => {
           if (response.length > 0) {
             console.log(response)
             this.gestaoDocumentosDatas = response;

           }
         },
         error: (err) => {
           console.log(err);
           this.messageService.add({
             severity: 'error',
             summary: 'Erro',
             detail: 'Não foi possível buscar Documentos GED!',
             life: 2500,
           });
         },
       });
   }


}
