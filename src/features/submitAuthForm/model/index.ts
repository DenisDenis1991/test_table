import { createEffect, createEvent, sample } from "effector";
import { fetchUserLogin } from "../api";
import { IDataFormValues } from "@/shared/types";

export const onSubmitAuthForm = createEvent<IDataFormValues>({
  name: 'form finish',
});

export const loginFx = createEffect({
  name: 'set aut form values fx',
  handler: async (dataAuthForm: IDataFormValues | null) => {
    return fetchUserLogin(dataAuthForm);
  },
});

export const $pending = loginFx.pending;

sample({
  clock: onSubmitAuthForm,
  target: loginFx,         
});
