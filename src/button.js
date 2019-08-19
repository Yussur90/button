import React, { useState } from "react";
import { css } from "emotion";

export default function Button({ url, onClick }) {
  const [loading, setLoading] = useState(false);

  const loginFunction = () => {
    setLoading(true);
    setTimeout(function() {
      setLoading(false);
    }, 9000);
  };

  const buttonText = "Login";

  return (
    <div
      className={css`
        button{
          background-color: #5737cb;
          width:290px;
          height:40px;
              border-radius: 5px;
              color:white;
        }


        }
      `}
      onClick={() => loginFunction()}
      data-testid="container"
    >
      {}
      <button data-testid="button" onClick={onClick}>
        {buttonText}
      </button>
      {loading && <div data-testid="loading">loading</div>}
    </div>
  );
}
