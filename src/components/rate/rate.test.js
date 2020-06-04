import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Rate from './rate';

import { restaurants } from '../../fixtures';

const value = restaurants[0].reviews[1].rating;

Enzyme.configure({ adapter: new Adapter() });

describe('Rate', () => {
  it('should render', () => {
    const component = mount(<Rate value={value} />);
    expect(component.find('[data-id="rate"]').length).toBe(1);
  });
});
