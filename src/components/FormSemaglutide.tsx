import React, { useState, useEffect } from 'react';
import { fetchForm } from '../APIModule';
import { Form } from "@quillforms/renderer-core";
import { FormObj } from '@quillforms/renderer-core/src/types';
import { ThemeFormSemaglutide } from './ThemeFormSemaglutide';

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
    theme: ThemeFormSemaglutide,
    messages: {
      'label.hintText.enter': ''
    }
  };
  return (
    <div className="w-full h-[27rem] min-h-[27rem] p-[20px] bg-white shadow border rounded opacity-100 max-w-[620px]">
      <Form formId={1} applyLogic={true} formObj={formObj} onSubmit={(data, { completeForm, setIsSubmitting }) => {
        setTimeout(() => {
          setIsSubmitting(false);
          completeForm();
        }, 500);
      }} />
    </div>
  );
}
