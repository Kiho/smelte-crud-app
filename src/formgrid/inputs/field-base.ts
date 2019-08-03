export function onCreate(input: InputElement, arg: IInputArg) {
    // Sets only once in lifetime.
	const { uuid, dataset, setError } = arg;
    input.onkeyup = (e) => {
        // Should share state with component instance.
        if (arg.submit) {
            const error = input.checkValidity() ? '' : input.validationMessage;
            setError(error);
            arg.error = error;            
        }
    };
    input.setError = (error) => {
        setError(error, true);
        arg.error = error;
        arg.submit = true;
    };
    if (uuid) {
        input.setAttribute('id', uuid);
    }
    if (dataset) {
        for (let k in dataset) { 
            input.setAttribute(`data-${k}`, dataset[k]);
        }
    }
}

export function validate(input: InputElement) {
    if (input.checkValidity) {
        input.setError(input.validationMessage);
    }
    return input.checkValidity();
}

type SetError =  (error: string, submit?: boolean) => void;
type InputElement = HTMLInputElement & { setError: SetError };

interface IInputArg {
    uuid: string ; 
    dataset: any;
    submit: boolean;
    error: string;
    setError: SetError;
}
