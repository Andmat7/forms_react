import { FormObj } from "@quillforms/renderer-core/src/types";
import type { FormBlocks } from '@quillforms/types';

const blocks: FormBlocks = [{
    name: "welcome-screen",
    id: "jg1401r",
    attributes: {
        label: "Weight loss made easy with a prescription to semaglutide",
        description: "Lose up to 1.5% of your body fat per week",
        buttonText: "GET STARTED",
    }
}, {
    name: "email",
    id: "email",
    attributes: {
        required: true,
        label: "email address",
        description: "Please use the same information below so we can match your profile."
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
}];
export const mockData: FormObj = {
    blocks: blocks,
};