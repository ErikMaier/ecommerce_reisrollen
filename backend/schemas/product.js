export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          title: 'Alternative Text',
          name: 'alt',
          type: 'string',
        },
      ],
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'item_number',
      title: 'Item Number',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLenght: 90,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      options: {
        decimalScale: 2,
        fixedDecimalScale: true,
        allowNegative: false,
        decimalSeparator: ',',
        thousandSeparator: '.',
        prefix: '€ ',
      },
    },
    {
      name: 'details',
      title: 'Details',
      type: 'string',
    },
    {
      name: 'allergens',
      title: 'Allergens',
      type: 'string',
    },
    {
      name: 'amount',
      title: 'Amount',
      type: 'number',
    },

    // {
    //   name: 'category',
    //   title: 'Category',
    //   type: 'reference',
    //   to: { type: 'category' },
    // },
  ],
};
