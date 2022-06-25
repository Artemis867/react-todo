import React from "react";
import BoardComponent from "../../lib/board/BoardComponent";
import FormComponent from "../../lib/form/Form";

class MainContentComponent extends React.Component {
  constructor(props: any) {
    super(props);
  }
  
  render() {
    return(
      <>
        <FormComponent/>
        <div className="container main-content-container">
          <BoardComponent/>
        </div>
      </>
    );
  }
}

export default MainContentComponent;