import React from "react";
import FirstComponent from "../components/first-component";

const FirstPage = () => {
  return (
    <>
      <div>
        <header>This is the first page with a functional component</header>
      </div>
      <div>
        <p>This is a functional component:</p>
        <FirstComponent
          text="This is the props for the first component"
        />
      </div>
    </>
  )
};

export default FirstPage;
