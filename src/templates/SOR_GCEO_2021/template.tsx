import { TEMPLATE_ESOR } from "../common/template";
import { TEMPLATE_EXPLANATORYNOTES } from "../common/template";

import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { GCEO2021TemplateCertificate } from "./gceo_2021_json";

const containerStyle = css`
  background-color: #324353;
  color: #ffffff;
  padding: 15px;
  margin: auto;
  width: 80%;
  text-align: center;
`;


export const GCEO2021Template: FunctionComponent<TemplateProps<GCEO2021TemplateCertificate>> = ({ document }) => {
  return (
	/*<span id="custom-template">{TEMPLATE_ESOR(document, "GCEO", "O")}</span>*/
	
	<div id="custom-template">
      <div>
        <span>{TEMPLATE_ESOR(document, "GCEO", "O")}</span>
      </div>
	  <div>
        <span>{TEMPLATE_EXPLANATORYNOTES("GCEO_2021")}</span>
      </div>
    </div>
	
  );
};
