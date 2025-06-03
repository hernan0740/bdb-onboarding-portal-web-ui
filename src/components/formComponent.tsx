import React, { useState } from "react";
import { Button, InputGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import {createUser} from "../services/userServices";

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

function FormComponent({
  title,
  url,
  buttonText = "Enviar",
  inputs,
}: FormComponentProps) {
  const [formData, setFormData] = useState<Record<string, string>>(
    inputs.reduce((acc, curr) => ({ ...acc, [curr.name]: "" }), {}),
  );

  const [validated, setValidated] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (!form.checkValidity()) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    setValidated(true);

    try {
      console.log("Datos enviados:", formData);
      await createUser({...formData});
      setFormData(
        inputs.reduce((acc, curr) => ({ ...acc, [curr.name]: "" }), {}),
      );
      setValidated(false);
    } catch (error) {
      console.error("Error durante el envío del formulario:", error);
    }
  };

  return (
    <div>
      <div className="movieContainer__title">{title}</div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        {inputs.map((input, index) => (
          <InputGroup className="mb-3" hasValidation key={index}>
            <Form.Control
              name={input.name}
              type={input.type}
              placeholder={input.placeholder}
              required={input.required}
              className={input.className}
              value={formData[input.name]}
              onChange={handleChange}
              isInvalid={validated && !formData[input.name]}
            />
            <Form.Control.Feedback type="invalid">
              Por favor, ingresa {input.placeholder.toLowerCase()}.
            </Form.Control.Feedback>
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
