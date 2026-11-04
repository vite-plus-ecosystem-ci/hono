import { defineProject } from 'vite-plus'

export default defineProject({
  test: {
    env: {
      NAME: 'Node',
    },
    globals: true,
    name: 'node',
  },
})
