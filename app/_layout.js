import { Slot } from "expo-router";
import "../global.css";
import { Header } from "../components/header";
const Layout = () => (
  <>
    <Header />
    <Slot />
  </>
);
export default Layout;
