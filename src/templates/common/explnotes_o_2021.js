import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";

import { TEMPLATE_EXPLANATORYNOTES } from "./template";

//export const GCEO2021TemplateExplanatoryNotes: FunctionComponent<TemplateProps> = ({ document }) => {
export const GCEO2021TemplateExplanatoryNotes = () => {
	return(
		<span>{TEMPLATE_EXPLANATORYNOTES("GCEO_2021")}</span>
	);
};


