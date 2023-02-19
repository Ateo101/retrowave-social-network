import s from './FormAreasStyles.module.css'

export const FormArea = (props: any) => {
    const isError = props.meta.error && props.meta.touched
    return (
        <div className={s.textareaComponent}>
            {props.children}
            <div style={{marginBottom: "10px", marginLeft: "10px"}}>
                {isError && <span className={s.error}> {props.meta.error} </span>}
            </div>
        </div>
    )
}

export const FormAreas = (props: any) => {
    return <FormArea {...props}
                     children={<textarea {...props.input} placeholder={props.placeholder}/>}></FormArea>
}

export const Input = (props: any) => {
    return <FormArea {...props}
                     children={<input {...props.input} placeholder={props.placeholder}/>}></FormArea>
}