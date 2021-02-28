import Wrapper from './Wrapper'

export default (InputComponent) => ({
  name: 'InputWrapper',
  functional: true,
  props: [
    '_key',
    'name',
    'component',
    'componentData',
    'inputOptions',
    'data',
  ],
  render(h, { props, listeners }) {
    const {
      _key,
      name,
      inputOptions,
      ...otherComponentProps
    } = props

    const wrapperProps = {
      _key,
      name,
    }

    const componentProps = {
      _key,
      name,
      ...otherComponentProps,
      ...inputOptions,
    }

    return h(Wrapper, { props: wrapperProps }, [
      h(InputComponent, {
        props: componentProps,
        on: listeners,
      })
    ])
  }
})
