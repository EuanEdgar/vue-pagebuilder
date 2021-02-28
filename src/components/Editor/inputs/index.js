import Vue from 'vue'

import Select from './Select'
import Text from './Text'

const createComponent = (component) => {
  const {
    name,
    initialValue,
    ...vueComponent
  } = component

  Vue.component(name, vueComponent)

  return {
    name,
    component,
    initialValue,
  }
}

export default {
  select: createComponent(Select),
  text: createComponent(Text),
}
