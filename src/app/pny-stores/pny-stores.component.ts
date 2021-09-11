import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ViewChildren,
  QueryList,
  ChangeDetectorRef,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Observable, of } from 'rxjs';
import { PnyStoresService } from './pny-stores.service';
import { IPnyStore } from './pny-stores.model';

@Component({
  selector: 'app-pny-stores',
  templateUrl: './pny-stores.component.html',
  styleUrls: ['./pny-stores.component.scss'],
  providers: [PnyStoresService],
})
export class PnyStoresComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('storeView') storeView;
  obs: Observable<IPnyStore[]>;
  dataSource: MatTableDataSource<IPnyStore>;
  breakpoint: number;

  constructor(
    protected changeDetectorRef: ChangeDetectorRef,
    protected pnyStoresService: PnyStoresService
  ) {}

  ngOnInit(): void {
    this.breakpoint = window.innerWidth <= 400 ? 1 : 5;
    this.pnyStoresService.getStores().subscribe((stores) => {
      this.dataSource = new MatTableDataSource<IPnyStore>(stores);
      this.paginator._intl.itemsPerPageLabel = 'Suppliers per page';
      this.dataSource.paginator = this.paginator;
      this.obs = this.dataSource.connect();
    });
  }

  ngOnDestroy(): void {
    if (this.dataSource) {
      this.dataSource.disconnect();
    }
  }

  ngAfterViewInit() {
    this.storeView.value = 'pny-grid';
    this.changeDetectorRef.detectChanges();
  }

  onResize(event): void {
    this.breakpoint = window.innerWidth <= 400 ? 1 : 5;
  }
}
