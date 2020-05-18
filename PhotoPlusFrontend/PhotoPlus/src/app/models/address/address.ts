import { Link } from '../link/link';

export class Address {

    street: string;
    number: string;
    zipCode: string;
    city: string;
    country: string;
    userCode: string;
    code?: string;
    links?: Link[];
}