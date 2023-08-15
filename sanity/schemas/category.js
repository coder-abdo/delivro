import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Menu Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Menu Category',
      type: 'string',
      validation: (Role) => Role.isRequired(),
    },
    {
      name: 'image',
      title: 'Category Image',
      type: 'image',
    },
  ],
})
