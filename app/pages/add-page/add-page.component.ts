import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/shared/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.scss']
})
export class AddPageComponent implements OnInit {
  newProductForm!: FormGroup;
  submitted: boolean = false;
  constructor(private form:FormBuilder, private contactService: ServiceService, private router:Router) {

  }

  ngOnInit(): void {
    this.newProductForm = this.form.group({
      id:[this.contactService.contact.id, [Validators.required, Validators.minLength(3)]],
      name: [this.contactService.contact.name, [Validators.required, Validators.minLength(3)]],
      url:[this.contactService.contact.image, [Validators.required, Validators.minLength(3)]],
      price: [this.contactService.contact.price, [Validators.required, Validators.minLength(3)]],
      description: [this.contactService.contact.description,[Validators.required, Validators.minLength(3)] ]
    });

  }

  onSubmit(){
    this.submitted = true;
    if(this.newProductForm.valid){
      const product: any = {
        id: 0,
        name: this.newProductForm.get('name')?.value,
        image: this.newProductForm.get('url')?.value,
        price: this.newProductForm.get('price')?.value,

        description: this.newProductForm.get('description')?.value

      }

      this.contactService.addProduct(product)
      this.router.navigate(['/products']);
      this.newProductForm.reset();
      this.submitted = false
    }

  }

}
