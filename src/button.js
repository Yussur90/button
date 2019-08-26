import React from "react";

import styled from "@emotion/styled";

export default function Button({
  onClick,
  children,
  className,
  style,
  theme,
  type,
  disabled,
  loading,
  progress
}) {
  const Button = styled.button`
    background-color: ${theme};
    width: 407.6px;
    height: 55px;
    border-radius: 6px;
    cursor: pointer;
    ${style};
  `;

  return (
    <Button
      data-testid="button"
      onClick={onClick}
      type={type || "submit"}
      disabled={disabled || loading}
    >
      {loading ? (
        <div progress={progress} data-testid="loading">
          loading
        </div>
      ) : (
        children
      )}
    </Button>
  );
}
