
import styles from '../styles/Home.module.css'
import { Routes, Route} from "react-router-dom"

import Header from '../Components/header/header'
import Work from '../Components/work/work'

export default function Home() {
  return (
    <>
      <Header></Header>
      <Work></Work>

    </>
  )
}
