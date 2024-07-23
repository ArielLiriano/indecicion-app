import { mount } from '@vue/test-utils';
import MyCounter from '@/components/MyCounter.vue';

describe('<MyCounter/>', () => {
  test('should match snapshot', () => {
    const wrapper = mount(MyCounter, {
      props: {
        value: 5,
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('renders the counter value correctly', () => {
    const value = 5;
    const wrapper = mount(MyCounter, {
      props: {
        value: value,
      },
    });

    const [counterLabel, SquareLabel] = wrapper.findAll('h3');
    expect(counterLabel.text()).contain(`Counter: ${value}`);
    expect(SquareLabel.text()).contain(`Square: ${value * value}`);
    // expect(wrapper.find('h3').text()).toContain(`Counter: ${value}`);
    // expect(wrapper.find('[data-testid="square-label"]').text()).toContain(
    //   `Square: ${value * value}`,
    // );
    // console.log(wrapper.html());
  });

  test('increments the counter when +1 buttton is clicked', async () => {
    const value = 5;
    const wrapper = mount(MyCounter, {
      props: {
        value: value,
      },
    });

    const btnIncrement = wrapper.find('button');
    await btnIncrement.trigger('click');

    const [counterLabel, SquareLabel] = wrapper.findAll('h3');
    expect(counterLabel.text()).contain(`Counter: ${value + 1}`);
    expect(SquareLabel.text()).contain(`Square: ${(value + 1) * (value + 1)}`);
  });

  test('decrements the counter when -1 button is clicked twice', async () => {
    const value = 5;
    const wrapper = mount(MyCounter, {
      props: {
        value: value,
      },
    });

    const btnDecrement = wrapper.find('[data-testid="btnDecrement"]');
    for (let index = 1; index <= 2; index++) {
      await btnDecrement.trigger('click');
    }

    const [counterLabel, SquareLabel] = wrapper.findAll('h3');
    expect(counterLabel.text()).contain(`Counter: ${value - 2}`);
    expect(SquareLabel.text()).contain(`Square: ${(value - 2) * (value - 2)}`);
  });
});
