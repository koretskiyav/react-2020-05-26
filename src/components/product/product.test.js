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
  it('should fetch data', () => {
    const fn = jest.fn();
    mount(<Product product={product} fetchData={fn} />);
    expect(fn).toBeCalledWith(product.id);
  });
  it('should increment and decrement amount', () => {
    const component = mount(<Product product={product} />);
    component.find('[data-id="product-increment"]').simulate('click');
    expect(component.find('[data-id="product-amount"]').text()).toBe('1');
    component.find('[data-id="product-decrement"]').simulate('click');
    expect(component.find('[data-id="product-amount"]').text()).toBe('0');
  });
  // todo передать в компонент amount = 2, до клика
  // it('should decrement amount option 2', () => {
  //   const component = mount(<Product product={product} amount={2}/>); // Почему не сработало с передачей изначального значения amount = 2?
  //   component.find('[data-id="product-decrement"]').simulate('click');
  //   expect(component.find('[data-id="product-amount"]').text()).toBe('1');
  // });
  // it('should decrement amount option 2', () => {
  //   const component = mount(<Product product={product}/>);
  //   component.setProps({amount: 2});
  //   component.find('[data-id="product-decrement"]').simulate('click');
  //   expect(component.find('[data-id="product-amount"]').text()).toBe('1');
  // });
});
