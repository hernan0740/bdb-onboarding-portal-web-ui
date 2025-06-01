import { Button, InputGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

export interface FormComponentProps {
    title: string;
    url: string;
    buttonText?: string;
    inputs: InputField[];
}
export interface InputField {
    name: string;
    type: string;
    placeholder: string;
    required?: boolean;
    className?: string;
}

function FormComponent({ title, url, buttonText = "Enviar", inputs }: FormComponentProps) {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        window.location.href = url;
    };

    return (
        <div>
            <div className="movieContainer__title">
                {title}
            </div>
            <Form noValidate onSubmit={handleSubmit}>
                {inputs.map((input, index) => (
                    <InputGroup className="mb-3" hasValidation key={index}>
                        <input
                            name={input.name}
                            type={input.type}
                            placeholder={input.placeholder}
                            required={input.required}
                            className={input.className}
                        />
                    </InputGroup>
                ))}
                <Button type="submit" variant="secondary" size="lg">
                    {buttonText}
                </Button>
            </Form>
        </div>
    );
}

export default FormComponent;
