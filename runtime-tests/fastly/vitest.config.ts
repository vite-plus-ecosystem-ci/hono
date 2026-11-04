import fastlyCompute from 'vite-plugin-fastly-js-compute'
import { defineProject } from 'vite-plus'

export default defineProject({
  plugins: [fastlyCompute()],
  test: {
    globals: true,
    name: 'fastly',
  },
})
