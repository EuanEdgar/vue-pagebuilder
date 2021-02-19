import Vue from 'vue'

import Text from './Text'

const register = (component) => {
  Vue.component(component.name, component)
  return component
}

export default {
  text: {
    initialValue: '',
    component: register(Text),
  },
}
