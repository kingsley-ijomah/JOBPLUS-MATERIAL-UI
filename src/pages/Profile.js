import React from 'react';
import Hero from '../components/Hero';
import Controls from '../components/controls/Controls';
import Form from '../components/Form';
import PaperForm from '../components/PaperForm';

export default function Profile(props) {
  return (
    <React.Fragment>
      <Hero heroType='plain' />

      <PaperForm>
        <Form>
          <Controls.FormGroupCustom>
            <Controls.InputLabelCustom color='primary' label="Desired job title" />
            <Controls.TextFieldCustom placeholder="Desired job title" />
          </Controls.FormGroupCustom>

          <Controls.FormGroupCustom>
            <Controls.InputLabelCustom color='primary' label="Min per annum salary" />
            <Controls.TextFieldCustom placeholder="Min per annum salary" />
          </Controls.FormGroupCustom>

          <Controls.FormGroupCustom>
            <Controls.InputLabelCustom color='primary' label="Job type" />
            <Controls.CheckboxCustom value='Permanent' />
            <Controls.CheckboxCustom value='Temporary' />
            <Controls.CheckboxCustom value='Conract' />
          </Controls.FormGroupCustom>

          <Controls.FormGroupCustom>
            <Controls.InputLabelCustom color='primary' label="Sector" />
            <Controls.SelectCustom />
          </Controls.FormGroupCustom>

          <Controls.FormGroupCustom>
            <Controls.InputLabelCustom color='primary' label="Experience" />
            <Controls.TextareaCustom placeholder="Experience" />
          </Controls.FormGroupCustom>

          <Controls.FormGroupCustom>
            <Controls.ButtonCustom text="Submit" />
          </Controls.FormGroupCustom>
        </Form>
      </PaperForm>
    </React.Fragment>
  )
}