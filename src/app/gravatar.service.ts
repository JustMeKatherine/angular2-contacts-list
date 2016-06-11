import {Injectable} from '@angular/core';
declare var md5:(email:string)=>string;

@Injectable()
export class GravatarService {
  static GRAVATAR_URL = 'https://www.gravatar.com/avatar';

  getGravatarUrl(email:string, size:number) {
    if (!email || !size) {
      return '';
    }
    const emailMd5 = md5(email);
    return `${GravatarService.GRAVATAR_URL}/${emailMd5}?s=${size}&d=https%3A%2F%2Ftypeofweb.com%2Fcontent%2Fimages%2F2016%2F05%2Ftypeofweb_logo-04-white-blog.png`
  }
}
