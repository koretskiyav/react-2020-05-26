import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Review from '../reviews/review';
import { restaurants } from '../../fixtures';
Enzyme.configure({ adapter: new Adapter() });

const reviewWithUsername = restaurants[0].reviews[0];
const username = reviewWithUsername.user;
const reviewWithoutUsername = { ...restaurants[0].reviews[0], user: undefined };

describe('Product', () => {
  it('should render username', () => {
    const component = mount(<Review {...reviewWithUsername} />);
    expect(component.find('[data-id="review-username"]').text()).toBe(username);
  });
  it('should render Anonymous', () => {
    const component = mount(<Review {...reviewWithoutUsername} />);
    expect(component.find('[data-id="review-username"]').text()).toBe(
      'Anonymous'
    );
  });
});
