import React from 'react';
import './style.css';
import { Route } from 'react-router-dom';
import { OauthSender, OauthReceiver } from 'react-oauth-flow';
import HandleUser from '../HandleUser';
import { id } from '../../hidden/hidden'

export const Welcome = () => {
  return (
    <div className="welcome">
      <h1>WELCOME</h1>
      <OauthSender
        authorizeUrl="https://api.pinterest.com/oauth/"
        clientId={'4987807426915878592'}
        redirectUri="https://54f23598.ngrok.io/profile"
        // state={{ from: '/settings' }}
        args={{ scope: 'read_public', response_type: 'code' }}
        render={({ url }) => <a href={url}>LINK</a>}
      />
    </div>

  )

}
