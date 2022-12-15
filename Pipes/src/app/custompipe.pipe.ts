import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {

  transform(Name: string,gender:string): string {
    if (gender=='male')
    {
    return "Mr. "+ Name;
    }
  else
    {
    return "Mr. "+ Name;
    }

}
}