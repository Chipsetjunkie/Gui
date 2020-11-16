import { Button, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import React from 'react';


export const constructElements = data =>{
  const {id, type, property} = data
  const {value, ...rest_property} = property
  switch (type.toLowerCase()) {
    case "button":
      var {outline ,size, color, ...buttonstyle} = rest_property
      return (<Button outline={outline} id={id} style={buttonstyle} color={color} size={size}>{value}</Button>)

    case "input":
      const {type,placeholder,label,...inputstyle} = rest_property

      if (type==="text"){
          return(<div style={{...inputstyle, transition:"0.3s"}}>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>{label}</InputGroupText>
              </InputGroupAddon>
              <Input type="text" placeholder="username" />
            </InputGroup>
            </div>
          )
      }
      else{
      return (<div style={{...inputstyle,transition:"0.3s"}}>
            <label style={{paddingTop:"2px"}}>{label}</label>
            <Input style={{marginLeft:"4px"}} placeholder={placeholder} type={type}>
            </Input></div>)
            }

    case "p":
        return <p style={rest_property}>{value}</p>

    case "h":
        const {tag, ...hstyle} = rest_property
        const hd = React.createElement(tag, {style:{...hstyle, transition:"0.3s"}}, value);
        return hd

  default:

  }

}
