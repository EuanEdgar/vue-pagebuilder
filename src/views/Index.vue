<template>
  <div>
    <label>
      <input type="checkbox" v-model="editting" />
      Editting
    </label>
    <Renderer
      :data="data"
      :editting="editting"
      @selected="setPath"
    />
    <Editor
      ref="editor"
      :path="path"
      :data="data"
      :components="components"
      @change="onChange"
      @replace="onReplace"
      @set-path="setPath"
    />
    <button @click="addElement">+</button>
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
      editting: false,
    };
  },
  computed: {
    data() {
      return this.$store.state.data.toJS()
    },
  },
  methods: {
    onChange({ path, data }) {
      this.$store.commit(
        'setData',
        this.$store.state.data.set(path, fromJS(data))
      )
    },
    onReplace({ path, data }) {
      this.$store.commit('setData', fromJS(data))
      this.path = path
    },
    setPath(path) {
      this.path = path
    },
    addElement() {
      this.$refs.editor.addComponent('Header')
    },
  },
  components: {
    Editor,
    Renderer,
  }
}
</script>
