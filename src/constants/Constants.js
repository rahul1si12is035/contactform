const Constants = {
    REGEX: {
        MOBILE: /^(?:\+\d+[- ])?\d{10}$/,
        EMAIL: /^[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?/,
        ONLY_ALPHABETS: /^[a-zA-Z ]*$/
    }
};

export default Constants;