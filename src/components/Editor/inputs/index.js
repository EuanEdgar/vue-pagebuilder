import Vue from 'vue'

import InputWrapper from './InputWrapper'
import Select from './Select'
import Text from './Text'

const createComponent = (componentDefinition) => {
  const {
    name,
    initialValue,
    wrapInput,
    ...vueComponent
  } = componentDefinition

  let component;
  if(wrapInput) {
    const internalComponent = Vue.component(`Wrapped${name}`, vueComponent)

    component = Vue.component(name, InputWrapper(internalComponent))
  } else {
    component = Vue.component(name, vueComponent)
  }

  return {
    name,
    usesWrapper: !!wrapInput,
    component,
    initialValue,
  }
}

export default {
  select: createComponent(Select),
  text: createComponent(Text),
}
