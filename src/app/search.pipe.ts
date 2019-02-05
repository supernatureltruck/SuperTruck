import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value) return [];
    if(!args) return value;
    let filtre = value.filter(liste => liste.values.name.toLowerCase().includes(args.toLowerCase()));
    let filtre2 = value.filter(liste => liste.values.categorie.toLowerCase().includes(args.toLowerCase()));
    return filtre2;
  }

}
