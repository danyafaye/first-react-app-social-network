import React from "react";
import { InjectedFormProps, reduxForm } from "redux-form";
import { required } from "../../utils/validators/validators";
import { createField, GetStringKeys, Input } from "../../components/common/FormsControls/FormsControls";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
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
            {createField<LoginFormValuesTypeKeys>("Email", "email", [required], Input, [], "Логин для тестового аккаунта: free@samuraijs.com")}
            {createField<LoginFormValuesTypeKeys>("Password", "password", [required], Input, {type: "password"}, "Пароль для тестового аккаунта: free")}
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

export type LoginFormValuesType = {
    captcha: string
    rememberMe: boolean
    password: string
    email: string
}

type LoginFormValuesTypeKeys = GetStringKeys<LoginFormValuesType>

export const LoginPage:React.FC = (props) => {
    const captchaUrl = useSelector((state: AppStateType)=>state.auth.captchaUrl)
    const isAuth = useSelector((state:AppStateType)=>state.auth.isAuth)
    const dispatch = useDispatch()


    const onSubmit = (formData: LoginFormValuesType) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha))
    }
    if (isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
    </div>
}
