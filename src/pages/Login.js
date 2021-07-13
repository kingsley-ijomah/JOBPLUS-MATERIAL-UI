import React from 'react'
import Form from '../components/Form';
import Controls from '../components/controls/Controls';
import PaperForm from '../components/PaperForm';

export default function Login(props) {

  return (
    <PaperForm>
      <Form>
        <Controls.FormGroupCustom>
          <Controls.InputLabelCustom color='primary' label="Email" />
          <Controls.TextFieldCustom placeholder="Email" />
        </Controls.FormGroupCustom>

        <Controls.FormGroupCustom>
          <Controls.InputLabelCustom color='primary' label="Password" />
          <Controls.TextFieldCustom type="password" placeholder="Password" />
        </Controls.FormGroupCustom>

        <Controls.FormGroupCustom>
          <Controls.ButtonCustom text="Login" />
        </Controls.FormGroupCustom>
      </Form>
      <p className={'Footer'}>Don't have an account? <a href="/register">Register</a></p>
    </PaperForm>
  )
}
