import React, { useState } from "react";
import styled from 'styled-components';

const Button = styled.button`
  font-family: sans-serif;
  font-size: 1.3rem;
  border: none;
  border-radius: 10px;
  padding: 7px 10px;
  margin: 20px;
  background: #7649fe;
  color: #fff;
  &:hover {
    background: #0c164f;
    transform: scale(1.1);
  
  }
`
const Paragraph = styled.p`
  padding-bottom: 50px;
  margin: 0 auto;
  max-width: 50%;
  color: #fff;
`

const Description = (props) => {
  const { description } = props;
  const [isOpen, setIsOpen] = useState(false)

  const clicked = () => {
      setIsOpen((current) => !current)
  }

  return (
    <div>
        <Button onClick={clicked}>{isOpen ? 'Close': 'See Details' }</Button>
        {isOpen && <Paragraph>{description}</Paragraph>}
    </div>
  );
}

export default Description;
