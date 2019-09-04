import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import EventList from './EventList';
import EventForm from './EventForm';


const AppNavigator = createStackNavigator({
  list: {
    screen: EventList,
    navigationOptions: () => ({
      title: 'Your Events'
    })
  },
  form: {
    screen: EventForm,
    navigationOptions: () => ({
      title: 'Add an Events'
    })
  }
});

const App = createAppContainer(AppNavigator);

export default App

// export default function App() {
//   return (
//     <EventList />
//   );
// }


