import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { appStyles } from '../../../assets/styles';
import { Input, Submit } from '../../components';
const Login = (props) => {
  const navigation = useNavigation();
  const route = useRoute();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const addUser = (addEmail, addPassword, addLastName, addFirstName) => {
    props.setUsers((current) => [
      ...current,
      {
        id: current.length,
        email: addEmail,
        password: addPassword,
        lastName: addLastName,
        firstName: addFirstName,
      },
    ]);
  };

  useFocusEffect(() => {
    if (
      !route.params.addedEmail ||
      !route.params.addedPassword ||
      !route.params.addedLastName ||
      !route.params.addedFirstName
    )
      return;
    addUser(
      route.params.addedEmail,
      route.params.addedPassword,
      route.params.addedLastName,
      route.params.addedFirstName
    );
    route.params.addedEmail = null;
    route.params.addedPassword = null;
    route.params.addedLastName = null;
    route.params.addedFirstName = null;
  });

  const setLogin = () => {
    props.users.map((user) => {
      if (user.email === email && user.password === password) {
        props.setLogin(true);
      } else {
        setErrorMessage('Email ou mot de passe incorrecte');
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={appStyles.title1}>Connection</Text>
      <View style={styles.form}>
        <Input
          label={'Email'}
          value={email}
          onChangeText={setEmail}
          placeholder='Saisissez votre email'
        />
        <Input
          secureTextEntry={true}
          label={'Mot de passe'}
          value={password}
          onChangeText={setPassword}
          placeholder='Saisissez votre mot de passe'
        />
        <Text style={[styles.errorMessage, appStyles.text]}>
          {errorMessage}
        </Text>
        <Submit label={'Se connecter'} onPress={setLogin} />
      </View>
      <Pressable
        onPress={() => {
          navigation.navigate('CreateUser');
        }}
      >
        <Text style={styles.signInMessage}>Créer un compte</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 30,
  },
  form: {
    width: '100%',
    alignItems: 'center',
  },
  errorMessage: {
    marginTop: 15,
    color: '#D64045',
  },
  signInMessage: {
    marginTop: 20,
    color: 'grey',
    fontSize: 17,
  },
});

export default Login;
