import React from "react";
import { NavigationProps, NavigationState } from "../../interface/navigation.interface";
class NavigationComponent extends React.Component<NavigationProps, NavigationState>{
  constructor(props: any) {
    super(props);
  }

  render() {
    return(
      <>
        <div>
          <span>NavigationComponent</span>
        </div>
      </>
    )
  }
}

export default NavigationComponent;