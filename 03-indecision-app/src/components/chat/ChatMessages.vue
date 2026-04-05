<script setup lang="ts">
import ChatBubble from "@/components/chat/ChatBubble.vue";
import type {ChatMessage} from "@/interfaces/chat-message.interface.ts";
import {ref, watch} from "vue";

interface Props {
  messages: ChatMessage[];
}

// const props = defineProps<Props>();

const chatRef = ref<HTMLDivElement | null>(null);
const {messages} = defineProps<Props>();
watch(() => messages, (newValue) => {
  console.log('Messages updated');
  setTimeout(() => {
    chatRef.value?.scrollTo({
      top: chatRef.value.scrollHeight,
      behavior: "smooth",
    });
  }, 100);
}, { deep: true });

</script>

<template>
  <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <!-- Messages go here -->
      <!-- Example Message -->
      <ChatBubble v-for="message in messages" :key="message.id" v-bind="message" />
<!--    <ChatBubble v-for="message in messages" :key="message.id" :itsMine="message.itsMine" :message="message.message" :image="message.image" />-->
<!--      <ChatBubble :itsMine="true" :message="'Hi! How are you?'" />-->
<!--      <ChatBubble :itsMine="false" :message="'no'" image="https://yesno.wtf/assets/yes/13-c3082a998e7758be8e582276f35d1336.gif" />-->
    </div>
  </div>
</template>

<style scoped>

</style>
