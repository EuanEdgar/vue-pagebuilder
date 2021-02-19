// TEMP
const blank = (a) => !a

const createComponent = (componentDefinition) => {
  const component = {
    type: componentDefinition.name,
  }

  componentDefinition.inputs.forEach((input) => {
    const {
      type,
      key,
    } = input

    if(!blank(input.initialValue)) {
      component[key] = input.initialValue
    } else {
      const inputDefinition = type
      component[key] = inputDefinition.initialValue
    }
  })

  return component
}

export default createComponent
