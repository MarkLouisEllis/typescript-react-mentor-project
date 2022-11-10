import React from "react";

type Props = {
  text: string
}

const FirstComponent = ({ text }: Props) => {
  
  return (
    <>
      <div>
        <p>{text}</p>
      </div>
    </>
  )
};

export default FirstComponent;
