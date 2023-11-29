import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const useFormStore = create<any>()(
	immer((set) => ({
		form: {},
		updateForm: (action: any) =>
			set((store: any) => ({
				form: { ...store.form, ...action },
			})),
		resetForm: () =>
			set(() => ({
				form: {},
			})),
	}))
);

export const useFormLoadingStore = create<any>()((set) => ({
	formLoading: false,
	setFormLoading: (action: boolean) =>
		set(() => ({
			formLoading: action,
		})),
}));
