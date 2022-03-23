import React from "react";
import { FormState } from '../../interface/form.interface';
import { FormProps } from '../../interface/form.interface';

class FormComponent extends React.Component<FormProps, FormState>{
  constructor(props: any) {
    super(props);
  }

  render() {
    return(
      <>
        <div>
          <span>FormComponent</span>
        </div>
      </>
    );
  }
}

export default FormComponent;