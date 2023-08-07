import { FC, useState } from "react";
import { WelcomeFormProps } from "../../modals/welcome-form-props";

export const WelcomeForm: FC<WelcomeFormProps> = ({
  handelSuccessFormSubmission,
}) => {
  const [state, setSate] = useState({
    form: {
      isValid: true,
      apiKey: "",
    },
  });

  const setFormToInvalidState = (): void => {
    setSate({
      ...state,
      form: {
        ...state.form,
        isValid: false,
      },
    });
  };

  const setFormToValidState = (): void => {
    setSate({
      ...state,
      form: {
        ...state.form,
        isValid: true,
      },
    });
  };

  const setFormApiKeyValue = (value: string): void => {
    setSate({
      ...state,
      form: {
        ...state.form,
        apiKey: value,
      },
    });
  };

  const onSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    const inputValue = state.form.apiKey;

    if (!inputValue) {
      setFormToInvalidState();

      return;
    }

    setFormToValidState();
    handelSuccessFormSubmission(inputValue);
  };

  const onChangeApiKeyInput = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const inputValue = e.target.value;

    setFormApiKeyValue(inputValue);
  };

  return (
    <form onSubmit={onSubmit}>
      <h3 className="welcome-form__heading">
        Please add your Open AI API key in the input below
      </h3>

      <a
        href="https://platform.openai.com/account/api-keys"
        target="_blank"
        className="welcome-form__link"
      >
        Click here to get your key
      </a>

      <input
        type="text"
        placeholder="OpenAI API Key"
        className="welcome-form__input"
        onChange={onChangeApiKeyInput}
      />

      <input type="submit" value="Submit" className="welcome-form__btn" />

      {state.form.isValid ? null : (
        <p className="welcome-form__error-message">Invalid API Key</p>
      )}
    </form>
  );
};
