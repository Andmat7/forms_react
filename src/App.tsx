
import "@quillforms/renderer-core/build-style/style.css";
import { registerCoreBlocks } from "@quillforms/react-renderer-utils";
import "./styles.css";
import { FormSemaglutide } from "./components/FormSemaglutide";
import { Doctors } from "./components/init_page/Doctors";
import { Opinion } from "./components/Opinion";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

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
        <div className="h-[160px] flex">
          <img src="logo192.png" alt="logo" className="object-cover h-auto w-full" />
        </div>
        <FormSemaglutide />
        <img src="brands.png" alt="logo" />
        <Doctors />
        <div className="bg-[#F7F7F7] text-center p-[64px]">
          <h2>Believe the Hype:</h2>
          <h2>Customer Success with Clinically</h2>
          <h2>Proven Meds</h2>
          <h3>WebMD reviews for Generic Semaglutide®</h3>
          <Opinion
            reviewTitle="“Semaglutide Has Revolutionized My Journey to Health in My 70s”"
            review="The transformation has been incredibly profound. At 78 and 76 years old, my spouse and I have experienced a significant resurgence in our health and vitality thanks to semaglutide. It’s been a cornerstone in our weight loss journey, and we’re living proof that it’s never too late to start. If you’re hesitating, don’t. The change it brings is worth every moment. Wishing you all the best as you rediscover your health and joy in life!”"
            name="— Old Sparky"
          />
        </div>
      </div>


      <Footer />
    </div>
  );
};

export default App;
