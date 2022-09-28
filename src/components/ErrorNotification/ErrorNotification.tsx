/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

type Props = {
  setError: (err: boolean) => void;
};

export const ErrorNotification: React.FC<Props> = ({ setError }) => {
  return (
    <div
      data-cy="ErrorNotification"
      className="notification is-danger is-light has-text-weight-normal"
    >
      <button
        data-cy="HideErrorButton"
        type="button"
        className="delete"
        onClick={() => setError(false)}
      />

      Wrong URL
    </div>
  );
};
