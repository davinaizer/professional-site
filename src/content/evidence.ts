export type Outcome = {
	statement: string;
	detail?: string;
};

export type EvidenceReference =
	| { kind: "project"; slug: string }
	| { kind: "case-study"; slug: string };

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
	relatedExperienceSlugs?: readonly string[];
	capabilities?: readonly string[];
	technologies?: readonly string[];
};

export type CaseStudy = EvidenceBase & {
	context: string;
	problem: string;
	role: string;
	constraints: readonly string[];
	decisions: readonly string[];
	productAndUx: string;
	engineering: string;
	outcomes: readonly Outcome[];
	reflection: string;
};
