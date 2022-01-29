import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Box } from '@chakra-ui/react'
import Header from "../Components/header/header";
import Section1 from "../Components/section1/section1";
import Section2 from "../Components/section2/section2";
import Work from "../Components/work/work";



export default function Home() {

  return (
    <>
      <Header />

          <Section1></Section1>
      
      <Work></Work>


      
    </>
  );
}
