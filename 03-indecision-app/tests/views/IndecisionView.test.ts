import {describe, test, expect} from "vitest";
import {mount} from "@vue/test-utils";
import IndecisionView from "@/views/IndecisionView.vue";
import ChatMessages from "@/components/chat/ChatMessages.vue";
import MessageBox from "@/components/chat/MessageBox.vue";

const mockChatMessages = {
  template: '<div data-testid="mock-messages">Mock Messages</div>'
}

describe("IndecisionView Component", () => {

  test("renders chat messages and messagebox correctly", () => {
    const wrapper = mount(IndecisionView);
    expect(wrapper.findComponent(ChatMessages).exists()).toBeTruthy();
    expect(wrapper.findComponent(MessageBox).exists()).toBeTruthy();
  });

  test('calls onMessage when sending a message', async () => {
    const wrapper = mount(IndecisionView, {
      global: {
        stubs: {
          ChatMessages: mockChatMessages,
        }
      }
    });
    const messageBox = wrapper.findComponent(MessageBox);
    messageBox.vm.$emit('sendMessage', 'Hola Mundo');
    await new Promise(resolve => setTimeout(resolve, 1000));
    expect(wrapper.html()).toMatchSnapshot();
  })

});
