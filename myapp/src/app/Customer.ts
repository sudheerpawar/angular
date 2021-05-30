import { Address } from "./Address";
  
export class Customer {
    customerId: number=0;
    customerName: string='';
    customerPassword: string='';
    mobileNo: number=0;
    email: string='';
    address: Address = new Address;
    role: string='';
    
}