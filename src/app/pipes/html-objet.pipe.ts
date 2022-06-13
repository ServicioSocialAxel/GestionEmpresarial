import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'sanitizedHtml'
})
export class HtmlObjetPipe implements PipeTransform {
  constructor (private sanitizer: DomSanitizer) {}
  transform(info:any) {
    return this.sanitizer.bypassSecurityTrustHtml(info);
  }

}
