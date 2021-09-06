import axios from "axios";
import { UserType } from '../Types/types';

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "03e8cca7-0db1-4d09-a341-973c5c21a426"}
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