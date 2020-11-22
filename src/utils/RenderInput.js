import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import { AiFillEye } from "react-icons/ai";
import styled from "styled-components";
import { contextApi } from "../services/Context";

const InputWrapper = styled.div`
  .form-group {
    position: relative;
  }
  .show {
    position: absolute;
    top: 37px;
    right: 5px;
  }
  .show:hover {
    cursor: pointer;
  }
`;

const RenderInput = ({
  label,
  type = "text",
  name,
  onChange,
  value,
  textColor,
  inputBg,
}) => {
  // const { showPassToggle } = useContext(contextApi);
  return (
    // <InputWrapper>
    <Form.Group controlId={`formBasic${label}`}>
      <Form.Label style={{ color: textColor }}>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={`Enter ${label}`}
        name={name}
        value={value}
        onChange={onChange}
        style={{ backgroundColor: inputBg }}
      />
      {/* {type === "password" && (
          <i className="show" onClick={showPassToggle}>
            <AiFillEye />
          </i>
        )} */}
    </Form.Group>
    // </InputWrapper>
  );
};

export default RenderInput;
