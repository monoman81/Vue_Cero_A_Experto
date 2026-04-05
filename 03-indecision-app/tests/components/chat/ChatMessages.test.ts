import {describe, test, expect, vi} from "vitest";
import ChatMessages from "@/components/chat/ChatMessages.vue";
import {mount} from "@vue/test-utils";
import type {ChatMessage} from "@/interfaces/chat-message.interface.ts";

const messages: ChatMessage[] = [
  { id:1, message: 'Hola', itsMine: true },
  { id:2, message: 'Mundo', itsMine: true },
  { id:3, message: '?', itsMine: true },
  { id:4, message: 'No', itsMine: false, image: 'https://media1.giphy.com/media/v1.Y2lkPWFmMzk1ZjIw…aWZzX3JhbmRvbSZjdD1n/Ph7TKM1YuVH729fWdG/giphy.gif' },
];

describe('ChatMessages Component', () => {

  const wrapper = mount(ChatMessages, {
    props: {
      messages
    }
  });

  test('renders chat messages correctly', () => {
    const chatBubbles = wrapper.findAllComponents({
      name: 'ChatBubble',
    });
    expect(chatBubbles.length).toBe(messages.length);
  })

  test('scrolls down to the bottom after messages update', async () => {
    const scrollToMock = vi.fn();
    const chatRef = wrapper.vm.$refs.chatRef as HTMLDivElement;
    chatRef.scrollTo = scrollToMock;
    await wrapper.setProps({
      messages: [...messages, { id: 6, message: 'Hey!!', itsMine: true}]
    });
    await new Promise(resolve => setTimeout(resolve, 1000));
    expect(scrollToMock).toHaveBeenCalledWith({
      behavior: 'smooth',
      top: expect.any(Number),
    });
  });

});
