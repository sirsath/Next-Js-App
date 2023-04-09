import 'bootstrap/dist/css/bootstrap.min.css';
import _TopBar from "../Components/_TopBar"


export default function App({ Component, pageProps }) {
  return <>
    <_TopBar />
    <Component />
  </>
}
