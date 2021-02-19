<template>
  <div>
    <Renderer :data="data" />
    <Editor
      :path="path"
      :data="data"
      :components="components"
      @change="onChange"
    />
  </div>
</template>

<script>
import { fromJS } from 'immutable'
import Editor from '@/components/Editor'
import Renderer from '@/components/Renderer'

import components from '@/components'

export default {
  data() {
    return {
      components,
      path: 0,
    };
  },
  computed: {
    data() {
      return this.$store.state.data
    },
  },
  methods: {
    onChange({ path, data }) {
      this.$store.commit(
        'setData',
        this.data.set(path, fromJS(data))
      )
    },
  },
  components: {
    Editor,
    Renderer,
  }
}
</script>
