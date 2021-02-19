const mapInputsToComponents = (components, inputs) => (
  components.map((component) => ({
    ...component,
    inputs: component.inputs.map((input) => {
      const inputDefinition = typeof input.type === 'string' ?
        inputs[input.type] :
        input.type

      return {
        ...input,
        type: inputDefinition
      }
    })
  }))
)

export default mapInputsToComponents
