import { GlobalProvider } from "../components/models/global-provider";

const MyApp = ({ Component, pageProps }) => {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  );
};

export default MyApp;
