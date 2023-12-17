import {
    Alert,
    Image,
    ImageBackground,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
  } from 'react-native';
  import React, {useEffect, useState} from 'react';
  import {COLORS, ICONS, IMAGES} from '../../Themes/Themes';
  import normalize from '../../utils/helpers/normalize';
  import {TouchableOpacity} from 'react-native';
  import TextInputWithButton from '../../Component/TextInputWithBotton';
  import ImageHeader from '../../Component/ImageHeader';
import { useNavigation } from '@react-navigation/native';
//   import {useIsFocused} from '@react-navigation/native';
  


const Login = props => {
      const navigation = useNavigation();
      useEffect(() => {
          const inactivityTimeout = 30 * 60 * 1000; // 30 minutes in milliseconds
          let inactivityTimer;
      
          const resetInactivityTimer = () => {
            clearTimeout(inactivityTimer);
            inactivityTimer = setTimeout(() => {
              handleInactivityTimeout();
            }, inactivityTimeout);
          };
      
          const handleInactivityTimeout = () => {
            console.log('User inactive for 30 minutes. Navigating to Home...');
             props.navigation.navigate('Home')
          };
      
          const handleUserActivity = () => {
            resetInactivityTimer();
          };
      
          // Set up event listeners for user activity
          const cleanup = () => {
            clearTimeout(inactivityTimer);
          };
      
          resetInactivityTimer();
      
          const eventListeners = [
            'keydown',
            'mousemove',
           'touchstart'
          ];
      
          eventListeners.forEach((eventType) => {
            window.addEventListener(eventType, handleUserActivity);
          });
      
          return () => {
            cleanup();
            eventListeners.forEach((eventType) => {
              window.removeEventListener(eventType, handleUserActivity);
            });
          };
        }, [props.navigation]);
    // const {role} = props?.route?.params;
    const [remember, setRemember] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState(false);
    const [eye, seteye] = useState(true);
   
  
    // const onfocus = useIsFocused();
    // useEffect(() => {
    //   if (onfocus) {
    //     setEmail('');
    //     setPassword('');
    //     setRemember(false);
    //   }
    // }, [onfocus]);
  

    return (
      <>
        
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
         
          <KeyboardAvoidingView
            style={{flex: 1}}
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
            <ScrollView
              contentContainerStyle={{
                paddingHorizontal: normalize(15),
                paddingBottom: normalize(50),
              }}>
              <ImageHeader
                // onPress={() => {
                //   props.navigation.goBack();
                // }}
                headertext={'Sign In'}
                description={
                  'Lorem Ipsum is simply dummy text of the printing and typesetting.'
                }
              />
              <TextInputWithButton
                show={email.length > 0 ? true : false}
                icon={true}
                height={normalize(50)}
                textColor={COLORS.buttonBlue}
                placeholder={'Email Address'}
                headertext={'Email Address'}
                placeholderTextColor={'#446189'}
                paddingLeft={normalize(25)}
                backgroundColor={'#F1F4F8'}
                borderRadius={normalize(10)}
                isheadertext={true}
                value={email}
                isleftIconVisible={true}
                leftimage={ICONS.email}
                tintColor={'#446189'}
                fontSize={normalize(13)}
                marginTop={normalize(30)}
                headertxtsize={normalize(13)}
                onChangeText={e => setEmail(e)}
                keyboardType={'email-address'}
              />
              <TextInputWithButton
                show={password.length > 0 ? true : false}
                icon={true}
                height={normalize(50)}
                textColor={COLORS.buttonBlue}
                placeholder={'Password'}
                placeholderTextColor={'#446189'}
                paddingLeft={normalize(25)}
                backgroundColor={'#F1F4F8'}
                borderRadius={normalize(10)}
                isheadertext={true}
                headertext={'Password'}
                value={password}
                isleftIconVisible={true}
                leftimage={ICONS.password}
                tintColor={'#446189'}
                fontSize={normalize(13)}
                marginTop={normalize(15)}
                headertxtsize={normalize(13)}
                onChangeText={v => setPassword(v)}
                secureTextEntry={eye == true ? true : false}
                isRightIconVisible={true}
                rightimage={eye == false ? ICONS.eye : ICONS.eyeclose}
                rightimageheight={eye == false ? normalize(15) : normalize(20)}
                rightimagewidth={eye == false ? normalize(15) : normalize(20)}
                onPress={() => {
                  seteye(!eye);
                }}
              />
              <View
                style={{
                  width: '100%',
                  alignSelf: 'center',
                  backgroundColor: COLORS.white,
                  height: normalize(40),
                  alignItems: 'center',
                  flexDirection: 'row',
                  marginTop: normalize(10),
                  justifyContent: 'space-between',
                  paddingHorizontal: normalize(20),
                  borderTopLeftRadius: normalize(12),
                  borderTopEndRadius: normalize(12),
                  borderRadius: normalize(12),
                  borderColor: COLORS.buttonBlue,
                  borderWidth: normalize(1),
                }}>
                <TouchableOpacity
                  onPress={() => setRole(false)}
                  style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View
                    style={{
                      height: normalize(16),
                      width: normalize(16),
                      borderRadius: normalize(8),
                      borderWidth: normalize(0.5),
                      borderColor: COLORS.greyText,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        height: normalize(10),
                        width: normalize(10),
                        borderRadius: normalize(5),
                        backgroundColor:
                          role == false ? COLORS.fontblue : COLORS.greyText,
                      }}></View>
                  </View>
                  <Text
                    style={{
                      color: '#4D5464',
                      fontSize: normalize(12),
                      fontWeight: '500',
                      marginLeft: normalize(5),
                    }}>
                    User
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setRole(true)}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginRight: normalize(20),
                  }}>
                  <View
                    style={{
                      height: normalize(16),
                      width: normalize(16),
                      borderRadius: normalize(8),
                      borderWidth: normalize(0.5),
                      borderColor: COLORS.greyText,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        height: normalize(10),
                        width: normalize(10),
                        borderRadius: normalize(5),
                        backgroundColor:
                          role == true ? COLORS.fontblue : COLORS.greyText,
                      }}></View>
                  </View>
                  <Text
                    style={{
                      color: '#4D5464',
                      fontSize: normalize(12),
                      fontWeight: '500',
                      marginLeft: normalize(5),
                    }}>
                    Owner
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: normalize(20),
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Pressable
                    onPress={() => {
                      setRemember(!remember);
                    }}>
                    <Image
                      resizeMode="contain"
                      source={ICONS.switch}
                      style={{
                        width: normalize(30),
                        height: normalize(18),
                        transform: [
                          {
                            rotate: remember ? '0deg' : '180deg',
                          },
                        ],
                      }}
                    />
                  </Pressable>
                  <Text
                    style={{
                      color: COLORS.black,
                      fontSize: normalize(12),
                      marginLeft: normalize(10),
                    }}>
                    Remember
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('RecoverPassword');
                  }}>
                  <Text
                    style={{
                      color: COLORS.fontBlack,
                      fontSize: normalize(13),
                    }}>
                    Recover Password
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                // onPress={() => {
                //   onpresssignin();
                //   // props?.navigation?.navigate('BottomTab', {
                //   //   screen: 'HomeStackScreen',
                //   //   params: {
                //   //     screen: 'Home',
                //   //   },
                //   // });
                // }}
                style={{
                  backgroundColor: COLORS.buttonBlue,
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  borderRadius: normalize(10),
                  height: normalize(50),
                  width: '100%',
                  marginTop: normalize(20),
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 2,
                    height: 2,
                  },
                  shadowOpacity: 0.5,
                  shadowRadius: 15,
                  elevation: 15,
                }}>
                <Text
                  style={{
                    color: COLORS.white,
                    fontSize: normalize(16),
                  }}>
                  Sign In
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  marginTop: normalize(25),
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                }}>
                <Text
                  style={{
                    color: COLORS.buttonBlue,
                    fontSize: normalize(12),
                    textAlign: 'center',
                    paddingHorizontal: normalize(5),
                  }}>
                  Don’t have an account?
                </Text>
                <TouchableOpacity>
                  <Text
                    style={{
                      color: COLORS.fontblue,
                      fontSize: normalize(12),
                      textAlign: 'center',
                      paddingHorizontal: normalize(5),
                    }}>
                    Sign Up
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  marginTop: normalize(25),
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  paddingHorizontal: normalize(20),
                }}>
                <View
                  style={{
                    marginRight: normalize(5),
                    borderColor: '#808080',
                    borderBottomWidth: normalize(0.5),
                    width: normalize(80),
                  }}></View>
                <Text
                  style={{
                    color: COLORS.buttonBlue,
                    fontSize: normalize(12),
                    textAlign: 'center',
                    paddingHorizontal: normalize(5),
                  }}>
                  Or Continue With
                </Text>
                <View
                  style={{
                    marginLeft: normalize(5),
                    borderColor: '#808080',
                    borderBottomWidth: normalize(0.5),
                    width: normalize(80),
                  }}></View>
              </View>
              <View
                style={{
                  marginTop: normalize(25),
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  style={{marginRight: normalize(10)}}
                  onPress={() => {
                    Alert.alert('Feature comming soon!');
                  }}>
                  <Image
                    style={{height: normalize(40), width: normalize(40)}}
                    source={ICONS.googlelogin}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    Alert.alert('Feature comming soon!');
                  }}>
                  <Image
                    style={{height: normalize(40), width: normalize(40)}}
                    source={ICONS.facebooklogin}
                  />
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  color: '#5A5A5A',
                  fontSize: normalize(12),
                  textAlign: 'center',
                  paddingHorizontal: normalize(30),
                  marginTop: normalize(20),
                  marginBottom: normalize(50),
                }}>
                By continuing you indicate that you read and agreed to the Terms
                of Use
              </Text>
            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </>
    );
  };
  
  export default Login;
  
  const styles = StyleSheet.create({});
  