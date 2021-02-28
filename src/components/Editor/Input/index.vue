<script lang="js">
export default {
  functional: true,
  props: [
    'input',
    'data',
    'component',
    'componentData',
  ],
  render(h, { props, listeners }) {
    const {
      input,
      data,
      component,
      componentData,
    } = props

    const inputDefinition = input.type;

    let componentProps = {
      _key: input.key,
      name: input.name,
      component,
      componentData,
      data,
    }

    if(inputDefinition.usesWrapper) {
      componentProps.inputOptions = input.inputOptions
    } else {
      componentProps = {
        ...componentProps,
        ...input.inputOptions
      }
    }

    return h(
      inputDefinition.component,
      {
        props: componentProps,
        on: {
          change: (value) => {
            listeners.change({
              ...componentData,
              [input.key]: value,
            })
          },
          'change-root': (data) => {
            listeners.change(data)
          }
        },
      },
      []
    )
  },
}
</script>

<style lang="scss" scoped>
</style>
