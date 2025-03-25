import { httpClient } from "@/shared/httpClient";
import { IDataCompany, IDataFormValues } from "@/shared/types";

interface ISetDataTableResponse {
  data: IDataCompany
}

export const setNewCompany = async (
  newCompany: IDataFormValues | null
): Promise<ISetDataTableResponse> => {
  const { data } = await httpClient.post<ISetDataTableResponse>(
    '/ru/data/v3/testmethods/docs/userdocs/create',
    newCompany
  );

  await (data);
  return data;
};