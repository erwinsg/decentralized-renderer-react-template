import { GCEO2021SOR } from "./sor";
import { GCEO2021TemplateExplanatoryNotes } from "../common/explnotes_o_2021";

export const templates = [
  {
    id: "sor",
    label: "Statement of Results",
    template: GCEO2021SOR
  },  
  {
    id: "explanatorydtl",
    label: "Explanatory Notes",
    template: GCEO2021TemplateExplanatoryNotes
  }
];