import Amplify from 'aws-amplify'
import config from './aws-exports'
import {withAuthenticator} from '@aws-amplify/ui-re ct'
import React from 'react'
import './App.css';

Amplify.configure(config)

function App() {
  return (
    <div className='App'> Clean Slate </div>
  );
}

export default withAuthenticator(App);
