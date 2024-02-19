
import "@quillforms/renderer-core/build-style/style.css";
import { registerCoreBlocks } from "@quillforms/react-renderer-utils";
import "./styles.css";
import { FormSemaglutide } from "./components/FormSemaglutide";
import { Doctors } from "./components/init_page/Doctors";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Opinions } from "./components/Opinions";
import { Logo } from "./components/Logo";

registerCoreBlocks();

function Ellipse() {
  return (<div className="absolute w-[835px] h-[835px] bg-white" style={{
    mixBlendMode: 'overlay',
    opacity: 0.55,
    filter: 'blur(50px)',
    borderRadius: '50%'
  }}>
  </div>);
}

const App = () => {
  return (

    <div style={{ width: "100%", height: "100vh" }} className="font-sans flex flex-col items-center ">

      <Header />
      <Ellipse />
      <div className="flex flex-col items-center  max-w-[620px] ">
        <Logo />
        <FormSemaglutide />
        <img src="brands.png" alt="brands" />
        <Doctors />
        <Opinions />
      </div>


      <Footer />
    </div>
  );
};

export default App;
