import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/shared/service.service';
@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  products:any = [];

  constructor(private productsService: ServiceService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((res:any) => {
      this.products = res;
      console.log(this.products)
  })

}
}
