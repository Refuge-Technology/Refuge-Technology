import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const useFormStore = create<any>()(
	immer((set) => ({
		form: { name: "ali" },
		updateForm: (action: any) =>
			set((store: any) => ({ form: { ...store.form, ...action } })),
	}))
);
