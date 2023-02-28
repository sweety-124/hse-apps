import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

const FormSubmission = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    console.log('name',name)
    // fetch('https://your-api-url.com/submit-form', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ name, email })
    // })
    // .then(response => {
    //   if (response.ok) {
    //     Alert.alert('Form submitted successfully');
    //   } else {
    //     Alert.alert('Error submitting form');
    //   }
    // })
    // .catch(error => {
    //   console.error(error);
    //   Alert.alert('Error submitting form');
    // });
  };

  return (
    <View>
      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default FormSubmission;
