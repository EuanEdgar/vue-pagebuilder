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
        name: 'Second val :)'
      },
    ],
    // TODO
    render: null
  },
  {
    name: 'Header',
    inputs: [
      {
        type: 'select',
        key: 'headerType',
        initialValue: 1,
        inputOptions: {
          options: [1, 2, 3, 4, 5, 6].map((n) => ({
            value: n,
            text: `H${n}`,
          })),
        },
      },
      {
        type: 'text',
        key: 'text',
      },
    ],
  },
]
