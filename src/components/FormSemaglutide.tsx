import React, { useState, useEffect } from 'react';
import { fetchForm } from '../APIModule';
import { Form } from "@quillforms/renderer-core";
import { FormObj } from '@quillforms/renderer-core/src/types';

export function FormSemaglutide() {
  const [blocks, setBlocks] = useState(null);

  useEffect(() => {
    fetchForm()
      .then(blocks => {
        setBlocks(blocks);
      })
      .catch(error => console.error('Failed to fetch form blocks:', error));
  }, []);

  if (!blocks) {
    return <div>Loading form...</div>;
  }
  const formObj: FormObj = {
    blocks: blocks,
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
        lg: "2.7rem",
        sm: "1.5rem"
      },
      questionsLabelLineHeight: {
        lg: "2.9rem",
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
      'label.hintText.enter': ''
    }
  };
  return (
    <div className="w-full h-[27rem] p-[20px] bg-white shadow border rounded opacity-100">
      <Form formId={1} applyLogic={true} formObj={formObj} onSubmit={(data, { completeForm, setIsSubmitting }) => {
        setTimeout(() => {
          setIsSubmitting(false);
          completeForm();
        }, 500);
      }} />
    </div>
  );
}
