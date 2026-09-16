import type { EvidenceReference } from "./evidence";

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
	homeExcerpt: string;
	personalNote: string;
	focusAreas: readonly string[];
};

export type ExperienceEntry = {
	slug: string;
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

export type ContactLink = PublicLink & {
	category: string;
	actionLabel: string;
	description?: string;
};

export type ProfessionalClaim = {
	slug: string;
	statement: string;
	experienceSlugs?: readonly string[];
	supportingEvidence: readonly EvidenceReference[];
};

export type ProfessionalContent = {
	identity: ProfessionalIdentity;
	summary: ProfessionalSummary;
	experience: readonly ExperienceEntry[];
	claims: readonly ProfessionalClaim[];
	resume: ResumeAccess;
	contact: readonly ContactLink[];
};
