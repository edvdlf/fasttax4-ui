import { MessageService } from 'primeng/api';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FuncionalidadesService } from 'src/app/services/obrigacoes/funcionalidades/funcionalidades.service';
import { Subject, takeUntil } from 'rxjs';
import { PhotoService } from 'src/app/services/carousel/photo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  //images: any[] | undefined;
  images: any[] = [];

  responsiveOptions: any[] = [
     
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];
  constructor(
    private messageService:MessageService,
    private funionalidadesService: FuncionalidadesService,
    private photoService: PhotoService,

    ){}
  ngOnInit(): void {
    this.photoService.getImages().then((images) => {
      this.images = images;
  });
  }

    sideBarOpen = true;

    sideBarToggler() {
      this.sideBarOpen = !this.sideBarOpen;
    }

    getFuncionalidades(): void {
      this.funionalidadesService

    }

    ngOnDestroy(): void {
      this.destroy$.next();
      this.destroy$.complete();
    }



}
