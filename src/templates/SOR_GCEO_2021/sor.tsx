import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";

import { TEMPLATE_ESOR } from "../common/template";

export const GCEO2021SOR: FunctionComponent<TemplateProps> = ({ document }) => {
//export const GCEO2021SOR = certificate => {
	return(
		<span>{TEMPLATE_ESOR(document, "GCEO", "O")}</span>
	);
};


