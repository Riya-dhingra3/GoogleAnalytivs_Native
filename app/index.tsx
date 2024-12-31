// import { View, Button,StyleSheet } from 'react-native';
// import analytics from '@react-native-firebase/analytics';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Button
//         title="Add To Basket"
//         onPress={async () =>
//           await analytics().logEvent('basket', {
//             id: 3745092,
//             item: 'mens grey t-shirt',
//             description: ['round neck', 'long sleeved'],
//             size: 'L',
//           })
//         }
//       />
//       <Button
//         title="Press me"
//         // Logs in the firebase analytics console as "select_content" event
//         // only accepts the two object properties which accept strings.
//         onPress={async () =>
//           await analytics().logSelectContent({
//             content_type: 'clothing',
//             item_id: 'abcd',
//           })
//         }
//       />
//     </View>
//   );
// }

// const styles=StyleSheet.create({
//     container:{
//         marginHorizontal:20,
//         flex:1,
//         justifyContent:'center'
//     },
//     input:{
//         marginVertical: 4,
//         height:50,
//         borderWidth:1,
//         borderRadius:4,
//         padding:10,
//         backgroundColor:"#fff"
//     }
// })

// import React, { useEffect } from 'react';
// import { View, Button, StyleSheet, Text } from 'react-native';
// import analytics from '@react-native-firebase/analytics';

// const App = () => {
//   useEffect(() => {
//     // Enable analytics collection and set user consent
//     const initializeAnalytics = async () => {
//       await analytics().setAnalyticsCollectionEnabled(true);
//       await analytics().setConsent({
//         analytics_storage: true,
//         ad_storage: true,
//       });

//       console.log('Firebase Analytics Initialized');
//     };

//     initializeAnalytics();
//   }, []);

//   const logCustomEvent = async () => {
//     try {
//       // Log a custom event
//       await analytics().logEvent('custom_purchase_event', {
//         currency: 'USD',
//         value: 19.99,
//         transaction_id: 'txn_654321',
//         item_name: 'Premium Membership',
//       });

//       console.log('Custom event logged successfully!');
//     } catch (error) {
//       console.error('Error logging custom event:', error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Firebase Analytics Example</Text>
//       <Button title="Log Custom Event" onPress={logCustomEvent} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 16,
//   },
//   title: {
//     fontSize: 18,
//     marginBottom: 20,
//   },
// });

// export default App;



// // import react, { useEffect,useState } from 'react';
// // import { View, Button,StyleSheet, KeyboardAvoidingView, TextInput,Text, ActivityIndicator } from 'react-native';
// // import analytics from '@react-native-firebase/analytics';

// // export default function App() {
// //   const [email,setEmail]=useState(' ');
// //   const [password,setPassword]=useState(' ');
// //   const [loading,setLoading]=useState(false);

// //   const SignIn = () =>{

// //   }

// //   const SignUp = () =>{
    
// //   }
// //   return (
// //     <View style={styles.container}>
// //         <KeyboardAvoidingView behavior='padding'>
// //             <TextInput 
// //                 style={styles.input}
// //                 value={email}
// //                 onChangeText={setEmail}
// //                 autoCapitalize='none'
// //                 keyboardType='email-address'
// //                 placeholder='Email'
// //             />
// //             <TextInput 
// //                 style={styles.input}
// //                 value={password}
// //                 onChangeText={setPassword}
// //                 placeholder='password'
// //                 secureTextEntry
// //             />
// //             {loading? (<ActivityIndicator size={'small'} style={{margin:28}}/>):( 
// //                 <>
// //                     <Button onPress={SignUp} title="SignUp"/>
// //                     <Button onPress={SignIn} title="SignIn"/>
// //                 </>
// //             )}
           
// //         </KeyboardAvoidingView>
// //       {/* <Button
// //         title="Add To Basket"
// //         onPress={async () =>
// //           await analytics().logEvent('basket', {
// //             id: 3745092,
// //             item: 'mens grey t-shirt',
// //             description: ['round neck', 'long sleeved'],
// //             size: 'L',
// //           })
// //         }
// //       /> */}
// //     </View>
// //   );
// // }

// // const styles=StyleSheet.create({
// //     container:{
// //         marginHorizontal:20,
// //         flex:1,
// //         justifyContent:'center'
// //     },
// //     input:{
// //         marginVertical: 4,
// //         height:50,
// //         borderWidth:1,
// //         borderRadius:4,
// //         padding:10,
// //         backgroundColor:"#fff"
// //     }
// // })


