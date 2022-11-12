import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url: string = "https://my-json-server.typicode.com/franlindebl/shopeame-api-v2/products";
  contact: any  = {
    id: 0,
    name: "",
    price: "",
    image: "",
    description: "adsda"
  }
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get(this.url)

  }

  addProduct(newproduct: any) {
    this.http.post(this.url, newproduct).subscribe()
  }

  getProductById(id: string){
    return this.http.get(this.url + '/' + id);
  }

  editProduct(newproduct: any){
    return this.http.put(this.url + '/' + newproduct.id, newproduct);

  }

  deleteProduct(id: string){
    return this.http.delete(this.url+ '/' + id);

  }

  /*addContact(contact: ContactModel): void {
    contact.id = this.contactList.length > 0 ? this.contactList[this.contactList.length - 1].id + 1 : 1;
    this.contactList = [...this.contactList, contact];
  }*/
}
