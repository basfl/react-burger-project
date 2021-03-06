import React,{Component} from 'react';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './Auth.css';
import * as authActions from '../../store/actions/index';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {updatedObject, checkValidity} from '../../shared/utility'
class Auth extends Component{
    state={
        controls:{
             email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Mail Address'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail:true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength:7
                },
                valid: false,
                touched: false
            }

        },
         isSignUp: true
    }
       componentDidMount(){
          
        if(!this.props.buildingBurger && this.props.authRedirectPath!=='/'){
            this.props.onSetAuthRedirectPath();
        }
}
     
    inputChangedHandler=(event,controlName)=>{
        const updateControls=updatedObject(this.state.controls,{
                 [controlName]:updatedObject(this.state.controls[controlName],{
                value:event.target.value,
                valid:checkValidity(event.target.value,this.state.controls[controlName].validation),
                touched:true
                 })
                
        });
        
        this.setState({controls:updateControls});

    }
    submitHandler=(event)=>{
           
            event.preventDefault();
            this.props.onAuth(this.state.controls.email.value,this.state.controls.password.value,this.state.isSignUp);
        
        }
        switchAuthMethodHandler = () => {
        this.setState( prevState => {
            return {
                isSignUp: !prevState.isSignUp
            };
        });
}
    render (){
         const formElementsArray = [];
        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }
        let form=formElementsArray.map((formElement)=>{
            return (
                <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={(event) => this.inputChangedHandler(event, formElement.id)}
                />
                
            );

        });
        if(this.props.loading){
            form=<Spinner/>
        }
        let errorMessage=null;
        if(this.props.error){
            errorMessage=(
                <p>{this.props.error.message}</p>
            );
        }
         let authRedirect=null;
         if(this.props.isAuthenticated){
          //   authRedirect=<Redirect to={this.props.onSetAuthRedirect}/>
              authRedirect = <Redirect to={ this.props.authRedirectPath } />
         }
        return(
        <div className={classes.Auth}>
        {authRedirect}
        {errorMessage}
        <form onSubmit={this.submitHandler}>
        {form}
        <Button btnType="Success">Submit</Button>
        </form>
        <Button 
        clicked={this.switchAuthMethodHandler}
        btnType="Danger">Switch To {this.state.isSignUp? "Signin":"Signup"}</Button>
        </div>
        );
    }
}
const mapStateToProps=(state)=>{
    return({
        loading:state.auth.loading,
        error:state.auth.error,
        isAuthenticated:state.auth.token!==null,
        buildingBurger: state.burgerBuilder.building,
        authRedirectPath: state.auth.authRedirectPath
    });
}
const mapDispatchToProps=(dispatch)=>{
    return({
        onAuth:(email,password,isSignUp)=>dispatch(authActions.auth(email,password,isSignUp)),
        onSetAuthRedirect:()=>dispatch(authActions.setAuthRedirectPath('/'))
    });
}
export default connect(mapStateToProps,mapDispatchToProps)(Auth);