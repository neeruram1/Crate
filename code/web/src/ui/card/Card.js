// Imports
import React from 'react'

// UI Imports
import { level1 } from '../common/shadows'

// Component
// Card here is simply creating a stylized div. the important part is the children and ...other that is passed down from props-LL
//That being said, is appears Redux is NOT being used here. Should find where those props are being passed down from and what they look like-LL
//According to dev tools, in this particular instance, children are, [<Icon />, " Subscribe"] -LL
// ...other might be a situational thing where it doesn't always show up. I don't see it when I look at the + subscibe block-LL 

const Card = (props) => {
  const { children, ...other } = props
  // When  we look at Item.js, Card is put into opening and closing tabs that must result in these divs...So this component looks like it's strictly for styling purposes?
  return (
    <div {...other}>
      {children}

      {/* language=CSS */}
      <style jsx>{`
        div {
          border-radius: 0.2em;
          font-family: 'Roboto', sans-serif;
          box-shadow: ${ level1 };
        }
        `}
      </style>
    </div>
  )
}

export default Card