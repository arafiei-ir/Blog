import {Injectable} from "@angular/core";
import {EntryModule} from "./entry.module";
import {Http} from "@angular/http";
import {toPromise} from "rxjs/operator/toPromise";

@Injectable()
export class EntryService {

    constructor(private http: Http){


    }

    addComment(entryId: number, comment: {name: string, comment: string;}){
        return this.http.post(`/app/entries/${entryId}/comments`, comment).toPromise();
    }
    getEntries(): Promise<EntryModule[]>{
        return this.http.get('/app/entries')
            .toPromise()
            .then(response => response.json().data as EntryModule[]);
    }

}
