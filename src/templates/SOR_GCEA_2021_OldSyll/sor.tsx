import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";

import { TEMPLATE_ESOR } from "../common/template";

export const GCEA22021SOR: FunctionComponent<TemplateProps> = ({ document }) => {
//export const GCEA22021SOR = certificate => {
	return(
		<span>{TEMPLATE_ESOR(document, "GCEA", "A2")}</span>
	);
};


