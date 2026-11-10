import { defineProject } from 'vite-plus'

export default defineProject({
  test: {
    globals: true,
    name: 'workerd',
  },
})
