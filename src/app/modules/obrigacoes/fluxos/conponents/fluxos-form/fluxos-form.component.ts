
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MenuItem, MessageService } from 'primeng/api';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';
import { FluxoStepsService } from 'src/app/services/fluxo/fluxo-steps.service';
import { FluxoService } from 'src/app/services/fluxo/fluxo.service';


@Component({
  selector: 'app-fluxos-form',
  templateUrl: './fluxos-form.component.html',
  styleUrls: ['./fluxos-form.component.scss']
})
export class FluxosFormComponent implements OnInit, OnDestroy {



  constructor(

    public fluxoService: FluxoService,
    public ref: DynamicDialogConfig,
    private formBuilder: FormBuilder,
    private messageService: MessageService,


    ) {}

    public adicionarFluxoForm = this.formBuilder.group({
      periodo:[''],
      lista:['']

    })

    handleSubmitFluxo():void{

    }

  ngOnInit() {
  }
  ngOnDestroy() {
  }

}
