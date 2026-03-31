import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from './context/ThemeContext.tsx';
import { RootNavigator } from '@/navigation/RootNavigator.tsx';

function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
          <RootNavigator />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
