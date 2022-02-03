import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators'
import { throwError } from "rxjs";
@Injectable({
   providedIn: 'root' 
})
export class MediaItemService {
  constructor( private http: HttpClient){}
  
      get(medium:any){
        const getOptions = { 
          params: { medium }
         };
          return this.http.get<MediaItemResponse>('mediaitems', getOptions)
          .pipe(
            map((response: MediaItemResponse) => {
              return response.mediaItems;
            
            }), catchError(this.handleError)
            );
      }

      add(mediaItem :any){
        return this.http.post('mediaitems', mediaItem)
        .pipe(catchError(this.handleError));
      }

      delete(mediaItem :any){
          return this.http.delete(`mediaitems/${mediaItem.id}`)
          .pipe(catchError(this.handleError));
      }
      private handleError(error: HttpErrorResponse) {
        console.log(error.message);
        return throwError('A Data Error Occured Please Try again');
      }
}

export interface MediaItem {
  id:number;
  name: string;
  medium: string;
  category: string;
  year: number;
  watchedOn: number;
  favorite:boolean;

}
interface MediaItemResponse{
  mediaItems: MediaItem[];
}