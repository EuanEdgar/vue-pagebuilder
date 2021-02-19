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

    return h(
      inputDefinition.component,
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
}
</script>

<style lang="scss" scoped>
</style>
