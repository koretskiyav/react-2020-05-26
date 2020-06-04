import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Review from './review';

// const {user, text, rating} = restaurants[0].reviews;

Enzyme.configure({ adapter: new Adapter() });

describe('Review', () => {
  it('should render', () => {
    const component = mount(<Review />);
    expect(component.find('[data-id="review"]').length).toBe(1);
  });
  it('should user === Antony', () => {
    const component = mount(<Review user={'Antony'} />);
    expect(component.find('[data-id="review-user"]').text()).toBe('Antony');
  });
  it('should review without user name = Anonymous', () => {
    const component = mount(<Review />);
    expect(component.find('[data-id="review-user"]').text()).toBe('Anonymous');
  });
  it('should review text = testText', () => {
    const component = mount(<Review text="testText" />);
    expect(component.find('[data-id="review-text"]').text()).toBe('testText');
  });
});
