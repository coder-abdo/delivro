import {defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Restaurant Title',
      validation: (Role) => Role.isRequired(),
    },
    {
      name: 'description',
      type: 'string',
      title: 'Short Description',
      validation: (Role) => Role.isRequired(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Restaurant Image',
    },
    {
      name: 'lat',
      type: 'number',
      title: 'Resturant Location Latitude',
    },
    {
      name: 'long',
      type: 'number',
      title: 'Resturant Location Longitude',
    },
    {
      name: 'address',
      type: 'string',
      title: 'Restaurant Address',
      validation: (Role) => Role.isRequired(),
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Restaurant Rating Range Between 1-5',
      validation: (Role) =>
        Role.min(1).max(5).error('enter a valid rating between 1 and 5').isRequired(),
    },
    {
      name: 'category',
      title: ' Restaurant Categories',
      validation: (Role) => Role.isRequired(),
      type: 'reference',
      to: [{type: 'category'}],
    },
    {
      name: 'dish',
      title: 'Restaurant Dishes',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'dish'}]}],
    },
  ],
})
