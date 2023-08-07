import { useState } from "react";

const useInputWithValidation = (init) => {
    const [value, setValue] = useState(init)

    const onChange = (e) => {
        return setValue(e.target.value)
    }

    const validationInput = (value) => {
        return value.search(/\d/) >= 0;
    }

    return {value, onChange, validationInput}
};

export default useInputWithValidation;