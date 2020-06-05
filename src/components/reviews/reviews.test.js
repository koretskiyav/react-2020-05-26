import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Reviews from './reviews';

import { restaurants } from '../../fixtures';

const reviews = restaurants[0].reviews;

Enzyme.configure({ adapter: new Adapter() });

describe('Reviews', () => {
  it('check total reviews', () =>
    expect(
      mount(<Reviews reviews={reviews} />).find('[data-id="review-item"]')
    ).toHaveLength(reviews.length));
});
