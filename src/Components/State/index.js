export const initialState = {
  elements: {
    'elem-1': {
              id: 'elem-1',
              type:'Button',
              property:{
                color:"primary",
                outline:false,
                size:"",
                value:"Click me",
                height:"",
                width:"300px",
                margin:"10px",
                padding:"",
                position:"",
                top:"",
                down:"",
                left:"",
                right:""
              }
            },
    'elem-3': {
              id: 'elem-3',
              type:'Button',
              property:{
                color:"primary",
                outline:false,
                size:"",
                value:"Click me",
                height:"",
                width:"300px",
                margin:"10px",
                padding:"",
                position:"",
                top:"",
                down:"",
                left:"",
                right:""
              }
          },
    'elem-4':{
      id:'elem-4',
      type:"Input",
      property:{
        placeholder:"Text input",
        height:"",
        width:"300px",
        margin:"10px",
        padding:"",
        position:"",
        top:"",
        down:"",
        left:"",
        right:"",
        color:""
      }
    },
    'elem-5':{
      id:'elem-5',
      type:"h",
      property:{
        value:"test paragraph",
        tag:"h1",
        height:"",
        width:"300px",
        margin:"10px",
        padding:"",
        position:"",
        top:"",
        down:"",
        left:"",
        right:"",
        color:""
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
  columnOrder: [ 'column-1','column-2','column-3'],
  activeElements:['elem-1', 'elem-3', 'elem-4', 'elem-5']
};
