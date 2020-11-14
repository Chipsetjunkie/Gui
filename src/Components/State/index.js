export const initialState = {
  elements: {
    'elem-1': {
              id: 'elem-1',
              type:'Button',
              property:{
                outline:false,
                color:"primary",
                value:"Click me",
                size:""
              }
            },
    'elem-3': {
              id: 'elem-3',
              type:'Button',
              property:{
                  value:"Click me",
                  background:"Orange"
              }
          },
    'elem-4':{
      id:'elem-4',
      type:"Input",
      property:{
        type:"text",
        placeholder:"Text input",
        width:"300px",
        margin:"10px"
      }
    },
    'elem-5':{
      id:'elem-5',
      type:"h",
      property:{
        value:"test paragraph",
        tag:"h1"
      }
    }
  },
  columns: {
    'column-1': {
      id: 'column-1',
      taskIds: ['elem-1','elem-3'],
    },
    'column-2': {
      id: 'column-2',
      taskIds: [],
    },
    'column-3': {
      id: 'column-3',
      taskIds: ['elem-4', 'elem-5'],
      }
  },
  // Facilitate reordering of the columns
  columnOrder: [ 'column-1','column-2','column-3']
};
