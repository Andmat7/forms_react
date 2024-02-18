import { Form } from "@quillforms/renderer-core";
import "@quillforms/renderer-core/build-style/style.css";
import { registerCoreBlocks } from "@quillforms/react-renderer-utils";
import "./styles.css";

registerCoreBlocks();

const App = () => {
  return (

    <div style={{ width: "100%", height: "100vh" }} className="flex flex-col items-center">
      <header className="w-full bg-black text-white">
        <p className="h-10 font-sans text-right text-lg ">
          Call us: (855) 962-5303
        </p>
        <div className="bg-green-600 text-center font-bold text-2xl p-4">
          Today Only: Sign Up and Save $10—With Speedy, Free Shipping
        </div>
      </header>
      <div>
        <img src="logo192.png" alt="logo" />
        <Form
          formId={1}
          applyLogic={true}
          formObj={{
            blocks: [
              {
                name: "welcome-screen",
                id: "jg1401r",
                attributes: {
                  label: "Weight loss made easy with a prescription to semaglutide",
                  description: "Lose up to 1.5% of your body fat per week"
                }
              },
              {
                name: "short-text",
                id: "kd12edg",
                attributes: {
                  layout: "split-right",
                  required: true,
                  label: "Let's start with your name"
                }
              },
              {
                name: "slider",
                id: "93pda11",
                attributes: {
                  label: "Please choose your weight",
                  min: 0,
                  max: 100,
                  step: 1
                }
              },
              {
                name: "number",
                id: "wer3qdkdb",
                attributes: {
                  required: true,
                  label: "Great, can you type your age?"
                }
              },
              {
                name: "dropdown",
                id: "3nsdf934",
                attributes: {
                  choices: [
                    {
                      label: "Choice 1",
                      value: "choice-1"
                    },
                    {
                      label: "Choice 2",
                      value: "choice-2"
                    }
                  ]
                }
              },
              {
                name: "long-text",
                id: "m35612edg",
                attributes: {
                  required: true,
                  label: "Type a brief about yourself!"
                }
              },
              {
                name: "date",
                id: "a213rsew",
                attributes: {
                  required: true,
                  label: "Please type your birth of date!"
                }
              },
              {
                name: "multiple-choice",
                id: "gqr1294c",
                attributes: {
                  required: true,
                  multiple: true,
                  verticalAlign: false,
                  label: "Which subjects do you love the most?",
                  choices: [
                    {
                      label: "Physics",
                      value: "physics"
                    },
                    {
                      label: "Math",
                      value: "math"
                    },
                    {
                      label: "English",
                      value: "english"
                    },
                    {
                      label: "Biology",
                      value: "biology"
                    }
                  ]
                }
              },
              {
                name: "statement",
                id: "g91imf1023",
                attributes: {
                  label: "You are doing great so far!",
                  buttonText: "Continue",
                  quotationMarks: true
                }
              }
            ],
            settings: {
              animationDirection: "vertical",
              disableWheelSwiping: false,
              disableNavigationArrows: false,
              disableProgressBar: false
            },
            theme: {
              font: "Roboto",
              buttonsBgColor: "#9b51e0",
              logo: {
                src: ""
              },
              questionsColor: "#000",
              answersColor: "#0aa7c2",
              buttonsFontColor: "#fff",
              buttonsBorderRadius: 25,
              errorsFontColor: "#fff",
              errorsBgColor: "#f00",
              progressBarFillColor: "#000",
              progressBarBgColor: "#ccc"
            }
          }}
          onSubmit={(data, { completeForm, setIsSubmitting }) => {
            setTimeout(() => {
              setIsSubmitting(false);
              completeForm();
            }, 500);
          }}
        />
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
