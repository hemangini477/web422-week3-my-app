import Head from "next/head";
import Image from "next/image";
import Hello from "../components/Hello";
import styles from "../styles/Home.module.css";

export default function Home() {
  var username = "hnpatel";
  var fname = "Hemangini";
  var lname = "Patel";
  return (
    <div>
      <Hello username fname lname />
    </div>
  );
}
