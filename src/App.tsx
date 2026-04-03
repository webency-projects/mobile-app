import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from './context/ThemeContext.tsx';
import { RootNavigator } from '@/navigation/RootNavigator.tsx';
import { StoreProvider } from '@/store/StoreProvider.tsx';

function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <StoreProvider>
          <RootNavigator />
        </StoreProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
