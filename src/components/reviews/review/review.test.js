import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Review from './review';

import { restaurants } from '../../../fixtures';

const review = restaurants[0].reviews[0];

Enzyme.configure({ adapter: new Adapter() });

describe('Review', () => {
  const component = mount(<Review key={review.id} {...review} />);
  it('should render', () => {
    expect(component.find('[data-id="review"]').length).toBe(1);
  });
  it('should render Rate', () => {
    expect(component.find('Rate').length).toBe(1);
  });
});
