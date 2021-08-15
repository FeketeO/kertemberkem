import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap} from 'rxjs/operators';
import { Shop } from 'src/app/model/shop';
import { ShopService } from 'src/app/service/shop.service';

@Component({
  selector: 'app-shop-editor',
  templateUrl: './shop-editor.component.html',
  styleUrls: ['./shop-editor.component.scss']
})
export class ShopEditorComponent implements OnInit {

  updating: boolean = false;
  shop: Shop = new Shop();

  shop$: Observable<Shop> = this.ar.params.pipe(
    switchMap( params => this.shopService.get(params.id) )
  );

  constructor(
    private shopService: ShopService,
    private ar: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm, shop: Shop): void {
    if (!shop._id) {
      this.shopService.create(shop).subscribe(
        () => this.shopService.getAll()
      );
    }
    else {
      this.shopService.update(shop).subscribe(
        () => this.shopService.getAll()
      );
    }
    this.router.navigate(['/', 'shops'])
  }


}
