import { httpClient } from '@/shared/httpClient';
import { IDataCompany } from '@/shared/types';

interface ISetDataTableResponse {
  data: IDataCompany[]
}
export const getDataCompanyList = async (
) => {
  const { data } = await httpClient.get<ISetDataTableResponse>(
    '/ru/data/v3/testmethods/docs/userdocs/get',
  );

  await (data);
  return data.data;
};
