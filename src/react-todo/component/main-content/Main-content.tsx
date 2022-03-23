import React from "react";
import BoardComponent from "../../lib/board/BoardComponent";


class MainContentComponent extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return(
      <>
        <div className="container main-content-container">
          <BoardComponent/>
        </div>
      </>
    );
  }
}

export default MainContentComponent;