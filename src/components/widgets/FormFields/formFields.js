import React from 'react';
import styles from './formFields.css';


const FormFields = ()=>{

    const renderTemplate = ()=>{
        let formTemplate = null;

        switch(formdate.element){
            case('input'):
               formTemplate = (
                   <div>
                       <input
                         {...formdata.config}
                         value={formdata.value}
                         onBlur={(event)=>change({event,id,blur:true})}
                         onChange={(event)=>change({event,id,blur:false})}
                       />
                   </div>
               )
               break;
            default:
              formTemplate = null;

        }
        return formTemplate;
    }
      return(
          <div>
           {renderTemplate()}
          </div>
      )
}
export default FormFields;