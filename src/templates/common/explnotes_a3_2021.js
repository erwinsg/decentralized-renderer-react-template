import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";

import { TEMPLATE_EXPLANATORYNOTES } from "./template";

//export const GCEA32021TemplateExplanatoryNotes: FunctionComponent<TemplateProps> = ({ document }) => {
export const GCEA32021TemplateExplanatoryNotes = () => {
	return(
		<span>{TEMPLATE_EXPLANATORYNOTES("GCEA3_2021")}</span>
	);
};