import { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";

const Form = () => {

    const [text, setText] = useState('')
    const myRef = useRef(0);

    useEffect(() => {
        console.log(myRef.current++);
    })

    // console.log(text);
    return (
        <Container>
            <form className="w-50 border mt-5 p-3 m-auto bg-light rounded">
                <div className="mb-5 ">
                    <label 
                        htmlFor="exampleFormControlInput" 
                        className="form-label"
                        >
                        Email address
                    </label>
                    <input 
                        onChange={(e) => setText(e.target.value)} 
                        type="email" 
                        className="form-control" 
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
                        onChange={() => myRef.current++}  
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