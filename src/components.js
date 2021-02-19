export default [
  {
    name: 'Text',
    inputs: [
      {
        type: 'text',
        key: 'test value',
        initialValue: 'test value',
      },
      {
        type: 'text',
        key: 'second value',
        inputOptions: {
          header: 'Second val :)'
        },
      },
    ],
    // TODO
    render: null
  },
]
