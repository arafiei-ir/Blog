import {Component, OnInit} from "@angular/core";
import {EntryService} from "../shared/entry.service";
import {EntryModule} from "../shared/entry.module";

@Component({
    selector: 'app-entry-list',
    templateUrl: 'entry-list.component.html',
    styleUrls: ['entry-list.component.css']
})
export class EntryListComponent implements OnInit{
    entries: EntryModule[];
    constructor(private entryService: EntryService){

    }

    ngOnInit(){

        this.entryService.getEntries()
            .then(entries => this.entries = entries);
    }
}