import { Pipe, PipeTransform } from "@angular/core";
import { Contact } from "../models/contact";

export @Pipe({ name: 'contactName', standalone: true })
class ContactNamePipe implements PipeTransform {
    transform(value: Contact) : string {
        return `${value.firstName} ${value.surname}`;
    }
}