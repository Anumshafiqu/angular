import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name:'uxpipe'
})

export class UxPipe implements PipeTransform {
    transform(value: any) {
        console.log(value)
    }
}