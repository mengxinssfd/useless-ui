import { defineComponent, PropType } from 'vue';
import 'uno.css';

export type IColor =
  | 'black'
  | 'gray'
  | 'red'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'indigo'
  | 'purple'
  | 'pink';

export type ISize = 'large' | 'default' | 'small';

export const props = {
  color: {
    type: String as PropType<IColor>,
    default: 'blue', // 设定默认颜色
  },
};

export default defineComponent({
  name: 'UButton',
  props, // 注册属性
  setup(props, { slots }) {
    return () => (
      <button
        class={`
        py-2 
        px-4 
        font-semibold 
        rounded-lg 
        shadow-md 
        text-white 
        bg-${props.color}-500 
        hover:bg-${props.color}-700 
        border-none 
        cursor-pointer 
        m-1
      `}
      >
        {slots.default ? slots.default() : ''}
      </button>
    );
  },
});
