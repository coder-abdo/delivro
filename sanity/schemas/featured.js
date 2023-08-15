import {defineType} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured Menu Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Featured Category Name',
      validation: (Role) => Role.isRequired(),
    },
    {
      name: 'description',
      type: 'string',
      title: 'Featured Category Short Desription',
      validation: (Role) => Role.max(200),
    },
    {
      name: 'restaurant',
      type: 'array',
      title: 'Restaurant',
      of: [{type: 'reference', to: [{type: 'restaurant'}]}],
    },
  ],
})
