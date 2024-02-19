
import "@quillforms/renderer-core/build-style/style.css";
import { registerCoreBlocks } from "@quillforms/react-renderer-utils";
import "./styles.css";
import { FormSemaglutide } from "./components/FormSemaglutide";

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

    <div style={{ width: "100%", height: "100vh" }}>
      <div className="absolute w-full bg-[#FFD1F3] h-[400px] z-[-10]">
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
      <div className="flex flex-col items-center ">
        <div className="h-[160px] flex">
          <img src="logo192.png" alt="logo" className="object-cover h-auto w-full" />
        </div>


        <FormSemaglutide />

        <img src="brands.png" alt="logo" />
        <div>
          <h3>Experienced U.S. Licensed Doctors</h3>
          <p>
            “I firmly believe that managing weight should be straightforward and accessible for anyone who seeks it. That’s why our program at SkinnyRx is exceptional—you can receive FDA-approved, clinically-proven semaglutide treatment delivered directly to your doorstep at a fraction of the usual cost.”
          </p>
          <img src="doctor.png" alt="logo" />

        </div>

        <div>
          <h2>Believe the Hype:</h2>
          <h2>Customer Success with Clinically</h2>
          <h2>Proven Meds</h2>
          <h3>WebMD reviews for Generic Semaglutide®</h3>
          <div>
            <p>
              “Semaglutide Has Revolutionized My Journey to Health in My 70s”
            </p>
            <img src="starts.png" alt="" />
            <p>
              The transformation has been incredibly profound. At 78 and 76 years old, my spouse and I have experienced a significant resurgence in our health and vitality thanks to semaglutide. It’s been a cornerstone in our weight loss journey, and we’re living proof that it’s never too late to start. If you’re hesitating, don’t. The change it brings is worth every moment. Wishing you all the best as you rediscover your health and joy in life!
            </p>
            <p>- Old Sparky</p>
          </div>
        </div>
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
