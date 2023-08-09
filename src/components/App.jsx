import MainPage from 'pages/MainePage/MainPage';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Toaster } from 'react-hot-toast';
import Header from 'Header/Header';

export const App = () => {
  return (
    <GoogleOAuthProvider clientId="862315614702-aamit9fr5671f90eco3vepd3j6mssdj2.apps.googleusercontent.com">
      <Header />
      <MainPage />
      <Toaster />
    </GoogleOAuthProvider>
  );
};
