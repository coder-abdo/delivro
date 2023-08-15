import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Restaurant Dishes',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Dish Name',
      validation: (Role) => Role.isRequired(),
    },
    {
      name: 'description',
      type: 'string',
      title: 'Dish Short Description',
      validation: (Role) => Role.isRequired(),
    },
    {
      name: 'price',
      type: 'number',
      title: 'Dish Price',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Dish Image',
    },
  ],
})
