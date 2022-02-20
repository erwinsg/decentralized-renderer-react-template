import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";

import { TEMPLATE_EXPLANATORYNOTES } from "./template";

//export const GCENNA2021TemplateExplanatoryNotes: FunctionComponent<TemplateProps> = ({ document }) => {
export const GCENNA2021TemplateExplanatoryNotes = () => {
	return(
		<span>{TEMPLATE_EXPLANATORYNOTES("GCENNA_2021")}</span>
	);
};