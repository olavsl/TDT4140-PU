import React, {useState} from 'react'

const CardProp {
    children:React.ReactNode;
    className: string;
    id: string;
};

// A wrapping component; must render all its children components (these are passed as props to the Card component)
const Card = (props: CardProps) => {

  return (
    <div className ={`card ${props.className}`} id={`${props.id}`} >
        {props.children}
    </div>
  )
}


export default Card;
