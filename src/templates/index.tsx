/*
import { TemplateRegistry, FramedDocumentRenderer } from "@govtechsg/decentralized-renderer-react-components";
import { templates as customTemplate } from "./customTemplate";
import styled from "@emotion/styled";
import { CustomTemplate } from "./customTemplate/customTemplate";
import { CustomTemplateCertificate } from "./samples";

export const registry: TemplateRegistry<CustomTemplateCertificate> = {
  custom: customTemplate,
  red: [
    {
      id: "custom-red",
      label: "Red Custom Template",
      template: styled(CustomTemplate)`
        color: red;
      `
    }
  ]
};
*/

import { templates as TemplatePSLE } from "./SOR_PSLE_2021";
import { templates as TemplateGCEA3 } from "./SOR_GCEA_2021_NewSyll";
import { templates as TemplateGCEA2 } from "./SOR_GCEA_2021_OldSyll";
import { templates as TemplateGCENA } from "./SOR_GCEN_NA_2021";
import { templates as TemplateGCENT } from "./SOR_GCEN_NT_2021";
import { templates as TemplateGCEO } from "./SOR_GCEO_2021";
import { TemplateRegistry } from "@govtechsg/decentralized-renderer-react-components";

export const registry: TemplateRegistry<any> = {
  default: TemplatePSLE,
  SOR_PSLE_2021: TemplatePSLE,
  SOR_GCEA_A3_2021: TemplateGCEA3,
  SOR_GCEA_A2_2021: TemplateGCEA2,
  SOR_GCEN_NA_2021: TemplateGCENA,
  SOR_GCEN_NT_2021: TemplateGCENT,
  SOR_GCEO_2021: TemplateGCEO
};