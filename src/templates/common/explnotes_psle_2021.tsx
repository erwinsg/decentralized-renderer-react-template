import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";

import { TEMPLATE_EXPLANATORYNOTES } from "./template";

export const PSLE2021TemplateExplanatoryNotes: FunctionComponent<TemplateProps> = () => {
//export const PSLE2021TemplateExplanatoryNotes = () => {	
	return(
		<span>{TEMPLATE_EXPLANATORYNOTES("PSLE_2021")}</span>
	);
};

