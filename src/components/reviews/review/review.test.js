import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Review from './review';

import { restaurants } from '../../../fixtures';

const review = restaurants[0].reviews[0];

Enzyme.configure({ adapter: new Adapter() });

describe('Review', () => {
  it('should be render', () => {
    const component = mount(<Review {...review} />);
    expect(component.find('[data-id="review"]').length).toBe(1);
  });
  it('should be a name', () => {
    const component = mount(<Review {...review} />);
    expect(component.find('[data-id="review-name"]').length).toBe(1);
  });
  it('should be a text', () => {
    const component = mount(<Review {...review} />);
    expect(component.find('[data-id="review-text"]').length).toBe(1);
  });
  it('should be a rating', () => {
    const component = mount(<Review {...review} />);
    expect(component.find('[data-id="review-rating"]').length).toBe(1);
  });
});
