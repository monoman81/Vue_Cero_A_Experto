import {describe, test, expect} from "vitest";
import {mount} from "@vue/test-utils";
import ChatBubble from "@/components/chat/ChatBubble.vue";


describe("ChatBubble Component", () => {

  test('renders own message correctly', () => {
    const message = 'Hola Mundo';
    const wrapper = mount(ChatBubble, {
      props: {
        message,
        itsMine: true
      }
    });
    expect(wrapper.find('.bg-blue-200').exists()).toBe(true);
    expect(wrapper.find('.bg-blue-200').text()).toContain(message);
    expect(wrapper.find('.bg-gray-300').exists()).toBe(false);
  });

  test('renders received message correctly', () => {
    const message = 'Yes';
    const wrapper = mount(ChatBubble, {
      props: {
        message,
        itsMine: false
      }
    });
    expect(wrapper.find('.bg-gray-300').exists()).toBe(true);
    expect(wrapper.find('.bg-gray-300').text()).toContain(message);
    expect(wrapper.find('img').exists()).toBeFalsy();
    expect(wrapper.find('.bg-blue-200').exists()).toBeFalsy();
  });

  test('renders received message correctly with image', () => {
    const message = 'Yes';
    const imgURL = 'https://media1.giphy.com/media/v1.Y2lkPWFmMzk1ZjIw…aWZzX3JhbmRvbSZjdD1n/Ph7TKM1YuVH729fWdG/giphy.gif'
    const wrapper = mount(ChatBubble, {
      props: {
        message,
        itsMine: false,
        image: imgURL
      }
    });
    expect(wrapper.find('.bg-gray-300').exists()).toBe(true);
    expect(wrapper.find('.bg-gray-300').text()).toContain(message);
    expect(wrapper.find('img').exists()).toBeTruthy();
    expect(wrapper.find('img').attributes('src')).toBe(imgURL);
    expect(wrapper.find('.bg-blue-200').exists()).toBeFalsy();
  });


});
