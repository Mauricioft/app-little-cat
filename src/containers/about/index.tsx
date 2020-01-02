import React from 'react';
import { withNavigation } from 'react-navigation';
import { Layout } from '../../components/layout/';

const About = ({ navigation }) => {
  console.log('About', navigation.state)
  return(
    <Layout>
      
    </Layout>
  )
}

export default withNavigation(About);