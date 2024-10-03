import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TagState } from '../reducers/tag.reducer';

export const selectTagState = createFeatureSelector<TagState>('tag');

export const selectAllTags = createSelector(
  selectTagState,
  (state: TagState) => state.tags
);
