
/*** Imports ***/

/* Library imports */
import React, { Component } from "react";
import DetailInfo from './DetailInfo/DetailInfo';
import './styles.css';

/*** End Imports ***/

class ContactDetails extends Component {
    constructor(props) {
        super(props);
        let valueObj = props.location.state.newObj;
        this.state = {
            name: valueObj.name,
            email: valueObj.email,
            password: valueObj.password,
            phone: valueObj.phone,
            address: valueObj.address
        }
    };



    // -------------- render --------------------------------

    render() {

        const {
            name,
            email,
            password,
            phone,
            address
        } = this.state;

        return (
            <div className="contact-details-wrapper">
                <h1>Information</h1>
                <DetailInfo
                    label={"Name"}
                    value={name}
                />
                <DetailInfo
                    label={"Email"}
                    value={email}
                />
                <DetailInfo
                    label={"Password"}
                    value={password}
                />
                <DetailInfo
                    label={"Phone"}
                    value={phone}
                />
                <DetailInfo
                    label={"Address"}
                    value={address}
                />
            </div>
        );
    }

}



export default ContactDetails;