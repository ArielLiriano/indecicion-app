import MessagesBox from '@/components/chat/MessagesBox.vue';
import { mount } from '@vue/test-utils';

describe('<MessagesBox/>', () => {
  const wrapper = mount(MessagesBox);
  test('renders input and button elements correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.find('input[type="text"]').exists()).toBe(true);
    expect(wrapper.find('button').exists()).toBe(true);
    expect(wrapper.find('button svg').exists()).toBe(true);
  });

  test('emits sendMessage event when button is clicked with message value', async () => {
    const message = 'Hola mundo';
    await wrapper.find('input[type="text"]').setValue(message);
    await wrapper.find('button').trigger('click');
    expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message]);

    expect((wrapper.vm as any).message).toBe('');
  });

  test('emits sendMessage event when keypress.enter is triggered', async () => {
    const message = 'Hola mundo';
    const input = wrapper.find('input');
    await input.setValue(message);
    await input.trigger('keypress.enter');
    expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message]);
  });

  test('emits sendMessage event when keypress.enter is triggered', async () => {
    const wrapper = mount(MessagesBox);
    const input = wrapper.find('input');
    await input.trigger('keypress.enter');
    await wrapper.find('button').trigger('click');
    expect(wrapper.emitted('sendMessage')).toBeFalsy();
  });
});
