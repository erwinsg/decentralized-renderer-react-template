import { SEABSOR } from "./sor";
import { EXPLANATORYNOTES } from "../common/explnotes_na_2021";

export const templates = [
  {
    id: "sor",
    label: "Statement of Results",
    template: SEABSOR
  },  
  {
    id: "explanatorydtl",
    label: "Explanatory Notes",
    template: EXPLANATORYNOTES
  }
];

export default templates;