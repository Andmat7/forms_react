import { Form } from "@quillforms/renderer-core";
export 
function FormSemaglutide() {
  return (<div className="w-full h-[32rem] w-[38rem]">
    <Form formId={1} applyLogic={true} formObj={{
      blocks: [{
        name: "welcome-screen",
        id: "jg1401r",
        attributes: {
          label: "Weight loss made easy with a prescription to semaglutide",
          description: "Lose up to 1.5% of your body fat per week",
          buttonText: "GET STARTED",
        }
      }, {
        name: "short-text",
        id: "kd12edg",
        attributes: {
          layout: "split-right",
          required: true,
          label: "Let's start with your name"
        }
      }, {
        name: "slider",
        id: "93pda11",
        attributes: {
          label: "Please choose your weight",
          min: 0,
          max: 100,
          step: 1
        }
      }, {
        name: "number",
        id: "wer3qdkdb",
        attributes: {
          required: true,
          label: "Great, can you type your age?"
        }
      }, {
        name: "dropdown",
        id: "3nsdf934",
        attributes: {
          choices: [{
            label: "Choice 1",
            value: "choice-1"
          }, {
            label: "Choice 2",
            value: "choice-2"
          }]
        }
      }, {
        name: "long-text",
        id: "m35612edg",
        attributes: {
          required: true,
          label: "Type a brief about yourself!"
        }
      }, {
        name: "date",
        id: "a213rsew",
        attributes: {
          required: true,
          label: "Please type your birth of date!"
        }
      }, {
        name: "multiple-choice",
        id: "gqr1294c",
        attributes: {
          required: true,
          multiple: true,
          verticalAlign: false,
          label: "Which subjects do you love the most?",
          choices: [{
            label: "Physics",
            value: "physics"
          }, {
            label: "Math",
            value: "math"
          }, {
            label: "English",
            value: "english"
          }, {
            label: "Biology",
            value: "biology"
          }]
        }
      }, {
        name: "statement",
        id: "g91imf1023",
        attributes: {
          label: "You are doing great so far!",
          buttonText: "Continue",
          quotationMarks: true
        }
      }],
      settings: {
        animationDirection: "horizontal",
        disableWheelSwiping: false,
        disableNavigationArrows: false,
        disableProgressBar: false
      },
      theme: {
        font: "Charter",
        fontSize: {
            lg: "5.0rem",
            sm: "4.0rem"
        },
        buttonsBgColor: "#190053",
        logo: {
          src: ""
        },
        questionsColor: "#000",
        questionsLabelFontSize: {
            lg: "2.5rem",
            sm: "1.5rem"
        },
        questionsLabelLineHeight: {
            lg: "3.5rem",
            sm: "2.5rem"
        },
        answersColor: "#0aa7c2",
        buttonsFontColor: "#fff",
        buttonsFontSize: {
            lg: "1rem",
            sm: "1.0rem"
        },
        buttonsBorderRadius: 59,
        errorsFontColor: "#fff",
        errorsBgColor: "#f00",
        progressBarFillColor: "#000",
        progressBarBgColor: "#ccc",
        buttonsPadding: {
            top: {
                lg: "1.0rem",
                sm: "1rem"
            },
            bottom: {
                lg: "1.0rem",
                sm: "1rem"
            },
            left: {
                lg: "10rem",
                sm: "1.5rem"
            },
            right: {
                lg: "10rem",
                sm: "1.5rem"
            }

        }
        

      },
      messages: {
        'label.hintText.enter':''
      }

    }} onSubmit={(data, {
      completeForm,
      setIsSubmitting
    }) => {
      setTimeout(() => {
        setIsSubmitting(false);
        completeForm();
      }, 500);
    }} />
  </div>);
}
