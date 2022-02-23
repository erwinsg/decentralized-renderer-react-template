import { TEMPLATE_ESOR } from "../common/template";
import { TEMPLATE_EXPLANATORYNOTES } from "../common/template";

import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { PSLE2021TemplateCertificate } from "./psle_2021_json";

export const PSLE2021Template: FunctionComponent<TemplateProps<PSLE2021TemplateCertificate>> = ({ document }) => {
  return (
	/*<span id="custom-template">{TEMPLATE_ESOR(document, "PSLE", "PSLE2021")}</span>*/
	
	<div id="custom-template">
      <div>
        <span>{TEMPLATE_ESOR(document, "PSLE", "PSLE2021")}</span>
      </div>
	  <div>
        <span>{TEMPLATE_EXPLANATORYNOTES("PSLE_2021")}</span>
      </div>
    </div>
	
  );
};
