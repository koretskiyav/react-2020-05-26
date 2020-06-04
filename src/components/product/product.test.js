import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Product from './product';

import { restaurants } from '../../fixtures';

const product = restaurants[0].menu[0];

Enzyme.configure({ adapter: new Adapter() });

describe('Product', () => {
  it('should render', () => {
    const component = mount(<Product product={product} />);
    expect(component.find('[data-id="product"]').length).toBe(1);
  });
  it('should init with amount 0', () => {
    const component = mount(<Product product={product} />);
    expect(component.find('[data-id="product-amount"]').text()).toBe('0');
  });
  it('should increment amount', () => {
    const component = mount(<Product product={product} />);
    component.find('[data-id="product-increment"]').simulate('click');
    expect(component.find('[data-id="product-amount"]').text()).toBe('1');
  });
  it('should not decrement when amount === 0', () => {
    const component = mount(<Product product={product} />);
    component.find('[data-id="product-decrement"]').simulate('click');
    expect(component.find('[data-id="product-amount"]').text()).toBe('0');
  });
  it('should decrement amount', () => {
    const component = mount(<Product product={product} />);
    component.find('[data-id="product-increment"]').simulate('click');
    component.find('[data-id="product-increment"]').simulate('click');
    component.find('[data-id="product-decrement"]').simulate('click');
    expect(component.find('[data-id="product-amount"]').text()).toBe('1');
  });
  it('should fetch data', () => {
    const fn = jest.fn();
    mount(<Product product={product} fetchData={fn} />);
    expect(fn).toBeCalledWith(product.id);
  });
});
