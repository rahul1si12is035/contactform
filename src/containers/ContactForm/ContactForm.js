
// ------------------------------ IMPORTS
// *    Style imports
import './styles.css';

// *    Library imports
import React, { Component } from "react";

// *    Component imports
import InputField from "../../components/InputField/InputField";
import Constants from '../../constants/Constants';


// ----------------------------- END IMPORTS

class ContactForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            phone: '',
            address: '',
            hasErrorName: false,
            hasErrorEmail: false,
            hasErrorPassword: false,
            hasErrorPhone: false,
            hasErrorAddress: false
        };
        this.formValidation = [];
        this.formControls = {
            NAME: 0,
            EMAIL: 1,
            PASSWORD: 2,
            PHONE: 3,
            ADDRESS: 4
        };
        this.formValidation[this.formControls.Name] = false;
        this.formValidation[this.formControls.EMAIL] = false;
        this.formValidation[this.formControls.PASSWORD] = false;
        this.formValidation[this.formControls.PHONE] = false;
        this.formValidation[this.formControls.ADDRESS] = false;
    };




    saveDataRequest = () => {
        const {
            name,
            email,
            password,
            phone,
            address
        } = this.state;

        let newObj = {
            name: name,
            email: email,
            password: password,
            phone: phone,
            address: address
        };
        this.props.history.replace('/contactdetails', { newObj: newObj });
    };

    validateData = () => {
        let isValidAll = true;
        for (let field of this.formValidation) {
            if (field === false) {
                isValidAll = false;
                break;
            }
        }
        return isValidAll;
    };

    onChangeNameHandler = (event) => {
        this.setState({
            name: event.target.value
        });
        this.formValidation[this.formControls.NAME] = event.target.value ? true : false;
    };

    onChangeEmailHandler = (event) => {
        this.setState({
            email: event.target.value
        });
        this.formValidation[this.formControls.EMAIL] = !!Constants.REGEX.EMAIL.test(event.target.value);
    };

    onChangePasswordHandler = (event) => {
        this.setState({
            password: event.target.value
        });
        this.formValidation[this.formControls.PASSWORD] = event.target.value ? true : false;
    };

    onChangePhoneHandler = (event) => {
        this.setState({
            phone: event.target.value
        });
        this.formValidation[this.formControls.PHONE] = !!Constants.REGEX.MOBILE.test(event.target.value);
    };

    onChangeAddressHandler = (event) => {
        this.setState({
            address: event.target.value
        });
        this.formValidation[this.formControls.ADDRESS] = event.target.value ? true : false;
    };

    onClickSubmit = () => {
        if (this.validateData()) {
            this.saveDataRequest();
        }
        else {
            let hasErrorName = !this.formValidation[0],
                hasErrorEmail = !this.formValidation[1],
                hasErrorPassword = !this.formValidation[2],
                hasErrorPhone = !this.formValidation[3],
                hasErrorAddress = !this.formValidation[4];

            this.setState({
                hasErrorName,
                hasErrorEmail,
                hasErrorPassword,
                hasErrorPhone,
                hasErrorAddress
            });
        }
    };

    render() {

        const {
            name,
            email,
            password,
            phone,
            address,
            hasErrorName,
            hasErrorEmail,
            hasErrorPassword,
            hasErrorPhone,
            hasErrorAddress
        } = this.state;

        return (
            <div className="contact-form-wrapper">
                <h1>Basic Information</h1>
                <InputField
                    name={"name"}
                    type={"text"}
                    value={name}
                    onChangeInputHandler={this.onChangeNameHandler}
                    placeholder={"Name"}
                    maxLength={20}
                    hasError={hasErrorName}
                    errorText={"Name is required"}
                />
                <InputField
                    name="email"
                    type="email"
                    value={email}
                    onChangeInputHandler={this.onChangeEmailHandler}
                    placeholder={"Email"}
                    maxLength={20}
                    hasError={hasErrorEmail}
                    errorText={"Email id is not valid"}
                />
                <InputField
                    name="password"
                    type="password"
                    value={password}
                    onChangeInputHandler={this.onChangePasswordHandler}
                    placeholder={"Password"}
                    maxLength={20}
                    hasError={hasErrorPassword}
                    errorText={"Password is required"}
                />
                <InputField
                    name="phone"
                    type="text"
                    value={phone}
                    onChangeInputHandler={this.onChangePhoneHandler}
                    placeholder={"Phone"}
                    maxLength={10}
                    hasError={hasErrorPhone}
                    errorText={"Phone no. is not valid"}
                />
                <InputField
                    name="address"
                    type="text"
                    value={address}
                    onChangeInputHandler={this.onChangeAddressHandler}
                    placeholder={"Address"}
                    maxLength={50}
                    hasError={hasErrorAddress}
                    errorText={"Address is required"}
                />
                <div className="submit-button" onClick={this.onClickSubmit}>Submit</div>
            </div>
        );
    }

}



export default ContactForm;