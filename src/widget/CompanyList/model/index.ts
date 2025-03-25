import { IDataCompany } from "@/shared/types";
import { createEffect, createEvent, createStore, sample } from "effector";
import { getDataCompanyList } from "../api";
import { setNewCompanyFx } from "@/features/SubmitAddNewCompany/model";
import { deleteCompanyEffectFx } from "@/features/EditCompany/model";

export const initCompanyList = createEvent({
  name: 'init company list'
})

export const $companyList = createStore<IDataCompany[]>(
  [],
  {name: 'company list'}
)

export const getDataCompanyListFx = createEffect({
  name: 'get data table fx',
  handler: async () => {
    return getDataCompanyList();
  },
});

export const $pending = getDataCompanyListFx.pending;

$companyList.on(getDataCompanyListFx.doneData, (_, data) => {
  return [...data];
});

$companyList.on(setNewCompanyFx.doneData, (state, data) => {
  return [...state, data.data];
});


sample({
  clock: initCompanyList,
  source: $companyList,
  target: getDataCompanyListFx,
});


sample({
  clock: deleteCompanyEffectFx.doneData, // Срабатывает, когда deleteRowEffectFx завершился успешно
  target: initCompanyList, // Триггерим событие initTable
});