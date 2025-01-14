//import React, { FunctionComponent } from "react";
//import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";

import {
  EXPLANATORY_CONTENT,
  EXPLANATORY_TABLE_WIDTH70_CENTER,
  EXPLANATORY_FONT_SIZE_13
} from "./style";

import { COMMAN_EXPL_7 } from "./explnotes";

export const RENDEREXPLANATORYNOTES_O_2021 = () => (
  <div className="row">
    <div className="col-md-12">
      <div className="row">
        <div className="col-md-0.5" style={EXPLANATORY_FONT_SIZE_13}>
          1
        </div>
        <div className="col-md-11" valign="top" style={EXPLANATORY_CONTENT}>
          The Singapore Examinations and Assessment Board is authorised by the
          Republic of Singapore to manage national examinations in Singapore.
          The Board, together with the Ministry of Education (MOE), Singapore
          and the Cambridge Assessment International Education are joint
          examining authorities for the General Certificate of Education
          Ordinary Level [GCE O-Level] Examination.
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">&nbsp;</div>
      </div>
      <div className="row">
        <div className="col-md-0.5" style={EXPLANATORY_FONT_SIZE_13}>
          2
        </div>
        <div className="col-md-11" valign="top" style={EXPLANATORY_CONTENT}>
          The pass grades for GCE O-Level subjects are shown by the numerical
          grades 1 to 9 (Grade 1 is the highest and Grade 9 is the lowest). The
          alphabetical equivalent of the numerical grades are as follows:
          <br />
          <br />
          <table
            border="1"
            align="center"
            style={EXPLANATORY_TABLE_WIDTH70_CENTER}
          >
            <tbody>
              <tr>
                <td colSpan="2">GRADE</td>
                <td rowSpan="2">REMARKS</td>
              </tr>
              <tr>
                <td>Numerical</td>
                <td>Alphanetical</td>
              </tr>
              <tr>
                <td>1,2</td>
                <td>A</td>
                <td rowSpan="3">GCE O-Level Pass</td>
              </tr>
              <tr>
                <td>3,4</td>
                <td>B</td>
              </tr>
              <tr>
                <td>5,6</td>
                <td>C</td>
              </tr>
              <tr>
                <td>7</td>
                <td>D</td>
                <td rowSpan="2">Below GCE O-Level Pass</td>
              </tr>
              <tr>
                <td>8</td>
                <td>E</td>
              </tr>
              <tr>
                <td>9</td>
                <td>No Alphabetical Grades</td>
                <td />
              </tr>
            </tbody>
          </table>
          <br />
          [GCE O-Level results obtained in and before 1975 are shown in
          numerical grades only.]
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">&nbsp;</div>
      </div>
      <div className="row">
        <div className="col-md-0.5" style={EXPLANATORY_FONT_SIZE_13}>
          3
        </div>
        <div className="col-md-11" valign="top" style={EXPLANATORY_CONTENT}>
          Performance in the Oral/Aural Examinations in the Mother Tongue
          subjects is indicated as Distinction (DIST), Merit, Pass or Ungraded.
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">&nbsp;</div>
      </div>
      <div className="row">
        <div className="col-md-0.5" style={EXPLANATORY_FONT_SIZE_13}>
          4
        </div>
        <div className="col-md-11" valign="top" style={EXPLANATORY_CONTENT}>
          Mother Tongue B subjects (Chinese B / Malay B / Tamil B) place greater
          emphasis on practical communication skills, especially oral and aural
          skills. The grades awarded for Mother Tongue B subjects are Merit,
          Pass or Ungraded. Mother Tongue B is not an O-Level subject.
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">&nbsp;</div>
      </div>
      <div className="row">
        <div className="col-md-0.5" style={EXPLANATORY_FONT_SIZE_13}>
          5
        </div>
        <div className="col-md-11" valign="top" style={EXPLANATORY_CONTENT}>
          Where a subject is not developed by MOE / Cambridge Assessment
          International Education, the examining authority for the subject is
          printed in brackets below the subject title.
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
        <div className="col-md-11" valign="top" style={EXPLANATORY_CONTENT}>
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
        <div className="col-md-11" valign="top" style={EXPLANATORY_CONTENT}>
          For further information or clarification on the GCE O-Level, please
          visit the website of the Singapore Examinations and Assessment Board
          (https://www.seab.gov.sg).
        </div>
      </div>
    </div>
  </div>
);
