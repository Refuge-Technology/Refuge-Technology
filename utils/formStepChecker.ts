export const checkStepBasedOnForm = (form: any): number => {
	if (form.home_description) {
		
		return 2;
	}

	if (form.first_name) {
		return 1;
	}
	return 0;
};
