import React from 'react'
//import {configure, shallow} from 'enzyme';
//import Adapter from 'enzyme-adapter-react-16';
import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

describe('auth reducer',()=>{
    it('should return the initial state',()=>{
        expect(reducer(undefined,{})).toEqual({
    token: null,
    userId: null,
    error: null,
    loading: false,
    authRedirectPath: '/'
});
    })
 it('should store token upon login',()=>{
        expect(reducer({
    token: null,
    userId: null,
    error: null,
    loading: false,
    authRedirectPath: '/'
},{
    type:actionTypes.AUTH_SUCCESS,
    idToken:'someToken',
    userId:"someUser",

})).toEqual({
    token:"someToken",
    userId: "someUser",
    error: null,
    loading: false,
    authRedirectPath: '/'
});
    })
})