import React from 'react';
import './App.css';
import Listing from './components/Listing';
import items from './etsy.json';

export default function App() {
  return <Listing items={items} />;
}
