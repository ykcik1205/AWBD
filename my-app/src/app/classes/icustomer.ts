export interface ICustomer {
    Id: string;
    Name: string;
    Email: string;
    Age: number;
    Image: string;
}
export interface ICustomerGroup {
    CustomerTypeId: number;
    CustomerTypeName: string;
    Customers: ICustomer[];
}