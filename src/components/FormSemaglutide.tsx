import React, { useState, useEffect } from 'react';
import { fetchForm } from '../APIModule';
import { Form } from "@quillforms/renderer-core";

export function FormSemaglutide() {
  const [formObj, setFormObj] = useState(null);

  useEffect(() => {
    fetchForm()
      .then(data => {
        setFormObj(data);
      })
      .catch(error => console.error('Failed to fetch form object:', error));
  }, []);

  if (!formObj) {
    return <div>Loading form...</div>;
  }

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
