import { TEMPLATE_ESOR } from "../common/template";
import { TEMPLATE_EXPLANATORYNOTES } from "../common/template";

import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { GCENT2021TemplateCertificate } from "./gcent_2021_json";

export const GCENT2021Template: FunctionComponent<TemplateProps<GCENT2021TemplateCertificate>> = ({ document }) => {
  return (
	/*<span id="custom-template">{TEMPLATE_ESOR(document, "GCEO", "O")}</span>*/
	
	<div id="custom-template">
      <div>
        <span>{TEMPLATE_ESOR(document, "GCEN", "NT")}</span>
      </div>
	  <div>
        <span>{TEMPLATE_EXPLANATORYNOTES("GCENNT_2021")}</span>
      </div>
    </div>
	
  );
};
