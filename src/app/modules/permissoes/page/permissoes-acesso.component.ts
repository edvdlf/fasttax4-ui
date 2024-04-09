import { ProductService } from './../../../services/fluxo/fluxo-steps.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ConfirmationService, MessageService, TreeNode } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-permissoes-acesso',
  templateUrl: './permissoes-acesso.component.html',
  styleUrls: ['./permissoes-acesso.component.scss']
})
export class PermissoesAcessoComponent implements OnInit, OnDestroy {

  private readonly destroy$: Subject<void> = new Subject();
  //public usuariosDatas: Array<UsuariosResponse> = [];
  private ref!: DynamicDialogRef;




  sideBarOpen = true;
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
   }

   constructor(
    private productService: ProductService,
    private messageService: MessageService,
    private dialogService: DialogService,
    private confirmationService: ConfirmationService,

   ){}

   ngOnInit(): void {
    //this.productService.getTreeTableNodes().then((files) => (this.files = files));

    //this.cols = [
        //{ field: 'name', header: 'Name' },
        //{ field: 'size', header: 'Size' },
        //{ field: 'type', header: 'Type' }
    //];

  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
