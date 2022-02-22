import { PSLE2021SOR } from "./sor";
import { PSLE2021TemplateExplanatoryNotes } from "../common/explnotes_psle_2021";

export const templates = [
  {
    id: "sor",
    label: "Statement of Results",
    template: PSLE2021SOR
  },  
  {
    id: "explanatorydtl",
    label: "Explanatory Notes",
    template: PSLE2021TemplateExplanatoryNotes
  }
];