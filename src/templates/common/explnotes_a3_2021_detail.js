//import React, { FunctionComponent } from "react";
//import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";

import {
  EXPLANATORY_CONTENT,
  EXPLANATORY_TABLE_WIDTH70_LEFT,
  EXPLANATORY_FONT_SIZE_13,
  EXPLANATORY_FONT_SIZE_11
} from "./style";

import { COMMAN_EXPL_7, COMMAN_EXPL_5 } from "./explnotes";

export const RENDEREXPLANATORYNOTES_A3_2021 = () => (
  <div className="row">
    <div className="col-md-12">
      {COMMAN_EXPL_5()}
      <div className="row">
        <div className="col-md-12">&nbsp;</div>
      </div>
      <div className="row">
        <div className="col-md-0.5" style={EXPLANATORY_FONT_SIZE_13}>
          2
        </div>
        <div className="col-md-11" style={EXPLANATORY_CONTENT}>
          Subjects may be examined at H1, H2 or H3 Level. H1 and H2 Levels are
          both of GCE A-Level standard. H1 Level covers half the content of H2
          Level but is similar to H2 Level in depth and rigour. The study of
          subjects at H3 Level takes candidates beyond the H2 Level, allowing
          candidates to pursue a subject or an area of study in greater depth.
          H3 Level subjects may also take different forms, such as a
          university-taught course or an extended research essay. Where an H3
          Level subject is not MOE/Cambridge International developed, the
          examining agency and where applicable, the programme agency for the
          subject is printed in brackets after the subject title.
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">&nbsp;</div>
      </div>
      <div className="row">
        <div className="col-md-0.5" style={EXPLANATORY_FONT_SIZE_13}>
          3
        </div>
        <div className="col-md-11" style={EXPLANATORY_CONTENT}>
          The pass grades for the different subjects are as follows:
          <br />
          <table align="left" style={EXPLANATORY_TABLE_WIDTH70_LEFT} border="1">
            <tbody>
              <tr style={EXPLANATORY_CONTENT}>
                <td valign="top" width="30%">
                  H1 and H2 Level subjects
                </td>
                <td>
                  A, B, C,D and E<br />
                  (Grade A is the highest and Grade E the lowest)
                </td>
              </tr>
              <tr style={EXPLANATORY_CONTENT}>
                <td>H3 Level subjects</td>
                <td>Distinction (DIST), Merit and Pass</td>
              </tr>
              <tr style={EXPLANATORY_CONTENT}>
                <td>
                  Oral / Aural examinations (Chinese B / Malay B / Tamil B)
                </td>
                <td>Distinction (DIST), Merit and Pass</td>
              </tr>
              <tr style={EXPLANATORY_CONTENT}>
                <td>
                  Mother Tongue B subjects* (Chinese B / Malay B / Tamil B)
                </td>
                <td valign="top">Merit and Pass</td>
              </tr>
            </tbody>
          </table>
          <br />
        </div>
        <i style={EXPLANATORY_FONT_SIZE_11}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Mother Tongue B is not an A-Level
          subject.
        </i>
      </div>
      <div className="row">
        <div className="col-md-12">&nbsp;</div>
      </div>
      <div className="row">
        <div className="col-md-0.5" style={EXPLANATORY_FONT_SIZE_13}>
          4
        </div>
        <div className="col-md-11" style={EXPLANATORY_CONTENT}>
          For H1 and H2 Level subjects, candidates may be awarded Grade S
          (Sub-pass) or “Ungraded”, both of which indicate that they have failed
          to obtain a pass in the subject.
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">&nbsp;</div>
      </div>
      <div className="row">
        <div className="col-md-0.5" style={EXPLANATORY_FONT_SIZE_13}>
          5
        </div>
        <div className="col-md-11" style={EXPLANATORY_CONTENT}>
          Candidates who have failed to obtain a pass in H3 Level subjects,
          Mother Tongue B subjects or Oral / Aural examinations will have their
          results indicated as “Ungraded”.
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">&nbsp;</div>
      </div>
      <div className="row">
        <div className="col-md-0.5" style={EXPLANATORY_FONT_SIZE_13}>
          6
        </div>
        {COMMAN_EXPL_7()}
      </div>
      <div className="row">
        <div className="col-md-12">&nbsp;</div>
      </div>
      <div className="row">
        <div className="col-md-0.5" style={EXPLANATORY_FONT_SIZE_13}>
          7
        </div>
        <div className="col-md-11" style={EXPLANATORY_CONTENT}>
          This document is issued on condition of your strict compliance with
          the Examination Instructions and Regulations. You must comply with any
          direction by the Singapore Examinations and Assessment Board (SEAB) to
          return this document to SEAB.
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">&nbsp;</div>
      </div>
      <div className="row">
        <div className="col-md-0.5" style={EXPLANATORY_FONT_SIZE_13}>
          8
        </div>
        <div className="col-md-11" style={EXPLANATORY_CONTENT}>
          For further information or clarification on the GCE A-Level, please
          visit the website of the Singapore Examinations and Assessment Board
          (http://www.seab.gov.sg).
        </div>
      </div>
    </div>
  </div>
);
