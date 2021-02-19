<script lang="js">
import inputs from '../inputs'

const inputComponents = Object.values(inputs).reduce((o, { component }) => ({
  ...o, [component.name]: component,
}), {})

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

    const inputDefinition = inputs[input.type]

    return h(
      inputDefinition.component.name,
      {
        props: {
          ...input.inputOptions,
          _key: input.key,
          component,
          componentData,
          data,
        },
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
  components: {
    ...inputComponents,
  }
}
</script>

<style lang="scss" scoped>
</style>
