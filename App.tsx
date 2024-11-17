import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './app/screens/Login';
import { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { FIREBASE_AUTH } from './FirebaseConfig';
import List from './app/screens/List';
import AnimTab1 from './app/screens/Details';

const Stack = createNativeStackNavigator()

const InsideStack = createNativeStackNavigator()

function InsideLayot() {
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name = "My todos" component= {List}/>
      <InsideStack.Screen name = "Details" component= {AnimTab1}/>
    </InsideStack.Navigator>
  )
}

export default function App() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('user', user)
      setUser(user)
    })
  }, [])


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {user ? (
              <Stack.Screen name="Inside" component={InsideLayot} options={{headerShown: false}}/>
        ) : (
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        )}
        </Stack.Navigator>
    </NavigationContainer>
  );
}