import axios from "axios";
import { UserType } from '../Types/types';

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "ec60d246-4717-4541-adc2-20e30e3bdf4b"}
});

export enum ResultCodesEnum {
    Success=0,
    Error=1,
}
export enum ResultCodeForCaptchaEnum {
    CaptchaIsRequired=10
}

export type GetItemsType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}
export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D
    messages: Array<string>
    resultCode: RC
}