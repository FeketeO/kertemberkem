import { Component, OnInit } from '@angular/core';
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
    private shopService: ShopService
  ) { }

  ngOnInit(): void {
  }

}
