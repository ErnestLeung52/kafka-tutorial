import avro from 'avsc';

// export default avro.Type.forSchema({
//  type: 'record',
//   fields: [
//     {
//       name: 'category',
//       type: {type: 'enum', name: 'PetKind', symbols: ['CAT', 'DOG']}
//     },
//     {name: 'name', type: 'string'}
//   ]
// });

export default avro.Type.forSchema({
  type: 'record',
  name: 'serialNum',
  fields: [
    {
      name: 'number',
      type: 'int',
    },
  ],
});
