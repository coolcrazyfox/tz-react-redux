export const required = value => {
    if (value) return undefined;
    return 'Field is required';
}
export const minLength = (value) => {
    if (value && value.length < 2) return "Текст должен быть больше одного символа";
    return undefined;
}
export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Текст должен быть не больше  ${maxLength} символа`;
    return undefined;
}
