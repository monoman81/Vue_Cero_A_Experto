import {computed, defineComponent, ref} from "vue"
import {useCounter} from "@/composables/useCounter.ts";

export default defineComponent({
  props: {
    value: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    // const counter = ref(props.value);
    // const square = computed(() => counter.value * counter.value);

    const {counter, square} = useCounter(props.value);

    return {
      counter,
      square
    }
  },
});
