export const rules = [
  {
    label: 'Password Length',
    qualifiers: [
      {
        label: 'Length ust be at least',
        subfields: [
          {
            type: 'number',
          },
        ],
      }, 
      {
        label: 'Length must be less than',
        subfields: [
          {
            type: 'number',
          },
        ],
      },
    ],    
  },
  {
    label: 'Capital Letters',
    qualifiers: [
      {
        label: 'Must contain at least',
        subfields: [
          {
            type: 'number',
          },
        ],
      }, 
      {
        label: 'Must contain less than',
        subfields: [
          {
            type: 'number',
          },
        ],
      },
    ],    
  },
  {
    label: 'Numerical characters',
    qualifiers: [
      {
        label: 'Must contain at least',
        subfields: [
          {
            type: 'number',
          },
        ],
      }, 
      {
        label: 'Must contain less than',
        subfields: [
          {
            type: 'number',
          },
        ],
      },
    ]
  },
  {
    label: 'Special characters',
    qualifiers: [
      {
        label: 'Must contain at least',
        subfields: [
          {
            type: 'number',
          },
        ],
      }, 
      {
        label: 'Must contain less than',
        subfields: [
          {
            type: 'number',
          },
        ],
      },
      {
        label: 'Characters must be one of',
        subfields: [
          {
            type: 'string',
          },
        ],
      },
      {
        label: 'Characters cannot be one of',
        subfields: [
          {
            type: 'string',
          },
        ],
      }
    ]
  }
];