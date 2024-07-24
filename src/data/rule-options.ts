export const ruleOptions = [
  {
    id: 'password-length',
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
    id: 'capital-letters',
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
    id: 'numerical-characters',
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
    id: 'special-characters',
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

export const getRuleOptionById = (id: string) => {
  return ruleOptions.find((option) => option.id === id);
};
