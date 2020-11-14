import { Button, Input, Card, CardImg, CardBody } from 'reactstrap';
//import { Button, Input, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import React from 'react';


export const constructElements = data =>{
  const {id, type, property} = data
  switch (type.toLowerCase()) {
    case "button":
      const {value,outline,color,size} = property
      return (<Button outline={outline} id={id} style={{margin:"10px"}}color={color} size={size}>{value}</Button>)

    case "input":
      const {type,placeholder,...style} = property
      return (<Input placeholder={placeholder} type={type} style={style}></Input>)

    case "card":
          return(
              <Card style={{width:"300px", height:"400px"}}>
              <CardImg top width="100%" src="/assets/318x180" alt="Card image cap" />
              <CardBody>
                body
              </CardBody>
            </Card>
          )

    case "p":
        return <p>{property.value}</p>

    case "h":
        const hd = React.createElement(property.tag, {}, property.value);
        return hd

  default:

  }

}
