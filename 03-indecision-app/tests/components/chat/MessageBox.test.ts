import {describe, test, expect} from "vitest";
import {mount} from "@vue/test-utils";
import MessageBox from "@/components/chat/MessageBox.vue";

describe('MessageBox Component', () => {

  const wrapper = mount(MessageBox, {});

  test('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.find('input[type="text"]').exists()).toBe(true);
    expect(wrapper.find('button').exists()).toBe(true);
    expect(wrapper.find('button svg').exists()).toBe(true);
  });

  test('emits sendmessage when button is clicked with message value', async () => {
    const message = 'Hola Mundo';
    await wrapper.find('input[type="text"]').setValue(message);
    await wrapper.find('button').trigger('click');

    expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message]);
    expect((wrapper.vm as any).message).toBe('');
  });

  test('emits sendmessage when keydown.enter is triggered with message value', async () => {
    const message = 'Hola Mundo';
    const input = wrapper.find('input[type="text"]');
    await input.setValue(message);
    await input.trigger('keydown.enter');
    expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message]);
  });

  test('does not emit sendmessage with empty value', async () => {
    const wrapper = mount(MessageBox, {});
    const input = wrapper.find('input[type="text"]');
    await input.trigger('keydown.enter');
    expect(wrapper.emitted('sendMessage')).toBeFalsy();
    await wrapper.find('button').trigger('click');
    expect(wrapper.emitted('sendMessage')).toBeFalsy();
  });

});
