import { Injectable } from '@angular/core';
import { Media } from './media.type';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  private todaysMedia: Media;
  private mediaList: Media[];

  constructor() { }


}
