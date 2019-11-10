
// ------------------------------ IMPORTS
// *    Style imports
import './styles.css';

// *    Library imports
import React, { Component } from "react";

// *    Component imports


// ----------------------------- END IMPORTS

class InputField extends Component {
    
    onChangeInputHandler = (event) => {
        this.props.onChangeInputHandler(event);
    };

    render() {

        const { 
            name,
            type, 
            value, 
            placeholder, 
            maxLength, 
            hasError, 
            errorText 
        } = this.props;

        return (
            <div className="input-field-wrapper">
                <input
                    id={name}
                    type={type}
                    value={value}
                    onChange={this.onChangeInputHandler}
                    placeholder={placeholder}
                    maxLength={maxLength}
                />
                {
                    hasError ? 
                        <div className="error-text">{errorText}</div>
                        :
                        null
                }
                
            </div>
        );
    }

}

export default InputField;