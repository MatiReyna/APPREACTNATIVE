import { StatusBar } from 'expo-status-bar';
import { TailwindProvider } from 'nativewind';
import AppNavigation from './src/navigation/index';

export default function App() {
  return (
    <TailwindProvider>
      <StatusBar style="auto" />
      <AppNavigation />
    </TailwindProvider>
  );
}