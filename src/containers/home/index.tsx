import React, { useState } from 'react';
import { Layout } from '../../components/layout/';
import { Form } from '../../components/form/';
import { Button } from '../../components/button/';
import { Input } from '../../containers/input/';
import { navigate } from '../../navigation-service';

const Home = () => {
  const [ values, setValues ] = useState({ firstName: '', lastName: ''})
  const handlerChange = (name: string, text: string): void => setValues({...values, [name]: text})
  const handleClick = (value: object): void => navigate('About', value);
  return(
    <Layout>
      <Form>
        <Input 
          name='firstName'
          title='Nombre'
          value={values.firstName}
          onChangeText={handlerChange}
        />
        <Input 
          name='lastName'
          title='Apellido'
          value={values.lastName}
          onChangeText={handlerChange}
        />
        <Button 
          title={'Save'}
          onPress={() => handleClick(values)}
        />
      </Form>
    </Layout>
  )
}

export {
  Home 
}