import { httpClient } from "@/shared/httpClient";
import { IDataCompany, IDataFormValues } from "@/shared/types";

interface DataCompanyResponse {
  data: IDataCompany;
}

export const setEditCompany = async (
  dataRow: IDataFormValues | null
): Promise<DataCompanyResponse> => {
  const { data } = await httpClient.post<DataCompanyResponse>(
    `/ru/data/v3/testmethods/docs/userdocs/set/${dataRow?.id}`,
    dataRow
  );
  await (data);
  return data;
};

export const deleteCompany: (id: string) => Promise<DataCompanyResponse[]> = async (
  id: string
) => {
  const data : DataCompanyResponse[] = await httpClient.post(
    `/ru/data/v3/testmethods/docs/userdocs/delete/${id}`,
  );
  await (data);
  return data;
};