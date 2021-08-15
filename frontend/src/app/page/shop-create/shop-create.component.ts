import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Shop } from 'src/app/model/shop';
import { ShopService } from 'src/app/service/shop.service';

@Component({
  selector: 'app-shop-create',
  templateUrl: './shop-create.component.html',
  styleUrls: ['./shop-create.component.scss']
})
export class ShopCreateComponent implements OnInit {

  shop: Shop = new Shop();

  constructor(
    private shopService: ShopService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSave(ngForm: NgForm): void {
    this.shopService.create(ngForm.value).subscribe(
      shop => this.router.navigate(['/', 'shops']),
      err => console.error(err)
    );
  }


}
