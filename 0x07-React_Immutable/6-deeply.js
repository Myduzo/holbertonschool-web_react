import { fromJS } from 'immutable';

export const mergeDeeplyElements = (page1, page2) => {
  return fromJS(page1).mergeDeep(fromJS(page2));
}
