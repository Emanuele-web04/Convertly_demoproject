import styles from "./style"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Converter from "./components/Converter"
const App = () => {
  return (
    <div className="w-full bg-white overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter} border-b-[1px]`}>
        <Navbar />
      </div>
      <Hero />
      <Converter />
    </div>
  )
}

export default App