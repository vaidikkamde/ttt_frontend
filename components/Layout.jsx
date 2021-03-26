import Head from "next/head";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_CENTER,
  timeout: 5000,
  offset: "30px",
  transition: transitions.FADE,
};
export default function Layout(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <AlertProvider template={AlertTemplate} {...options}>
        <>{props.children}</>
      </AlertProvider>
    </>
  );
}
