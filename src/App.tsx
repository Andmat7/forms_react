
import "@quillforms/renderer-core/build-style/style.css";
import { registerCoreBlocks } from "@quillforms/react-renderer-utils";
import "./styles.css";
import { FormSemaglutide } from "./components/FormSemaglutide";
import { Doctors } from "./components/init_page/Doctors";
import { Opinion } from "./Opinion";

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

    <div style={{ width: "100%", height: "100vh" }} className="flex flex-col items-center ">
      <div className="absolute w-full bg-[#FFD1F3] h-[400px] z-[-10] ">
      </div>
      <header className="w-full bg-black text-white ">
        <p className="h-10 font-sans text-right text-lg ">
          Call us: (855) 962-5303
        </p>
        <div className="bg-green-600 text-center font-bold text-2xl p-4">
          Today Only: Sign Up and Save $10—With Speedy, Free Shipping
        </div>
      </header>
      <Ellipse />
      <div className="flex flex-col items-center  max-w-[620px] ">
        <div className="h-[160px] flex">
          <img src="logo192.png" alt="logo" className="object-cover h-auto w-full" />
        </div>
        <FormSemaglutide />
        <img src="brands.png" alt="logo" />
        <Doctors />
        <Opinion/>
      </div>


      <footer>
        <img src="logo192.png" alt="logo" />
        <h3>All trademarks are the property of their respective owners.</h3>
        <h3>256-Bit Tls Security</h3>
        <h3>Terms of Service</h3>
        <div>
          <span>
            Terms of Use
          </span>
          <span>
            Privacy Policy
          </span>
          <span>
            Consent to Telehealth
          </span>
        </div>
        <h3>Physician Code of Conduct</h3>
      </footer>
    </div>
  );
};

export default App;
