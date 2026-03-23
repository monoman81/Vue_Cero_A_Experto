import {computed, ref} from "vue";

export const useCounter = (initialValue: Number = 5) => {
  const counter = ref(initialValue);
  // const square = computed(() => {
  //   return counter.value * counter.value;
  // });

  return {
    counter,
    square: computed(() => counter.value.valueOf() * counter.value.valueOf()),
  }

}
