import { Button, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import React from 'react';


export const constructElements = (data, elem) =>{
  const {id, type, property} = data
  const {value, ...rest_property} = property
  switch (type.toLowerCase()) {
    case "button":
      var {outline ,size, color, ...buttonstyle} = rest_property
      return (<div>
              <div>
              {elem.disable ?
                <img src="lock.png" alt="s" width="14px" height="14px"/>:
                <img style={{opacity:0}} src="lock.png" alt="s" width="14px" height="14px"/>
                }
              </div>
              <Button outline={outline} id={id} style={buttonstyle} color={color} size={size}>{value}</Button>
              </div>
            )

    case "input":
      const {type,placeholder,label,...inputstyle} = rest_property

      if (type==="text"){
          return(<div style={{...inputstyle, transition:"0.3s"}}>
          <div>
          {elem.disable ?
            <img src="lock.png" alt="s" width="14px" height="14px"/>:
            <img style={{opacity:0}} src="lock.png" alt="s" width="14px" height="14px"/>
            }
          </div>
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
              <div>
              {elem.disable ?
                <img src="lock.png" alt="s" width="14px" height="14px"/>:
                <img style={{opacity:0}} src="lock.png" alt="s" width="14px" height="14px"/>
                }
              </div>
              <label style={{paddingTop:"2px"}}>{label}</label>
              <Input style={{marginLeft:"4px"}} placeholder={placeholder} type={type}>
              </Input></div>)
            }

    case "p":
        return(
            <div>
            <div>
            {elem.disable ?
              <img src="lock.png" alt="s" width="14px" height="14px"/>:
              <img style={{opacity:0}} src="lock.png" alt="s" width="14px" height="14px"/>
              }
            </div>
            <p style={rest_property}>{value}</p>
            </div>
          )
    case "h":
        const {tag, ...hstyle} = rest_property
        const hd = React.createElement(tag, {style:{...hstyle, transition:"0.3s"}}, value);
        return(<div>
              <div>
              {elem.disable ?
                <img src="lock.png" alt="s" width="14px" height="14px"/>:
                <img style={{opacity:0}} src="lock.png" alt="s" width="14px" height="14px"/>
              }
              </div>
              {hd}
              </div>

        )

  default:

  }

}
