export type FieldValidatorType = (value: string) => string | undefined

export const required: FieldValidatorType = (value: string) => {
    if(value) return undefined;
    return "Field is required";
}

export const maxLengthCreator = (maxLength:number):FieldValidatorType => (value) => {
    if(value.length > maxLength) return `Max Length is ${maxLength} symbols`;
    return undefined;
}
