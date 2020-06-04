import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Reviews from './reviews';

import { restaurants } from '../../fixtures';

const reviews = restaurants[0].reviews;

Enzyme.configure({ adapter: new Adapter() });

describe('Reviews', () => {
  const component = mount(<Reviews reviews={reviews} />);
  it('renders properly', () => {
    expect(component.find('[data-id="reviews"]').length).toBe(1);
  });
  it('renders review', () => {
    const amountReview = reviews.length;
    expect(component.find('Review').length).toBe(amountReview);
  });
});
