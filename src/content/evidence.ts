export type Outcome = {
	statement: string;
	detail?: string;
};

type EvidenceBase = {
	slug: string;
	title: string;
	summary: string;
	context?: string;
	outcomes?: readonly Outcome[];
};

export type Project = EvidenceBase & {
	purpose: string;
	problem?: string;
	solution?: string;
	technologies?: readonly string[];
};

export type CaseStudy = EvidenceBase & {
	problem?: string;
	approach?: string;
	contribution?: string;
	decisions?: readonly string[];
	lessons?: readonly string[];
};

export type EngineeringEvidence = EvidenceBase & {
	actions?: readonly string[];
	decision?: string;
	tradeOffs?: readonly string[];
	technologies?: readonly string[];
	lessons?: readonly string[];
};