// import React, { useEffect, useState } from 'react';
// import { View, Text, Button, StyleSheet, ActivityIndicator } from 'react-native';
// import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
// import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

// // Initialize Google Sign-In
// GoogleSignin.configure({
//   webClientId: '381049698387-9l3br2ubolj68b1uhaohfindvr4jv6u7.apps.googleusercontent.com',
// });

// type data ={
//     idToken:string,
// }
// const App: React.FC = () => {
//   const [signedin, setSignedIn] = useState<boolean>(false);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     // Check if the user is already logged in
//     const subscriber = auth().onAuthStateChanged((user: FirebaseAuthTypes.User | null) => {
//       if (user) {
//         setSignedIn(true);  // User is logged in
//       } else {
//         setSignedIn(false); // User is not logged in
//       }
//       setLoading(false); // Stop loading indicator once user state is known
//     });

//     return subscriber; // Unsubscribe on unmount
//   }, []);

//   const signInWithGoogle = async (): Promise<void> => {
//     try {
//       // Trigger Google Sign-In flow
//       const {data:data} = await GoogleSignin.signIn();
      
//       // Check if userInfo and userInfo.data are not null
//       if(data){
//         const googleCredential = auth.GoogleAuthProvider.credential(data.idToken);
        
//         // Sign in with the credential
//         await auth().signInWithCredential(googleCredential);
//         setSignedIn(true);
//         console.log('User signed in successfully!');
//       }
//     } catch (error: any) {
//       if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//         console.log('User cancelled the login flow');
//       } else if (error.code === statusCodes.IN_PROGRESS) {
//         console.log('Sign-in is in progress');
//       } else {
//         console.log('Something went wrong:', error.message);
//       }
//     }
//   };

//   const signOut = async (): Promise<void> => {
//     try {
//       await auth().signOut();
//       await GoogleSignin.signOut();
//       setSignedIn(false);
//       console.log('User signed out!');
//     } catch (error) {
//       console.error('Error signing out: ', error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Firebase Google Sign-In</Text>

//       {loading ? (
//         <ActivityIndicator size="large" color="#0000ff" />
//       ) : (
//         <>
//           {!signedin ? (
//             <Button title="Sign in with Google" onPress={signInWithGoogle} />
//           ) : (
//             <>
//               <Text style={styles.welcomeText}>Hey, Welcome here!</Text>
//               <Button title="Sign out" onPress={signOut} />
//             </>
//           )}
//         </>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   welcomeText: {
//     fontSize: 18,
//     fontWeight: '600',
//     marginBottom: 20,
//   },
// });

// export default App;

import React, { useEffect, useState, useRef } from 'react';
import { BackHandler, Platform, StyleSheet, Text, View, AppState } from 'react-native';
import { GestureDetector, Gesture, GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  const [isInactive, setIsInactive] = useState(false);
  const inactivityTimeout = useRef<NodeJS.Timeout | null>(null);

  const startInactivityTimer = () => {
    clearInactivityTimer();
    inactivityTimeout.current = setTimeout(() => {
      setIsInactive(true);
      handleAppClose();
    }, 60000); // 1 minute
  };

  const clearInactivityTimer = () => {
    if (inactivityTimeout.current) {
      clearTimeout(inactivityTimeout.current);
      inactivityTimeout.current = null;
    }
  };

  const handleAppClose = () => {
    if (Platform.OS === 'android') {
      BackHandler.exitApp();
    } else {
      console.log('iOS does not allow programmatic app closure.');
    }
  };

  const resetActivity = () => {
    if (isInactive) setIsInactive(false);
    startInactivityTimer();
  };

  useEffect(() => {
    const handleAppStateChange = (nextAppState:any) => {
      if (nextAppState === 'active') {
        setIsInactive(false);
        startInactivityTimer();
      }
    };

    const subscription = AppState.addEventListener('change', handleAppStateChange);
    startInactivityTimer(); // Start the timer initially

    return () => {
      clearInactivityTimer(); // Clear timer on unmount
      subscription.remove(); // Remove AppState listener
    };
  }, []);

  const gesture = Gesture.Tap().onStart(() => resetActivity());

  return (
    <GestureHandlerRootView style={styles.container}>
      <GestureDetector gesture={gesture}>
        <View style={[styles.container, isInactive ? styles.inactive : styles.active]}>
          <Text style={styles.text}>
            {isInactive
              ? 'Goodbye! App has been inactive.'
              : 'App is Active. Interact to stay active.'}
          </Text>
        </View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inactive: {
    backgroundColor: 'red',
  },
  active: {
    backgroundColor: 'green',
  },
  text: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
});
