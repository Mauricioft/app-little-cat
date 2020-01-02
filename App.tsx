import React, { useState } from 'react';
import { AppLoading } from 'expo';
import AppContainer from './src/app-navigator';
import { fetchFonts } from './src/utils/fetch-fonts'
import { setTopLevelNavigator } from './src/navigation-service';

const App = () => {
  const [isLoading, setIsLoading] = useState(false)
  return (
    !isLoading ? (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setIsLoading(true)}
      />
    ):(
      <AppContainer ref={ref => setTopLevelNavigator(ref)} />
    )
  )
} 

export default App
