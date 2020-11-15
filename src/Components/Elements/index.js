import { Button, Input} from 'reactstrap';
import React from 'react';


export const constructElements = data =>{
  const {id, type, property} = data
  const {value, ...rest_property} = property
  switch (type.toLowerCase()) {
    case "button":
      var {outline ,size, color, ...buttonstyle} = rest_property
      return (<Button outline={outline} id={id} style={buttonstyle} color={color} size={size}>{value}</Button>)

    case "input":
      const {type,placeholder,...inputstyle} = rest_property
      return (<Input placeholder={placeholder} type={type} style={{...inputstyle, transition:"0.3s"}}></Input>)

    case "p":
        return <p style={rest_property}>{value}</p>

    case "h":
        const {tag, ...hstyle} = rest_property
        const hd = React.createElement(tag, {style:{...hstyle, transition:"0.3s"}}, value);
        return hd

  default:

  }

}
