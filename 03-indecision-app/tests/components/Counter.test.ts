import {describe, test, expect} from "vitest";
import {mount} from "@vue/test-utils";
import Counter from "@/components/Counter.vue";

describe('Counter', () => {

  test('should match snapshot', () => {
    const value = 5;
    const wrapper = mount(Counter, {
      propsData: {
        value: value
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('renders the counter value correctly', () => {
    const value = 5;
    const square = value * value;
    const wrapper = mount(Counter, {
      propsData: {
        value: value
      }
    });
    expect(wrapper.find('h3').text()).toContain(`Counter: ${value}`);
    // expect(wrapper.find('[data-testid="squarelabel"]').text()).toContain(`Square: ${square}`);
    const [_ , squarelabel] = wrapper.findAll('h3');
    expect(squarelabel?.text()).toContain(`Square: ${square}`);
  });

  test('increments the counter value', async () => {
    const value = 5;
    let square = 0;
    const wrapper = mount(Counter, {
      propsData: {
        value: value
      }
    });
    const [counterlabel, squerelabel] = wrapper.findAll('h3');
    const btnIncrement = wrapper.find('button');
    await btnIncrement.trigger('click');
    square = (value + 1) * (value + 1);
    expect(counterlabel?.text()).toContain(`Counter: ${value + 1}`);
    expect(squerelabel?.text()).toContain(`Square: ${square}`);
  });

  test('decrements the counter value', async () => {
    const value = 5;
    let square = 0;
    const wrapper = mount(Counter, {
      propsData: {
        value: value
      }
    });
    const [counterlabel, squerelabel] = wrapper.findAll('h3');
    const [_, btnDecrement] = wrapper.findAll('button');
    await btnDecrement?.trigger('click');
    square = (value - 1) * (value - 1);
    expect(counterlabel?.text()).toContain(`Counter: ${value - 1}`);
    expect(squerelabel?.text()).toContain(`Square: ${square}`);
  });

});
