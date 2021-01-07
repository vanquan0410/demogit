const getters = {
  sidebar: (state) => state.app.sidebar,
  size: (state) => state.app.size,
  device: (state) => state.app.device,
  errorLogs: (state) => state.errorLog.logs,
  statusLog: (state) => state.errorLog.statusLog,
  modeTaxPeriod: (state) => state.taxPeriod.mode,
  data: (state) => state.taxPeriod.data,
  dataOfRow: (state) => state.taxPeriod.dataOfRow,
  organization: (state) => state.organization.organization,
  filter: (state) => state.filter.filter,
  amisConnector: (state) => state.amisConnector.loginInfo,
  token: (state) => state.amisConnector.token,
  // region state : Import Export Excel DeclarationSettlementDetail
  listExcel: (state) =>  state.excelData.listExcel,
  listWrongFormatExcel: (state) => state.excelData.listErrorExcel,
  listDuplicateExcel: (state) => state.excelData.listDuplicateExcel,
  listDuplicateDB: (state) => state.excelData.listDuplicateDB,
  organizationList: (state) => state.organization.organizationList,
  reloadPage: (state) => state.reload.reloadPage,
  taxPayerInfor: (state) => state.taxPayer.secretInfor,
};
export default getters;
