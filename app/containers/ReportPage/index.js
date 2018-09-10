/**
 *
 * Report
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

function ReportPage() {
  return (
    <iframe
      title="Report"
      width="933"
      height="700"
      src="https://app.powerbi.com/view?r=eyJrIjoiZTEyYjA1NTMtMTlmZi00NTBkLWFkZjEtMGQ0NzQ2NmUwNzg2IiwidCI6ImJiNzFkOTQzLTA4MGQtNDMwMi1iNDkxLTFmNWFkYWQ1NzA2YSJ9"
      frameBorder="0"
      allowFullScreen="true"
    />
  );
}

ReportPage.propTypes = {};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(ReportPage);
