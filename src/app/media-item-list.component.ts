import { Component, OnInit } from '@angular/core';
import { MediaItemService , MediaItem } from './media-item.service';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'mw-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent implements OnInit{

  mediaItems: MediaItem[] | any;
  medium='';
  constructor(private mediaItemService: MediaItemService,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit() {

  this.activatedRoute.paramMap
  .subscribe(paramMap => {
    let medium = paramMap.get('medium') as string;
    if(medium === 'all'){
      medium = '';
    }
    this.getMediaItems(medium);
  });
      
  }
  onMediaItemDelete(mediaItem: any) {
    this.mediaItemService.delete(mediaItem).subscribe(() =>
    this.getMediaItems(this.medium));
  }

  getMediaItems(medium:string){
    this.medium = medium;
    this.mediaItemService.get(medium).subscribe(mediaItmes => this.mediaItems = mediaItmes);
  }

}
