import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Shop } from 'src/app/model/shop';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';
import { ShopService } from 'src/app/service/shop.service';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss']
})
export class ShopsComponent implements OnInit {

  tableColumns: ITableColumn[] = this.config.shopColumns;
  list$: Observable<Shop[]> = this.shopService.getAll();

  constructor(
    private config: ConfigService,
    private shopService: ShopService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSelectOne(shop: Shop): void {
    this.router.navigate(['/', 'shops', 'edit', shop._id]);
  }

  onDeleteOne(shop: Shop): void {
    this.shopService.delete(shop._id).subscribe(
      () => this.list$ = this.shopService.getAll()
      )
  }

}
