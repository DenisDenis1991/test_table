import { createEffect, createEvent, createStore, sample } from "effector";
import { deleteCompany, setEditCompany } from "../api";
import { IDataFormValues } from "@/shared/types";

export const onInitEditCompany = createEvent<string>({
  name: 'start edit company',
})

export const onFinishEditCompany = createEvent<string>({
  name: 'finish edit company',
})

export const $isDisabledCompany = createStore<string[]>(
  [],
  { name: 'disabled company' }
).on(onInitEditCompany, (state, payload) => {
  return [
    ...state, payload
]
}).on(onFinishEditCompany, (state, payload) => {
  return state.filter((item) => item !== payload)
})

export const onDeleteCompany = createEvent<string>({
  name: 'delete company',
});

export const deleteCompanyEffectFx = createEffect({
  name: 'delete company data fx',
  handler: async (id: string) => {
    return deleteCompany(id)
  }
})

export const onFetchEditCompany = createEvent<IDataFormValues>({
  name: 'edit company',
});

export const editCompanyEffectFx = createEffect({
  name: 'edit row data fx',
  handler: async (companydata: IDataFormValues | null) => {
    return setEditCompany(companydata)
  }
})

sample({
  clock: onDeleteCompany,
  target: deleteCompanyEffectFx,
});


sample({
  clock: onFetchEditCompany,
  target: editCompanyEffectFx,
});