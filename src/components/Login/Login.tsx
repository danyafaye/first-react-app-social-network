import React from "react";
import { InjectedFormProps, reduxForm } from "redux-form";
import {required} from "../../utils/validators/validators";
import { createField, Input} from "../../components/common/FormsControls/FormsControls";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import style from "./../common/FormsControls/FormsControls.module.css"
import { login } from '../../redux/auth-reducer';
import { AppStateType } from '../../redux/redux-store';

type LoginFormOwnProps = {
    captchaUrl: string | null
}

const LoginForm:React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps>
    = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField<LoginFormValuesTypeKeys>("Email", "email", [required], Input)}
            {createField<LoginFormValuesTypeKeys>("Password", "password", [required], Input, {type: "password"})}
            {createField<LoginFormValuesTypeKeys>(undefined,"rememberMe", [], Input, {type: "checkbox"}, "Remember Me")}
            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl && createField("Symbols from image", "captcha", [required], Input, {})}
            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({
    form: 'login'
})(LoginForm)

type MapStatePropsType = {
    captchaUrl: string | null
    isAuth: boolean
}

type MapDispatchPropsType = {
    login: (email:string, password:string, rememberMe:boolean, captcha:string) => void
}

export type LoginFormValuesType = {
    captcha: string
    rememberMe: boolean
    password: string
    email: string
}

type LoginFormValuesTypeKeys = Extract<keyof LoginFormValuesType, string>

const Login:React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
    const onSubmit = (formData: LoginFormValuesType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}

const mapStateToProps = (state: AppStateType):MapStatePropsType => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);