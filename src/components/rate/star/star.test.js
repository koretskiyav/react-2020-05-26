import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Star from './star';

Enzyme.configure({ adapter: new Adapter() });

describe('Star', () => {
  it('should render', () => {
    const component = mount(<Star />);
    expect(component.find('[data-id="star"]').length).toBe(1);
  });
  // it('should star is yellow color', () => {
  //     const component = mount(<Star checked={true}/>);
  //     let containerStyle = component.find('[data-id="star"]').get(0).props.style;
  //     expect(component.find('[data-id="star"]').get(0).props.style).toHaveProperty(
  // 'fill',
  // 'var(--yellow)',);
  // });
});
