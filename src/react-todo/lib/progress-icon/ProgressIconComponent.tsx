import React from "react";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProgressIconComponent(props: any): any {

  return(
    <>
    { props.status === 'todo' ?
      <span className="close">x</span> :
      <div className="progress-pip-container">
        <FontAwesomeIcon className="fa-progress-pip" icon={faCircle}></FontAwesomeIcon>
        <FontAwesomeIcon className="fa-progress-pip" icon={faCircle}></FontAwesomeIcon>
        <FontAwesomeIcon className="fa-progress-pip" icon={faCircle}></FontAwesomeIcon>
        <FontAwesomeIcon className="fa-progress-pip" icon={faCircle}></FontAwesomeIcon>
      </div>
    }
    </>
  );
}

export default ProgressIconComponent;