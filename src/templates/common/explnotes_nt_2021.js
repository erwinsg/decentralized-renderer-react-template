import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";

import { TEMPLATE_EXPLANATORYNOTES } from "./template";

//export const GCENT2021TemplateExplanatoryNotes: FunctionComponent<TemplateProps> = ({ document }) => {
export const GCENNT2021TemplateExplanatoryNotes = () => {
	return(
		<span>{TEMPLATE_EXPLANATORYNOTES("GCENNT_2021")}</span>
	);
};