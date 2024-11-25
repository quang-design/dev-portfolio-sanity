import {defineField, defineType} from 'sanity'

export const skills = defineType({
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
    defineField({
      name: 'skillsList',
      title: 'Skills List',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Skill Name',
              type: 'string',
              validation: (Rule) => Rule.required().error('Skill name is required'),
            }),
            defineField({
              name: 'iconClass',
              title: 'Icon Class Name',
              type: 'string',
              validation: (Rule) => Rule.required().error('Icon class is required'),
            }),
          ],
        },
      ],
    }),
  ],
})
