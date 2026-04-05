import {describe, test, expect, vi} from "vitest";
import {useChat} from "@/composables/useChat.ts";

describe('useChat', () => {

  test('adds message correctly when onMessage is called', async () => {
    const text = 'Hello World!';
    const {messages, onNewMessage} = useChat();

    await onNewMessage(text);

    expect(messages.value.length).toBe(1);
    expect(messages.value[0]?.itsMine).toBeTruthy();
    expect(messages.value[0]?.message).toBe(text);
    expect(messages.value[0]).toEqual({
      id: expect.any(Number),
      itsMine: true,
      message: text,
    });
  });

  test('adds nothing when message is empty', async () => {
    const text = '';
    const {messages, onNewMessage} = useChat();
    await onNewMessage(text);
    expect(messages.value.length).toBe(0);
    await onNewMessage(text);
  });

  test('gets her response correctly when message ends with ?', async () => {
    const text = 'Hello World?';
    const {messages, onNewMessage} = useChat();
    await onNewMessage(text);
    await new Promise(resolve => setTimeout(resolve, 2000));
    const [myMessage, herMessage] = messages.value;
    expect(messages.value.length).toBe(2);
    expect(myMessage).toEqual({
      id: expect.any(Number),
      itsMine: true,
      message: text,
    });
    expect(herMessage).toEqual({
      id: expect.any(Number),
      itsMine: false,
      message: expect.any(String),
      image: expect.any(String),
    });
  });

  test('mock response API', async () => {
    const mockResponse = {
      answer: 'yes',
      image: 'example.gif'
    };
    (window as any).fetch = vi.fn(async () => ({
      json: async () => mockResponse
    }));
    const text = 'Hello World?';

    const {messages, onNewMessage} = useChat();
    await onNewMessage(text);
    await new Promise(resolve => setTimeout(resolve, 1600));
    const [_, herMessage] = messages.value;
    expect(herMessage).toEqual({
      id: expect.any(Number),
      image: mockResponse.image,
      itsMine: false,
      message: mockResponse.answer,
    });
  });

});
