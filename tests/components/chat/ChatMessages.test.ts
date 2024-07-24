import ChatMessages from '@/components/chat/ChatMessages.vue';
import type { ChatMessage } from '@/interfaces/Chat-messages.interfaces';
import { mount } from '@vue/test-utils';

const messages: ChatMessage[] = [
  {
    id: 1,
    message: 'Hola mundo',
    itsMine: true,
  },
];

describe('<ChatMessages/>', () => {
  test('renders chat messages correctly', () => {
    const wrapper = mount(ChatMessages, {
      props: {
        messages: [],
      },
    });
  });
});
