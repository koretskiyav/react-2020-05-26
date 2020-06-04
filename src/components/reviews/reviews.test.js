import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Reviews from 'components/reviews';

import { restaurants } from 'fixtures';

const reviews = restaurants[0].reviews;

Enzyme.configure({ adapter: new Adapter() });

describe('Reviews', () => {
  const component = mount(<Reviews reviews={reviews} />);

  it('should render', () => {
    expect(component.find('[data-id="review"]').length).toBe(2);
  });

  it('should be not empty', () => {
    const ReviewTextElems = component.find('[data-id="review-text"]');

    ReviewTextElems.forEach((reviewText) => {
      expect(reviewText.text().length).toBeGreaterThan(0);
    });
  });
});
