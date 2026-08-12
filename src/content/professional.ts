export type PublicLink = {
	label: string;
	url: string;
};

export type ProfessionalIdentity = {
	name: string;
	headline: string;
	location?: string;
	profileLinks: readonly PublicLink[];
};

export type ProfessionalSummary = {
	summary: string;
	focusAreas: readonly string[];
};

export type ExperienceEntry = {
	company: string;
	role: string;
	startDate: string;
	endDate?: string;
	location?: string;
	responsibilities?: readonly string[];
	contributions?: readonly string[];
	outcomes?: readonly string[];
	technologies?: readonly string[];
};

export type ResumeAccess = PublicLink & {
	updatedAt?: string;
};

export type ProfessionalContent = {
	identity: ProfessionalIdentity;
	summary: ProfessionalSummary;
	experience: readonly ExperienceEntry[];
	resume: ResumeAccess;
	contact: readonly PublicLink[];
};
