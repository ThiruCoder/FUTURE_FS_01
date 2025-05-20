import Image from "next/image";
import styles from "./page.module.css";
import Hero_Section from "./Hero_Section/page";
import { useGlobalContext } from "./Context/GlobalContext";
import { AxiosInstance } from "./ClientSideGlobalErrorHandler/GlobalErrorHandler";

export default function Home() {
  return (
    <Hero_Section />
  );
}
