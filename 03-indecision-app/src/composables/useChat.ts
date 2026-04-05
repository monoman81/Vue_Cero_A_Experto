import {ref} from "vue";
import type {ChatMessage} from "@/interfaces/chat-message.interface.ts";
import type {YesNoResponse} from "@/interfaces/yes-no.response.ts";
import {sleep} from "@/helpers/sleep.ts";

export const useChat = () => {

  const messages = ref<ChatMessage[]>([]);

  const getHerResponse = async () => {
    const response = await fetch('https://yes-no-wtf.vercel.app/api');
    // console.log(response);
    return (await response.json()) as YesNoResponse;
  }

  const onNewMessage = async (text: string): Promise<void> => {
    if (text.length === 0) return;

    messages.value.push({
      id: new Date().getTime(),
      itsMine: true,
      message: text
    })
    if (!text.endsWith('?')) return;
    await sleep(1.5);
    const {answer, image} = await getHerResponse();

    messages.value.push({
      id: new Date().getTime(),
      itsMine: false,
      message: answer,
      image: image
    })

  }

  return {
    messages,
    onNewMessage,
  }
}
