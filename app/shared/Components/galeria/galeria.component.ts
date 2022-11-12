import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/shared/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {
  @Input()personajes: any= [];

 products:any = [];

  constructor(private productsService: ServiceService, private router: Router) { }

  edit(id: any) {
    this.productsService.getProductById(id).subscribe((res: any) => {
      this.productsService.contact = res;
      this.router.navigate(['/add']);
      console.log(res)
    });
  }

  deletet(id: any) {
    this.productsService.deleteProduct(id).subscribe((res: any) => {
      this.productsService.contact = res;
      console.log(res)

      console.log(id)
    });
  }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((res:any) => {
      this.products = res;

  })

}
}
