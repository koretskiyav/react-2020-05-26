import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { restaurants } from '../../fixtures';

import Reviews from './reviews';
const reviews = restaurants[0].reviews;

Enzyme.configure({ adapter: new Adapter() });

describe('Review', () => {
  it('should render reviews', () => {
    const component = mount(<Reviews reviews={reviews} />);
    expect(component.find('[data-id="reviews"]').length).toBe(1);
  });
  it('should render all reviews', () => {
    const component = mount(<Reviews reviews={reviews} />);
    expect(component.find('[data-id="review"]').length).toBe(reviews.length);
  });
  it('should render users name', () => {
    const component = mount(<Reviews reviews={reviews} />);
    const firstReview = component.find('[data-id="review"]').at(0);
    expect(firstReview.find('[data-id="review-user-name"]').length).toBe(1);
  });
  it('should content needed users name', () => {
    const component = mount(<Reviews reviews={reviews} />);
    const firstReview = component.find('[data-id="review"]').at(0);
    expect(firstReview.find('[data-id="review-user-name"]').text()).toBe(
      reviews[0].user
    );
  });
  it('should render users comment', () => {
    const component = mount(<Reviews reviews={reviews} />);
    const firstReview = component.find('[data-id="review"]').at(0);
    expect(firstReview.find('[data-id="review-user-comment"]').length).toBe(1);
  });
  it('should content needed users name', () => {
    const component = mount(<Reviews reviews={reviews} />);
    const firstReview = component.find('[data-id="review"]').at(0);
    expect(firstReview.find('[data-id="review-user-comment"]').text()).toBe(
      reviews[0].text
    );
  });
  it('should render users rate', () => {
    const component = mount(<Reviews reviews={reviews} />);
    const firstReview = component.find('[data-id="review"]').at(0);
    expect(firstReview.find('[data-id="review-user-rate"]').length).toBe(1);
  });
  it('should all stars by users rate', () => {
    const component = mount(<Reviews reviews={reviews} />);
    const firstReview = component.find('[data-id="review"]').at(0);
    const rate = firstReview.find('[data-id="review-user-rate"]');
    expect(rate.find('[data-attr="fill"]').length).toBe(reviews[0].rating);
  });
});
