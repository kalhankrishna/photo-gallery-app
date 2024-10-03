import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as TagActions from '../../store/actions/tag.actions';
import { Tag } from '../../models/tag.model';

@Injectable({
  providedIn: 'root',
})
export class TagService {
  constructor(private store: Store) {}

  loadTags() {
    this.store.dispatch(TagActions.loadTags());
  }

  addTag(tag: Tag) {
    this.store.dispatch(TagActions.addTag({ tag }));
  }
}
