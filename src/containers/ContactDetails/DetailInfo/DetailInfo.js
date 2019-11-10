
/*** Imports ***/

/* Library imports */
import React, { Component } from "react";
import './styles.css';


/*** End Imports ***/

class DetailInfo extends Component {


    // -------------- render --------------------------------

    render() {

        const {
            label,
            value,
        } = this.props;

        return (
            <div>
                <div className="detail-wrapper">
                    <span className="dw-label">{label}</span>
                    <span>{value}</span>
                </div>
            </div>
        );
    }

}



export default DetailInfo;