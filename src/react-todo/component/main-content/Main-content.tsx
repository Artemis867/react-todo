import React from "react";
import BoardComponent from "../../lib/board/BoardComponent";
import FormComponent from "../../lib/form/Form";
import ModalFormComponent from "../../lib/form/modal-form/ModalFormComponent";
class MainContentComponent extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return(
      <>
        <ModalFormComponent/>
        <div className="container main-content-container">
          <BoardComponent/>
        </div>
      </>
    );
  }
}

export default MainContentComponent;