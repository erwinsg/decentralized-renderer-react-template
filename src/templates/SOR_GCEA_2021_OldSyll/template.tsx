import { TEMPLATE_ESOR } from "../common/template";
import { TEMPLATE_EXPLANATORYNOTES } from "../common/template";

import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { GCEA22021TemplateCertificate } from "./gcea2_2021_json";

export const GCEA22021Template: FunctionComponent<TemplateProps<GCEA22021TemplateCertificate>> = ({ document }) => {
  return (
	/*<span id="custom-template">{TEMPLATE_ESOR(document, "GCEO", "O")}</span>*/
	
	<div id="custom-template">
      <div>
        <span>{TEMPLATE_ESOR(document, "GCEA", "A2")}</span>
      </div>
	  <div>
        <span>{TEMPLATE_EXPLANATORYNOTES("GCEA2_2021")}</span>
      </div>
    </div>
	
  );
};
