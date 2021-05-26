import React, { useState } from "react";

const Description = (props) => {
  const { description } = props;
  const [isOpen, setIsOpen] = useState(false)

  const clicked = () => {
      setIsOpen((current) => !current )
  }

  return (
    <div>
        <button onClick={clicked}>{isOpen ? 'Close': 'See Details' }</button>
        {isOpen && <p>{description}</p>}
    </div>
  );
}

export default Description;
