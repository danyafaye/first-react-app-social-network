import axios from "axios";
import { UserType } from '../Types/types';

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "4e0ec27d-adef-4957-9770-3c7416fb45cc"}
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