import expect from 'expect';
import { selectCourse, unSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

describe('selectCourse', () => {
  it('test for the selectCourse action', () => {
    const result = { type: SELECT_COURSE, index: 1 };
    expect(selectCourse(1)).toEqual(result);
  })

  it('test for the unSelectCourse action', () => {
    const result = { type: UNSELECT_COURSE, index: 1 };
    expect(unSelectCourse(1)).toEqual(result);
  })
})