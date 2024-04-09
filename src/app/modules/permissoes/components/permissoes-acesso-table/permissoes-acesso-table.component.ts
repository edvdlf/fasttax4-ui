import { Component } from '@angular/core';
import { ConfirmationService, MessageService, TreeNode } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Subject } from 'rxjs';
import { ProductService } from 'src/app/services/fluxo/fluxo-steps.service';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-permissoes-acesso-table',
  templateUrl: './permissoes-acesso-table.component.html',
  styleUrls: ['./permissoes-acesso-table.component.scss']
})
export class PermissoesAcessoTableComponent {

  private readonly destroy$: Subject<void> = new Subject();
  files!: TreeNode[];

  selectionKeys = {};

  cols!: Column[];
  constructor(
    private productService: ProductService,
    private messageService: MessageService,
    private dialogService: DialogService,
    private confirmationService: ConfirmationService,

   ){}

   ngOnInit(): void {
    this.productService.getTreeTableNodes().then((files) => (this.files = files));


    this.cols = [
        { field: 'name', header: 'Name' },
        { field: 'size', header: 'Size' },
        { field: 'type', header: 'Type' }
    ];

  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
