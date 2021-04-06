import { Scope } from '@unform/core';
import { Form } from '@unform/web';

import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { RegisterUser } from '../../../store/RegisterUser/RegisterUser.action';
import { allEmailsUsers } from '../../../store/RegisterUser/RegisterUser.selectors';
import getZipCodeAdress from '../../../utils/getZipCode';

import { intervalToDuration } from 'date-fns';
import cpfMask from '../../../utils/cpfMask';
import zipCodeMask from '../../../utils/zipCodeMask';
import handleValidationCpf from '../../../utils/handleValidationCpf';
import * as yup from 'yup';

import Input from '../Input';

const FormRegister = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const allEmails = useSelector((state) => allEmailsUsers(state), shallowEqual);

  const formRef = useRef(null);

  function onChangeCPFData(e) {
    const cpf = e.target.value;
    formRef.current.setFieldValue('cpf', cpfMask(cpf));
  }

  async function onChangeZipCode(e) {
    const addressErrorApi = formRef.current.getErrors();
    if (addressErrorApi['address.zip_code'])
      formRef.current.setFieldError('address.zip_code', '');

    const zipCode = zipCodeMask(e.target.value);
    formRef.current.setFieldValue('address.zip_code', zipCode);

    if (zipCode.length === 9) {
      try {
        const response = await getZipCodeAdress(zipCode);
        formRef.current.setFieldValue('address.street', response.logradouro);

        if (response.erro) throw new Error(response.erro);
      } catch (err) {
        formRef.current.setFieldError(
          'address.zip_code',
          'Zip Code is Invalid!'
        );
      }
    }
  }

  async function handleSubmit(data, { reset }) {
    try {
      const addressErrorApi = formRef.current.getErrors();
      if (addressErrorApi['address.zip_code'])
        throw new yup.ValidationError.inner(
          'Zip Code is incomplet!',
          'address.zip_code'
        );

      formRef.current.setErrors({});
      const schema = yup.object().shape({
        password: yup
          .string()
          .required('Password is required!')
          .min(6, 'The password need have 6 characters'),
        birth_date: yup.string().required('Birth Date is required!'),
        email: yup
          .string()
          .email('E-mail is invalid!')
          .required('E-mail is required!'),
        name: yup.string().required('Name is required!'),
        address: yup.object().shape({
          zip_code: yup.string(),
          address: yup.string(),
        }),
        cpf: yup.string(),
        number: yup.number(),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      if (data.cpf.length && data.cpf.length < 14) {
        formRef.current.setFieldError('cpf', 'CPF is incomplet!');
        throw new yup.ValidationError.inner('CPF is incomplet!', 'cpf');
      }

      if (data.cpf.length >= 14 && !handleValidationCpf(data.cpf)) {
        formRef.current.setFieldError('cpf', 'CPF is invalid!');
        throw new yup.ValidationError.inner('CPF is invalid!', 'cpf');
      }

      if (data.address.zip_code.length && data.address.zip_code.length < 9) {
        formRef.current.setFieldError(
          'address.zip_code',
          'Zip Code is incomplet!'
        );
        throw new yup.ValidationError.inner(
          'Zip Code is incomplet!',
          'address.zip_code'
        );
      }

      const emailAlreadyExists = allEmails.find(
        (email) => email === data.email
      );

      if (emailAlreadyExists) {
        formRef.current.setFieldError('email', 'E-mail already exists!');
        throw new yup.ValidationError.inner('E-mail already exists!', 'email');
      }

      const { years: birthDate } = intervalToDuration({
        start: new Date(data.birth_date),
        end: new Date(),
      });

      if (birthDate <= 12) {
        formRef.current.setFieldError(
          'birth_date',
          'You must be over 12 for register!'
        );
        throw new yup.ValidationError.inner(
          'You must be over 12 for register!',
          'birth_date'
        );
      }

      dispatch(RegisterUser(data));
      reset();
      alert("You're now registred!");
      history.push('/Login');
    } catch (err) {
      const validationErrors = {};
      if (err instanceof yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    }
  }

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Input name="name" placeholder="Name *" id="name" />
      <Input name="email" id="email" placeholder="E-mail *" />
      <Input
        name="birth_date"
        id="birth_date"
        type="date"
        placeholder="Birth Date *"
      />
      <Input
        name="password"
        id="password"
        placeholder="Password *"
        type="password"
      />
      <Input
        name="cpf"
        id="cpf"
        placeholder="CPF"
        type="string"
        maxLength={14}
        onChange={(e) => onChangeCPFData(e)}
      />
      <Scope path="address">
        <Input
          name="zip_code"
          id="zip_code"
          placeholder="Zip Code"
          type="string"
          maxLength={9}
          onChange={(e) => onChangeZipCode(e)}
        />
        <Input name="number" id="number" placeholder="Number" type="number" />
        <Input
          name="street"
          id="street"
          placeholder="Street"
          type="text"
          disabled
        />
      </Scope>
      <button type="submit">Enviar</button>
    </Form>
  );
};

export default FormRegister;
