//로그인 검증 항목 및 방법 구현

import React from "react";

const validation=(value, rules, form)=>{
    let valid = true;

    for(let rule in rules){
        switch(rule){
            case 'isRequired':
                valid = valid&&validationRequired(value);
                break;
            case 'isEmail':{
                valid=valid&&validateEmail(value);
                break;
            }
            case 'minLength':
                valid=valid&&validateMinLength(value, rules[rule]);
                break;
            case 'confirmPassword':
                valid=valid&&validateConfirmPassword(value, form[rules.validateConfirmPassword].value);
                break;
            default:
                valid=true;
        }
    }


    return valid;
};

const validateConfirmPassword=(confirmPassword, password)=>{
    return confirmPassword===password;
};

const validateMinLength=(value, ruleValue)=>{
    if(value.length >=ruleValue){
        return true;
    } return false;
};

const validateEmail=value=>{
    const expression=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return expression.test(String(value).toLocaleLowerCase());
};

const validateRequired=value=>{
    if(value !== ''){
        return true;
    } return false;
};

export default validation;
