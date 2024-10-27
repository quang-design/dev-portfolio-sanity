import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'dev-portfolio',

  projectId: 'lq503bf9',
  dataset: 'content',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
