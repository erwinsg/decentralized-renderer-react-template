import { GCENNA2021SOR } from "./sor";
import { GCENNA2021TemplateExplanatoryNotes } from "../common/explnotes_na_2021";

export const templates = [
  {
    id: "sor",
    label: "Statement of Results",
    template: GCENNA2021SOR
  },  
  {
    id: "explanatorydtl",
    label: "Explanatory Notes",
    template: GCENNA2021TemplateExplanatoryNotes
  }
];