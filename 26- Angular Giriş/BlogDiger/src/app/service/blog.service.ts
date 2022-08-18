import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class BlogService extends BaseService {
  constructor(private base: BaseService) {
    super(base.http);
  }

  public getPosts() {
    return this.base.getReq('/posts');
  }
  public putPost(id: number, data: any) {
    return this.base.putReq('/posts/' + id, data);
  }

  public getPost(id: string) {
    return this.base.getReq('/posts/'+id);
  }

}
