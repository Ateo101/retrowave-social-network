export const required = (value: string) => {
    return value ? undefined : 'Field is required'
}

export const maxLengthCreator = (maxLength: number) => (value: string) => {
    return value.length <= maxLength ? undefined : `Message length should be ${maxLength} symbols or less`
}