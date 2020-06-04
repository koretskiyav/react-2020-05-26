import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Reviews from './reviews';
import { restaurants } from '../../fixtures';

const reviews = restaurants[0].reviews;
// const customReviews = [
//     {id: 1},
//     {id: 2},
//     {id: 3},
// ];

Enzyme.configure({ adapter: new Adapter() });

describe('Reviews', () => {
  it('should render', () => {
    const component = mount(<Reviews reviews={reviews} />);
    expect(component.find('[data-id="reviews"]').length).toBe(1);
  });
  // it('should review without user name = Anonymous', () => {
  //     const component = mount(<Review reviews={customReviews}/>);
  //     expect(component.find('[data-id="review-map"]').map((node) => node.id)).toEqual([1, 2, 3])
  // });
});
