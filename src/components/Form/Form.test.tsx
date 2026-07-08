import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form } from './Form';

function renderForm() {
  return render(<Form />);
}

function getFields() {
  return {
    name: screen.getByLabelText(/namn|name/i),
    email: screen.getByLabelText(/e-?post|e-?mail/i),
    message: screen.getByLabelText(/meddelande|message/i),
  };
}

function getSubmitButton() {
  return screen.getByRole('button', {
    name: /begär en offert|request quote/i,
  });
}

function getResetButton() {
  return screen.getByRole('button', { name: /rensa formulär|clear form/i });
}

describe('Form', () => {
  it('renders the name, email and message fields', () => {
    renderForm();
    const { name, email, message } = getFields();
    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(message).toBeInTheDocument();
  });

  it('shows a required error on every field when submitted empty', async () => {
    const user = userEvent.setup();
    renderForm();

    await user.click(getSubmitButton());

    expect(
      screen.getAllByText(/fältet är obligatoriskt|this field is required/i)
    ).toHaveLength(3);
    expect(getFields().name).toHaveFocus();
  });

  it('shows an invalid email error for a badly formatted email', async () => {
    const user = userEvent.setup();
    renderForm();
    const { name, email, message } = getFields();

    await user.type(name, 'Kalle Anka');
    await user.type(email, 'kalle-snurre-se');
    await user.type(message, 'Hej, jag vill ha en offert.');
    await user.click(getSubmitButton());

    expect(
      screen.getByText(/ange en giltig e-postadress|enter a valid email/i)
    ).toBeInTheDocument();
    expect(
      screen.queryByText(/fältet är obligatoriskt|this field is required/i)
    ).not.toBeInTheDocument();
  });

  it('shows a success message and clears the fields after a valid submit', async () => {
    const user = userEvent.setup();
    renderForm();
    const { name, email, message } = getFields();

    await user.type(name, 'Kalle Anka');
    await user.type(email, 'kalle@example.com');
    await user.type(message, 'Hej, jag vill ha en offert.');
    await user.click(getSubmitButton());

    expect(
      screen.getByText(/tack! vi hör av oss|thanks! we'll be in touch/i)
    ).toBeInTheDocument();
    expect(name).toHaveValue('');
    expect(email).toHaveValue('');
    expect(message).toHaveValue('');
  });

  it('clears errors and the success message when the form is reset', async () => {
    const user = userEvent.setup();
    renderForm();

    await user.click(getSubmitButton());
    expect(
      screen.getAllByText(/fältet är obligatoriskt|this field is required/i)
    ).toHaveLength(3);

    await user.click(getResetButton());

    expect(
      screen.queryByText(/fältet är obligatoriskt|this field is required/i)
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(/tack! vi hör av oss|thanks! we'll be in touch/i)
    ).not.toBeInTheDocument();
  });
});
