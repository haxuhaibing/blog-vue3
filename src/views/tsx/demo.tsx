/*
 * @Date: 2024-03-16 16:26:01
 * @LastEditors: hi@xuhaibing.com
 * @LastEditTime: 2024-03-16 17:16:01
 * @FilePath: /blog-xuhaibing.com/src/views/tsx/demo.tsx
 */
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  name: 'HelloWorld',
  setup() {
    const list = reactive([1, 2, 3])
    return () => (
      <>
        {list.map((item) => (
          <h1>值为：{item}</h1>
        ))}
      </>
    )
  }
})
