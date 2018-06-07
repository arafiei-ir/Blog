import {Component, Input} from "@angular/core";
import {EntryModule} from "../shared/entry.module";

@Component({
    selector: 'app-entry',
    templateUrl: 'entry.component.html',
    styleUrls: ['entry.component.css']
})

export class EntryComponent {
    @Input()
    entry: EntryModule;

    onCommentAdded(comment: {name: string; comment: string;}){
        this.entry.comments.push(comment);
    }
}