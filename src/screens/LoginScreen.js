import { Alert, Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../FireBaseConfig';


const LoginHome = ({ navigation }) => {

    const [value, setValue] = React.useState({
        email: '',
        password: '',
    })

    async function signIn() {

        if (value.email === '' || value.password === '') {
            Alert.alert(
                'Hata Mesajı',
                'Password and Email are can not be empty',
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    {
                        text: 'OK',
                        onPress: () => console.log('OK Pressed'),
                    },
                ],
                { cancelable: false }
            );
            return;
        }
        try {
            await signInWithEmailAndPassword(FIREBASE_AUTH, value.email, value.password);
            navigation.navigate('Home');
        } catch (error) {
            Alert.alert(
                'Hata Mesajı',
                error.message || error.toString(),
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    {
                        text: 'OK',
                        onPress: () => console.log('OK Pressed'),
                    },
                ],
                { cancelable: false }
            );
        }
    }
    return (
        <View>
            <View style={{ backgroundColor: 'orange', width: '100%', height: '40%' }}>
                <Text style={{ color: 'white', textAlign: 'center ', justifyContent: 'center', marginLeft: '38%', fontSize: 40, marginTop: '50%' }}>Login</Text>
            </View>
            <View style={{ height: '60%', backgroundColor: 'white' }}>
                <View style={{ backgroundColor: 'white', width: '100%', borderTopRightRadius: 100 }}>
                    <Text style={{ marginLeft: '20%', marginTop: '8%', color: '#101621' }}>Email</Text>
                    <View>
                        <TextInput
                            style={{ width: '57%', marginLeft: '20%', height: 40, borderColor: '#101621', borderWidth: 1, paddingHorizontal: 10, borderRadius: 10, margin: '1%' }}
                            placeholder="✉️Please enter your mail"
                            placeholderTextColor={'#C5CBD3'}
                            value={value.email}
                            onChangeText={(text) => setValue({ ...value, email: text })}
                        />
                    </View>
                    <Text style={{ marginLeft: '20%', marginTop: '5%', color: '#101621' }}>Password</Text>
                    <View>
                        <TextInput
                            style={{ width: '57%', marginLeft: '20%', height: 40, borderColor: '#101621', borderWidth: 1, paddingHorizontal: 10, borderRadius: 10, margin: '1%' }}
                            placeholder="🔑Please enter your password"
                            placeholderTextColor={'#C5CBD3'}
                            onChangeText={(text) => setValue({ ...value, password: text })}
                            secureTextEntry={true}
                        />
                    </View>

                    <TouchableOpacity onPress={() => signIn()} style={{ backgroundColor: 'orange', height: '11%', justifyContent: 'center', width: '57%', marginLeft: '20%', marginTop: '5%', borderRadius: 5 }}>
                        <Text style={{ textAlign: 'center', color: 'white', fontSize: 25 }}>Login</Text>
                    </TouchableOpacity>

                    <View style={{ marginTop: '10%', marginLeft: '20%' }}>
                        <Text>
                            Don’t you have an account?
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                            <Text style={{ color: 'orange', marginTop: '-5.6%', marginLeft: '62%', marginBottom: '-30%', fontWeight: 'bold' }}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View >
    )
}

export default LoginHome

const styles = StyleSheet.create({

})