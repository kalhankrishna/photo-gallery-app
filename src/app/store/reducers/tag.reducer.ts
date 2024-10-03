import { createReducer, on } from '@ngrx/store';
import { Tag } from '../../models/tag.model';
import * as TagActions from '../actions/tag.actions';

export interface TagState {
  tags: Tag[];
}

export const initialState: TagState = {
  tags: [],
};

export const tagReducer = createReducer(
  initialState,
  on(TagActions.loadTagsSuccess, (state, { tags }) => ({ ...state, tags })),
  on(TagActions.addTag, (state, { tag }) => ({
    ...state,
    tags: [...state.tags, tag],
  }))
);
