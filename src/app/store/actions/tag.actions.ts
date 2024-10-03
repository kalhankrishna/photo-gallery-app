import { createAction, props } from '@ngrx/store';
import { Tag } from '../../models/tag.model';

export const loadTags = createAction('[Tag] Load Tags');
export const loadTagsSuccess = createAction(
  '[Tag] Load Tags Success',
  props<{ tags: Tag[] }>()
);
export const addTag = createAction('[Tag] Add Tag', props<{ tag: Tag }>());
