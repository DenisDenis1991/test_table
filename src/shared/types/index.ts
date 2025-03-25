export interface IDataFormValues {
  [k: string]: FormDataEntryValue;
}

export interface IDataCompany {
  id: string,
  companySigDate: string
  companySignatureName: string
  documentName: string
  documentStatus: string
  documentType: string
  employeeNumber: string
  employeeSigDate: string
  employeeSignatureName: string
}

export interface IRowAction {
  rowId: string
}

export const initValue = {
  id: '',
  companySigDate: '',
  companySignatureName: '',
  documentName: '',
  documentStatus: '',
  documentType: '',
  employeeNumber: '',
  employeeSigDate: '',
  employeeSignatureName: ''
}
