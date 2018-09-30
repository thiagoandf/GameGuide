import { LOAD_CUSTOMER_INFO } from '../constants';

const initialState = {
  name: '',
  reports: {},
};

function customerReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CUSTOMER_INFO:
      return {
        name: action.info.name,
        reports: loadReportsAsMap(action.info.reports),
      };
    default:
      return state;
  }
}

const loadReportsAsMap = array => {
  const map = {};
  array.forEach(report => {
    map[report.id] = report.reportUrl;
  });
  return map;
};

export default customerReducer;
