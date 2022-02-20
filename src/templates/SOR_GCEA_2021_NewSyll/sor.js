import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";

import { TEMPLATE_ESOR } from "../common/template";

export const  Template: FunctionComponent<TemplateProps> = ({ document }) => {
	return(
		<span>{TEMPLATE_ESOR(certificate, "GCEA", "A3")}</span>
	);
};


