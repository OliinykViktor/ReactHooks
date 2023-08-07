import { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import useInputWithValidation from '../../customHooks/useInputWithValidation'

const Form = () => {

    const input = useInputWithValidation('');
    const textArea = useInputWithValidation('');

    const myRef = useRef(0);

    useEffect(() => {
        myRef.current = input.value;
    })

    const color = input.validationInput(input.value)?'text-danger':'text-muted'
    return (
        <Container>
            <form className="w-50 border mt-5 p-3 m-auto bg-light rounded">
                <div className="mb-5 ">
                <input 
                        value={`${input.value} / ${textArea.value}`} 
                        type="text" 
                        className="form-control text-muted" 
                        readOnly
                        />
                    <label 
                        htmlFor="exampleFormControlInput" 
                        className="form-label mt-3"
                        >
                        Email address
                    </label>
                    <input 
                        onChange={input.onChange} 
                        type="email" 
                        value={input.value}
                        className={`form-control ${color}`}
                        id="exampleFormControlInput"
                        placeholder="example@example.com"
                        />
                </div>
                <div className="mb-5">
                    <label 
                        htmlFor="exampleFormControlInput" 
                        className="form-label"
                        >
                        Textarea
                    </label>
                    <textarea
                        onChange={textArea.onChange}
                        value={textArea.value}  
                        className="form-control" 
                        id="exampleFormControlInput"
                        placeholder="Example textarea"
                        rows={3}>
                    </textarea>
                </div>
            </form>
        </Container>
    );
};

export default Form;