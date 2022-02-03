import { Pipe, PipeTransform } from '@angular/core';
import { MediaItemListComponent } from './media-item-list.component';

@Pipe({
    name: 'categoryList'
})
export class CategoryListPipe implements PipeTransform{
    transform(mediaItems: any) {
        const categories :any = [];
        mediaItems.forEach((mediaItem: any) => {
            if (categories.indexOf(mediaItem.category) <= -1){
                categories.push(mediaItem.category);
            }
        });
        return categories;
    }
}