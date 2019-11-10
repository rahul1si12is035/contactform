
/*** Imports ***/

/* Library imports */
import React, { Component } from "react";
import DetailInfo from './DetailInfo/DetailInfo';
import './styles.css';
import { Link } from 'react-router-dom';

/*** End Imports ***/

class ContactDetails extends Component {
    constructor(props) {
        super(props);
        let valueObj = props.location && props.location.state && props.location.state.newObj ? props.location.state.newObj : null;
        this.state = {
            name: valueObj ? valueObj.name : '',
            email: valueObj ? valueObj.email : '',
            password: valueObj ? valueObj.password : '',
            phone: valueObj ? valueObj.phone : '',
            address: valueObj ? valueObj.address : ''
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
                <Link to='/'>
                    <div className="submit-button">Back</div>
                </Link>
                
            </div>
        );
    }

}



export default ContactDetails;