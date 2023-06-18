import React from "react";
import { ProFormText, type ProFormItemProps } from "@ant-design/pro-components";
import styled from "styled-components";

type propsType = ProFormItemProps & {};

const StyledInput = styled(ProFormText)``;

const Input = (props: propsType) => {
  return (
    <StyledInput
      placeholder=""
      {...props}
      style={{ marginBottom: 0 }}
      fieldProps={{
        ...props?.fieldProps,
        style: {
          height: 40,
          ...props?.fieldProps?.style,
        },
      }}
    />
  );
};

export default Input;
