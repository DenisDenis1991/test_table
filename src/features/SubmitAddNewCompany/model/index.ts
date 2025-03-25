import {  IDataFormValues } from "@/shared/types";
import { createEffect, createEvent, sample } from "effector";
import { setNewCompany } from "../api";

export const addNewCompany = createEvent <IDataFormValues>({
  name: 'add row'
})

export const setNewCompanyFx = createEffect({
  name: 'set row data table fx',
  handler: async (newCompany: IDataFormValues | null) => {
    return setNewCompany(newCompany);
  },
});


sample({
  clock: addNewCompany,
  target: setNewCompanyFx,
});
