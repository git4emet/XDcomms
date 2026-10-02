import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as DialogOverlay, i as DialogDescription, l as Slot, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { i as string, r as object } from "../_libs/zod.mjs";
import { a as LoaderCircle, c as Download, i as Plus, l as ArrowUpRight, o as Link2, r as ScanLine, s as Link2Off, t as X } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { t as Root } from "../_libs/radix-ui__react-separator.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-5O7KmfOI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function isLoginRequired(result) {
	return result.ok === false && result.loginRequired === true;
}
function isFramed() {
	try {
		return window.self !== window.top;
	} catch {
		return true;
	}
}
function redirectToLoginIfRequired(result) {
	if (!isLoginRequired(result)) return false;
	const url = result.loginUrl;
	if (!url) return false;
	if (typeof window === "undefined") return false;
	if (isFramed()) {
		const opened = window.open(url, "_blank");
		if (opened) {
			opened.opener = null;
			return true;
		}
	}
	window.location.assign(url);
	return true;
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var PLATFORMS = [
	{
		id: "github-yours",
		name: "GitHub",
		owner: "git4emet",
		status: "connected",
		blurb: "Your repos. Canonical code lives here."
	},
	{
		id: "github-michael",
		name: "GitHub",
		owner: "kaizencycle",
		status: "boundary",
		blurb: "Michael’s substrate. Reference only — never overwrite."
	},
	{
		id: "canva",
		name: "Canva",
		owner: "DoinBetter",
		status: "connected",
		blurb: "Marks, packets, and visual copies."
	},
	{
		id: "drive",
		name: "Drive",
		owner: "heyMico",
		status: "connected",
		blurb: "Unsorted media drops. Scan to refresh.",
		liveScan: "drive"
	},
	{
		id: "vercel",
		name: "Vercel",
		owner: "dglassesguy-4859",
		status: "connected",
		blurb: "Deploy surfaces linked to GitHub."
	},
	{
		id: "gmail",
		name: "Gmail",
		owner: "dglassesguy",
		status: "connected",
		blurb: "Threads that carry attachments and checklists.",
		liveScan: "gmail"
	},
	{
		id: "notion",
		name: "Notion",
		owner: "workspace",
		status: "connected",
		blurb: "Almost empty. Bind a page when it exists."
	},
	{
		id: "figma",
		name: "Figma",
		owner: "connected",
		status: "connected",
		blurb: "No files found. Paste a file URL to bind."
	},
	{
		id: "gamma",
		name: "Gamma",
		owner: "connected",
		status: "connected",
		blurb: "Decks. Paste a Gamma URL to bind."
	},
	{
		id: "heygen",
		name: "HeyGen",
		owner: "HyperFrames",
		status: "connected",
		blurb: "No projects yet."
	},
	{
		id: "dropbox",
		name: "Dropbox",
		owner: "not connected",
		status: "planned",
		blurb: "Overlapping zips. Bind into the folder map."
	}
];
var SLOTS = [
	{
		id: "mobiius-source",
		name: "Möbii³us source",
		path: "canon/01-mobiius",
		triage: "keep",
		blurb: "Single source of truth. Ops console and system frame.",
		allowOverwrite: true
	},
	{
		id: "doinbetter-floodwater",
		name: "Floodwater",
		path: "canon/02-doinbetter/floodwater",
		triage: "keep",
		blurb: "DOSx³ FRAC(t)oolBootBox. Keep the GitHub copy.",
		allowOverwrite: true
	},
	{
		id: "doinbetter-whisper",
		name: "Fractal Whisper",
		path: "canon/02-doinbetter/whisper",
		triage: "keep",
		blurb: "Self-healing speech-to-text. Adjacent to voice-buddy.",
		allowOverwrite: true
	},
	{
		id: "doinbetter-alta",
		name: "ALTA Survey",
		path: "canon/02-doinbetter/alta",
		triage: "keep",
		blurb: "Self-healing ALTA survey system.",
		allowOverwrite: true
	},
	{
		id: "doinbetter-nasa",
		name: "NASA packet",
		path: "canon/02-doinbetter/nasa",
		triage: "keep",
		blurb: "Space to Soil / Beyond the Algorithm materials.",
		allowOverwrite: true
	},
	{
		id: "cat-labs-mark",
		name: "Cat Labs mark",
		path: "canon/03-cat-labs/mark",
		triage: "keep",
		blurb: "Canonical Möbii³us logo. Duplicates archive.",
		allowOverwrite: true
	},
	{
		id: "cat-labs-visuals",
		name: "Cat Labs visuals",
		path: "canon/03-cat-labs/visuals",
		triage: "keep",
		blurb: "Visual identity, kept separate from Möbii³us code.",
		allowOverwrite: true
	},
	{
		id: "voice-buddy",
		name: "Mom voice buddy",
		path: "canon/04-voice",
		triage: "keep",
		blurb: "Needs an API-key-safe deploy pattern before it ships.",
		allowOverwrite: true
	},
	{
		id: "connectus-spec",
		name: "Connectus",
		path: "canon/05-connectus",
		triage: "spec",
		blurb: "UZFL adapter + hypergraphs. Spec only until English is locked.",
		allowOverwrite: true
	},
	{
		id: "catgpt-surface",
		name: "CatGPT / Physical Phones",
		path: "canon/06-catgpt",
		triage: "keep",
		blurb: "Separate product cluster. Device evidence stays out of Möbii³us.",
		allowOverwrite: true
	},
	{
		id: "deploy-surface",
		name: "Deploy surface",
		path: "canon/01-mobiius/deploy",
		triage: "keep",
		blurb: "Vercel project bound to a GitHub repo.",
		allowOverwrite: true
	},
	{
		id: "michael-boundary",
		name: "Michael boundary",
		path: "canon/90-michael",
		triage: "boundary",
		blurb: "kaizencycle/Mobius-Substrate. Read, cite, never overwrite.",
		allowOverwrite: false
	},
	{
		id: "archive-dumps",
		name: "Archive dumps",
		path: "canon/99-archive",
		triage: "archive",
		blurb: "Grok-builder clones, fork swarm, dated duplicates.",
		allowOverwrite: true
	},
	{
		id: "incoming",
		name: "Incoming",
		path: "canon/00-incoming",
		triage: "rename",
		blurb: "Unsorted drops. Bind here, then move to a keep slot.",
		allowOverwrite: true
	}
];
var FOLDER_MAP = [
	{
		path: "canon/00-incoming",
		label: "Received zips and drops",
		triage: "rename",
		note: "Unsorted. Bind, then promote or archive."
	},
	{
		path: "canon/01-mobiius",
		label: "Möbii³us source of truth",
		triage: "keep",
		note: "One tree. git4emet/mobiius-ops-console is the candidate."
	},
	{
		path: "canon/02-doinbetter",
		label: "DoinBetter product systems",
		triage: "keep",
		note: "Floodwater, Whisper, ALTA, NASA packet. No Michael code."
	},
	{
		path: "canon/03-cat-labs",
		label: "Cat Labs visuals",
		triage: "keep",
		note: "Logo and identity, separate from Möbii³us engineering."
	},
	{
		path: "canon/04-voice",
		label: "Voice surfaces",
		triage: "keep",
		note: "mom-voice-buddy.html — keys stay server-side."
	},
	{
		path: "canon/05-connectus",
		label: "Connectus spec",
		triage: "spec",
		note: "UZFL fold adapter + AI-federation hypergraphs. No code yet."
	},
	{
		path: "canon/06-catgpt",
		label: "CatGPT / Physical Phones",
		triage: "keep",
		note: "askcatgpt.com, physicalphones.com, device evidence. Not Möbii³us."
	},
	{
		path: "canon/90-michael",
		label: "Michael boundary",
		triage: "boundary",
		note: "kaizencycle/* is reference. Do not fork-overwrite."
	},
	{
		path: "canon/99-archive",
		label: "Dated duplicates",
		triage: "archive",
		note: "Grok-builder clones, Jul 7 fork swarm, extra logo copies."
	}
];
var SEED_ARTIFACTS = [
	{
		id: "gh-ops",
		platformId: "github-yours",
		title: "mobiius-ops-console",
		subtitle: "Private TypeScript ops console · committed .env — rotate keys",
		href: "https://github.com/git4emet/mobiius-ops-console",
		kind: "repo",
		suggestedSlotId: "mobiius-source",
		confidence: "high",
		origin: "live",
		updated: "2026-07-12"
	},
	{
		id: "gh-flood",
		platformId: "github-yours",
		title: "DoinBetter-Floodwater",
		subtitle: "Möbii³us DOSx³ FRAC(t)oolBootBox · README shell, no source",
		href: "https://github.com/git4emet/DoinBetter-Floodwater",
		kind: "repo",
		suggestedSlotId: "doinbetter-floodwater",
		confidence: "high",
		origin: "live",
		updated: "2026-04-09"
	},
	{
		id: "gh-whisper",
		platformId: "github-yours",
		title: "DoinBetter-Fractal-Whisper",
		subtitle: "Self-healing speech-to-text · README shell · 10 open issues",
		href: "https://github.com/git4emet/DoinBetter-Fractal-Whisper",
		kind: "repo",
		suggestedSlotId: "doinbetter-whisper",
		confidence: "high",
		origin: "live",
		updated: "2025-07-21"
	},
	{
		id: "gh-alta",
		platformId: "github-yours",
		title: "DoinBetter-ALTA-Survey",
		subtitle: "Self-healing ALTA survey · README shell, no source",
		href: "https://github.com/git4emet/DoinBetter-ALTA-Survey",
		kind: "repo",
		suggestedSlotId: "doinbetter-alta",
		confidence: "high",
		origin: "live",
		updated: "2025-07-21"
	},
	{
		id: "gh-next",
		platformId: "github-yours",
		title: "nextjs-boilerplate",
		subtitle: "Linked Vercel project · git4emet",
		href: "https://github.com/git4emet/nextjs-boilerplate",
		kind: "repo",
		suggestedSlotId: "deploy-surface",
		confidence: "medium",
		origin: "live",
		updated: "2026-06-24"
	},
	{
		id: "mk-substrate",
		platformId: "github-michael",
		title: "Mobius-Substrate",
		subtitle: "Civic-technical substrate · kaizencycle",
		href: "https://github.com/kaizencycle/Mobius-Substrate",
		kind: "repo",
		suggestedSlotId: "michael-boundary",
		confidence: "high",
		origin: "live",
		updated: "2026-08-28"
	},
	{
		id: "mk-shell",
		platformId: "github-michael",
		title: "mobius-browser-shell",
		subtitle: "Chambers for Mobius Substrate",
		href: "https://github.com/kaizencycle/mobius-browser-shell",
		kind: "repo",
		suggestedSlotId: "michael-boundary",
		confidence: "high",
		origin: "live",
		updated: "2026-08-28"
	},
	{
		id: "mk-terminal",
		platformId: "github-michael",
		title: "mobius-civic-ai-terminal",
		subtitle: "Civic AI terminal",
		href: "https://github.com/kaizencycle/mobius-civic-ai-terminal",
		kind: "repo",
		suggestedSlotId: "michael-boundary",
		confidence: "high",
		origin: "live",
		updated: "2026-08-28"
	},
	{
		id: "mk-epicon",
		platformId: "github-michael",
		title: "epicon",
		subtitle: "No consequential action without recorded intent",
		href: "https://github.com/kaizencycle/epicon",
		kind: "repo",
		suggestedSlotId: "michael-boundary",
		confidence: "high",
		origin: "live",
		updated: "2026-08-03"
	},
	{
		id: "mk-atlas",
		platformId: "github-michael",
		title: "atlas-paw",
		subtitle: "MobiusATLAS PAW mobile dashboard",
		href: "https://github.com/kaizencycle/atlas-paw",
		kind: "repo",
		suggestedSlotId: "michael-boundary",
		confidence: "medium",
		origin: "live",
		updated: "2026-08-24"
	},
	{
		id: "cv-logo",
		platformId: "canva",
		title: "Mobii3usLogo_1024x1024",
		subtitle: "Canonical mark · custom 1024",
		href: "https://www.canva.com/d/p7v5tLE31DjfXJn",
		kind: "mark",
		suggestedSlotId: "cat-labs-mark",
		confidence: "high",
		origin: "live",
		updated: "2026-05-22"
	},
	{
		id: "cv-logo-copy-a",
		platformId: "canva",
		title: "Copy of Mobii3usLogo_1024x1024",
		subtitle: "Duplicate mark — archive after binding the original",
		href: "https://www.canva.com/d/WKT5r-B1B-4aezy",
		kind: "mark",
		suggestedSlotId: "cat-labs-mark",
		confidence: "medium",
		origin: "live"
	},
	{
		id: "cv-agg",
		platformId: "canva",
		title: "mobiius_125_aggregation.docx",
		subtitle: "2-page aggregation doc",
		href: "https://www.canva.com/d/sqpIBJTqmYa5IpA",
		kind: "doc",
		suggestedSlotId: "mobiius-source",
		confidence: "medium",
		origin: "live"
	},
	{
		id: "cv-nasa",
		platformId: "canva",
		title: "NASA Beyond the Algorithm packet",
		subtitle: "Onboarding packet copy",
		href: "https://www.canva.com/d/GTriQX5j9qIeMjv",
		kind: "packet",
		suggestedSlotId: "doinbetter-nasa",
		confidence: "high",
		origin: "live"
	},
	{
		id: "cv-where",
		platformId: "canva",
		title: "WhereBuddy Shared Conversation Rollup",
		subtitle: "Import rollup",
		href: "https://www.canva.com/d/TmmF5sE6KEwABmA",
		kind: "doc",
		suggestedSlotId: "incoming",
		confidence: "low",
		origin: "live"
	},
	{
		id: "cv-offline",
		platformId: "canva",
		title: "Discover Offline",
		subtitle: "Custom visual",
		href: "https://www.canva.com/d/vYA4F7cb3cQt39R",
		kind: "visual",
		suggestedSlotId: "cat-labs-visuals",
		confidence: "medium",
		origin: "live"
	},
	{
		id: "vc-next",
		platformId: "vercel",
		title: "nextjs-boilerplate",
		subtitle: "Hobby team · linked to git4emet/nextjs-boilerplate",
		href: "https://vercel.com/dglassesguy-4859s-projects/nextjs-boilerplate",
		kind: "project",
		suggestedSlotId: "deploy-surface",
		confidence: "high",
		origin: "live"
	},
	{
		id: "nt-welcome",
		platformId: "notion",
		title: "Welcome to Notion",
		subtitle: "Starter page — not a system artifact",
		href: "https://app.notion.com/p/32b2fcc80bbd80df84f3e10858bb305b",
		kind: "page",
		suggestedSlotId: null,
		confidence: "low",
		origin: "live"
	},
	{
		id: "gm-buddy",
		platformId: "gmail",
		title: "buddy — archive drop",
		subtitle: "RobbinsBuddyLogdure.pdf + watermark media",
		kind: "thread",
		suggestedSlotId: "incoming",
		confidence: "medium",
		origin: "live",
		updated: "2026-08-27"
	},
	{
		id: "gm-nasa",
		platformId: "gmail",
		title: "NASA Space to Soil checklist",
		subtitle: "Final submission checklist in-thread",
		kind: "thread",
		suggestedSlotId: "doinbetter-nasa",
		confidence: "medium",
		origin: "live",
		updated: "2026-08-25"
	},
	{
		id: "db-voice",
		platformId: "dropbox",
		title: "mom-voice-buddy.html",
		subtitle: "Voice surface. Bind, then apply API-key-safe deploy.",
		kind: "html",
		suggestedSlotId: "voice-buddy",
		confidence: "high",
		origin: "plan"
	},
	{
		id: "db-ops-zip",
		platformId: "dropbox",
		title: "mobiius-ops dump.zip",
		subtitle: "Overlapping zip. Promote if newer than GitHub.",
		kind: "zip",
		suggestedSlotId: "incoming",
		confidence: "medium",
		origin: "plan"
	},
	{
		id: "db-flood-zip",
		platformId: "dropbox",
		title: "DoinBetter-Floodwater-copy.zip",
		subtitle: "Likely duplicate of the GitHub repo — archive.",
		kind: "zip",
		suggestedSlotId: "doinbetter-floodwater",
		confidence: "low",
		origin: "plan"
	},
	{
		id: "db-cat-zip",
		platformId: "dropbox",
		title: "CatLabs-visuals.zip",
		subtitle: "Visual pack. Keep separate from Möbii³us code.",
		kind: "zip",
		suggestedSlotId: "cat-labs-visuals",
		confidence: "high",
		origin: "plan"
	},
	{
		id: "db-michael-zip",
		platformId: "dropbox",
		title: "Mobius-Substrate-fork.zip",
		subtitle: "Boundary. Do not treat as yours to overwrite.",
		kind: "zip",
		suggestedSlotId: "michael-boundary",
		confidence: "high",
		origin: "plan"
	},
	{
		id: "db-connectus",
		platformId: "dropbox",
		title: "connectus-notes.zip",
		subtitle: "Spec material only. No code slot.",
		kind: "zip",
		suggestedSlotId: "connectus-spec",
		confidence: "medium",
		origin: "plan"
	},
	{
		id: "gh-scarlet",
		platformId: "github-yours",
		title: "silver-bold-wood-scarlet",
		subtitle: "122 MB Grok App Builder clone · identical to civic-moonflowers",
		href: "https://github.com/git4emet/silver-bold-wood-scarlet",
		kind: "repo",
		suggestedSlotId: "archive-dumps",
		confidence: "high",
		origin: "live",
		updated: "2026-09-15"
	},
	{
		id: "gh-moon",
		platformId: "github-yours",
		title: "civic-moonflowers",
		subtitle: "122 MB Grok App Builder clone · same tree as scarlet",
		href: "https://github.com/git4emet/civic-moonflowers",
		kind: "repo",
		suggestedSlotId: "archive-dumps",
		confidence: "high",
		origin: "live",
		updated: "2026-09-14"
	},
	{
		id: "gh-findbase",
		platformId: "github-yours",
		title: "FindYourBase",
		subtitle: "44 MB same scaffold (AGENTS.md + startup.sh). Not product source.",
		href: "https://github.com/git4emet/FindYourBase",
		kind: "repo",
		suggestedSlotId: "archive-dumps",
		confidence: "high",
		origin: "live",
		updated: "2026-09-13"
	},
	{
		id: "gh-fork-swarm",
		platformId: "github-yours",
		title: "July 7 fork swarm",
		subtitle: "17 forks with garbled MCP descriptions. Experiments, not canon.",
		href: "https://github.com/git4emet?tab=repositories&type=fork",
		kind: "forks",
		suggestedSlotId: "archive-dumps",
		confidence: "high",
		origin: "live",
		updated: "2026-07-07"
	},
	{
		id: "mk-hive",
		platformId: "github-michael",
		title: "mobius-hive",
		subtitle: "Pushed today. Reference only.",
		href: "https://github.com/kaizencycle/mobius-hive",
		kind: "repo",
		suggestedSlotId: "michael-boundary",
		confidence: "high",
		origin: "live",
		updated: "2026-09-23"
	},
	{
		id: "mk-civic-core",
		platformId: "github-michael",
		title: "Civic-Protocol-Core",
		subtitle: "Python civic protocol. Boundary.",
		href: "https://github.com/kaizencycle/Civic-Protocol-Core",
		kind: "repo",
		suggestedSlotId: "michael-boundary",
		confidence: "high",
		origin: "live",
		updated: "2026-09-23"
	},
	{
		id: "drop-uzfl",
		platformId: "canva",
		title: "UZFL Conversation / Fold Adapter",
		subtitle: "v0.1 Buddy adapter. LISTEN → MAP → FOLD → GATE → ROUTE → RECEIPT",
		kind: "diagram",
		suggestedSlotId: "connectus-spec",
		confidence: "high",
		origin: "live",
		updated: "2026-09-22"
	},
	{
		id: "drop-hypergraphs",
		platformId: "dropbox",
		title: "AI Federation hypergraphs",
		subtitle: "HG-00–HG-12. Architecture spec, not implementation.",
		kind: "zip",
		suggestedSlotId: "connectus-spec",
		confidence: "high",
		origin: "live",
		updated: "2026-09-22"
	},
	{
		id: "drop-dunn",
		platformId: "gmail",
		title: "David Dunn D.O.N.E. pitch",
		subtitle: "Satire resume; last pages are the live-feedback software proposal.",
		kind: "pdf",
		suggestedSlotId: "connectus-spec",
		confidence: "medium",
		origin: "live"
	},
	{
		id: "drop-shirt",
		platformId: "canva",
		title: "Stupid STIRT merch",
		subtitle: "Cat Labs joke merch. Not Möbii³us engineering.",
		kind: "visual",
		suggestedSlotId: "cat-labs-visuals",
		confidence: "high",
		origin: "live"
	},
	{
		id: "drop-toolstar",
		platformId: "canva",
		title: "Tool-star mark",
		subtitle: "Garden tools as a hexagram. Physical Phones / Cat Labs, not the Möbii³us logo.",
		kind: "mark",
		suggestedSlotId: "cat-labs-mark",
		confidence: "medium",
		origin: "live"
	},
	{
		id: "drop-evidence",
		platformId: "drive",
		title: "Evidence digest (cleaned)",
		subtitle: "Samsung/a17xsq snapshot + CatGPT LLC public records. No compromise proven.",
		kind: "report",
		suggestedSlotId: "catgpt-surface",
		confidence: "high",
		origin: "live",
		updated: "2026-09-19"
	},
	{
		id: "drop-2hop",
		platformId: "drive",
		title: "Identity 2-hop graph",
		subtitle: "Operator Gmail cluster × CatGPT LLC × device files. Context, not canon source.",
		kind: "graph",
		suggestedSlotId: "catgpt-surface",
		confidence: "medium",
		origin: "live"
	},
	{
		id: "drop-apk-graph",
		platformId: "drive",
		title: "376 APK inventory graph",
		subtitle: "Unreadable hairball of firmware paths. Keep as evidence, do not promote.",
		kind: "graph",
		suggestedSlotId: "catgpt-surface",
		confidence: "medium",
		origin: "live"
	}
];
var FACTOR_144000 = "2⁷ · 3² · 5³";
var ALPHA = "0.743";
function slotById(id) {
	const slot = SLOTS.find((s) => s.id === id);
	if (!slot) throw new Error(`Unknown slot ${id}`);
	return slot;
}
function platformById(id) {
	const p = PLATFORMS.find((x) => x.id === id);
	if (!p) throw new Error(`Unknown platform ${id}`);
	return p;
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var scanDrive = createServerFn({ method: "POST" }).validator(object({ query: string().optional() })).handler(createSsrRpc("814db6738defe8560cfa84dbe3ef09733e696b9782332b4b8bd6b36c7d5ed795"));
var scanGmail = createServerFn({ method: "POST" }).validator(object({ query: string().optional() })).handler(createSsrRpc("2ba6886f760597b814f13c1ddca0019c69cca2b1bdd645b91a21348821bbc387"));
function nid() {
	return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}
var useCanon = create()(persist((set, get) => ({
	bindings: [],
	customArtifacts: [],
	liveArtifacts: [],
	alphaMode: "shared",
	view: "bind",
	selectedPlatformId: "github-yours",
	sheetArtifactId: null,
	bind: (artifactId, slotId) => {
		const next = {
			id: get().bindings.find((b) => b.artifactId === artifactId)?.id ?? nid(),
			artifactId,
			slotId,
			boundAt: (/* @__PURE__ */ new Date()).toISOString()
		};
		set({
			bindings: [...get().bindings.filter((b) => b.artifactId !== artifactId), next],
			sheetArtifactId: null
		});
	},
	bindMany: (pairs) => {
		let current = get().bindings;
		const now = (/* @__PURE__ */ new Date()).toISOString();
		for (const p of pairs) {
			const next = {
				id: current.find((b) => b.artifactId === p.artifactId)?.id ?? nid(),
				artifactId: p.artifactId,
				slotId: p.slotId,
				boundAt: now
			};
			current = [...current.filter((b) => b.artifactId !== p.artifactId), next];
		}
		set({
			bindings: current,
			sheetArtifactId: null
		});
		return pairs.length;
	},
	unbind: (bindingId) => set({ bindings: get().bindings.filter((b) => b.id !== bindingId) }),
	unbindArtifact: (artifactId) => set({ bindings: get().bindings.filter((b) => b.artifactId !== artifactId) }),
	bindSuggested: () => {
		const arts = allArtifacts(get());
		const current = get().bindings;
		const boundIds = new Set(current.map((b) => b.artifactId));
		const additions = [];
		for (const a of arts) {
			if (boundIds.has(a.id)) continue;
			if (a.suggestedSlotId && a.confidence === "high") additions.push({
				id: nid(),
				artifactId: a.id,
				slotId: a.suggestedSlotId,
				boundAt: (/* @__PURE__ */ new Date()).toISOString()
			});
		}
		if (additions.length) set({ bindings: [...current, ...additions] });
		return additions.length;
	},
	addCustom: (artifact) => set({ customArtifacts: [...get().customArtifacts, artifact] }),
	mergeLive: (artifacts) => {
		const byId = new Map(get().liveArtifacts.map((a) => [a.id, a]));
		for (const a of artifacts) byId.set(a.id, a);
		set({ liveArtifacts: [...byId.values()] });
	},
	setAlphaMode: (alphaMode) => set({ alphaMode }),
	setView: (view) => set({ view }),
	setPlatform: (selectedPlatformId) => set({ selectedPlatformId }),
	openSheet: (sheetArtifactId) => set({ sheetArtifactId })
}), {
	name: "canon-bind",
	partialize: (s) => ({
		bindings: s.bindings,
		customArtifacts: s.customArtifacts,
		alphaMode: s.alphaMode
	})
}));
function allArtifacts(s) {
	const byId = /* @__PURE__ */ new Map();
	for (const a of SEED_ARTIFACTS) byId.set(a.id, a);
	for (const a of s.liveArtifacts) byId.set(a.id, a);
	for (const a of s.customArtifacts) byId.set(a.id, a);
	return [...byId.values()];
}
function useArtifacts() {
	const customArtifacts = useCanon((s) => s.customArtifacts);
	const liveArtifacts = useCanon((s) => s.liveArtifacts);
	return (0, import_react.useMemo)(() => allArtifacts({
		customArtifacts,
		liveArtifacts
	}), [customArtifacts, liveArtifacts]);
}
var badgeVariants = cva("inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium tracking-wide uppercase", {
	variants: { tone: {
		mute: "bg-subtle text-muted",
		keep: "bg-keep-soft text-keep",
		archive: "bg-warn-soft text-warn",
		boundary: "bg-danger-soft text-danger",
		spec: "bg-subtle text-fg",
		bound: "bg-keep-soft text-keep",
		open: "bg-subtle text-muted",
		live: "bg-subtle text-fg",
		plan: "bg-subtle text-muted"
	} },
	defaultVariants: { tone: "mute" }
});
function Badge({ className, tone, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn(badgeVariants({
			tone,
			className
		})),
		...props
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[opacity,transform,background-color,color,box-shadow] duration-[var(--motion-quick)] ease-[var(--ease-out)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-accent text-accent-foreground hover:opacity-90",
			outline: "bg-transparent text-fg shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
			ghost: "bg-transparent text-muted hover:text-fg hover:bg-subtle",
			bind: "bg-accent text-accent-foreground hover:opacity-90"
		},
		size: {
			default: "h-11 rounded-md px-4 text-sm",
			sm: "h-9 rounded-sm px-3 text-sm",
			lg: "h-12 rounded-md px-5 text-sm",
			icon: "size-11 rounded-md"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
function Input({ className, type, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-11 w-full rounded-md bg-subtle px-3 text-sm text-fg shadow-[var(--shadow-border)]", "placeholder:text-subtle-fg", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", "disabled:cursor-not-allowed disabled:opacity-40", className),
		...props
	});
}
function Separator({ className, orientation = "horizontal", decorative = true, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
		decorative,
		orientation,
		className: cn("shrink-0 bg-border", orientation === "horizontal" ? "h-px w-full" : "h-full w-px", className),
		...props
	});
}
function Sheet({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, { ...props });
}
function SheetPortal({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogPortal, { ...props });
}
function SheetOverlay({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {
		className: cn("fixed inset-0 z-50 bg-bg/70 data-[state=open]:animate-in data-[state=closed]:animate-out", className),
		...props
	});
}
function SheetContent({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
		className: cn("fixed z-50 flex flex-col bg-elevated text-fg shadow-[var(--shadow-border)]", "inset-x-0 bottom-0 max-h-[88vh] rounded-t-xl p-5", "md:inset-y-0 md:right-0 md:left-auto md:bottom-auto md:h-full md:w-[min(28rem,100%)] md:rounded-none md:rounded-l-xl md:p-6", "data-[state=open]:animate-in data-[state=closed]:animate-out", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				size: "icon",
				className: "absolute top-3 right-3 size-11",
				"aria-label": "Close",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
			})
		})]
	})] });
}
function SheetTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
		className: cn("font-display text-xl text-fg text-balance", className),
		...props
	});
}
function SheetDescription({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
		className: cn("text-sm text-muted text-pretty", className),
		...props
	});
}
function MobiusMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 48 48",
		fill: "none",
		"aria-hidden": "true",
		className,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M10 24c0-8.8 6.2-14 14.2-14 6.4 0 10.4 3.4 12.8 7.4M38 24c0 8.8-6.2 14-14.2 14-6.4 0-10.4-3.4-12.8-7.4",
			stroke: "currentColor",
			strokeWidth: "1.6",
			strokeLinecap: "round"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M37 17.4c-3.2 4.6-8.2 7.2-13 7.2-4.2 0-7.6-1.8-9.8-4.6M11 30.6c3.2-4.6 8.2-7.2 13-7.2 4.2 0 7.6 1.8 9.8 4.6",
			stroke: "currentColor",
			strokeWidth: "1.6",
			strokeLinecap: "round",
			opacity: "0.55"
		})]
	});
}
var ASSESSED_AT = "2026-09-23";
var VERDICT = {
	yoursVisible: 26,
	yoursOriginals: 9,
	yoursForks: 17,
	michael: 18,
	dumpsMb: 288,
	shells: 3,
	envLeak: true
};
var YOURS_REPOS = [
	{
		fullName: "git4emet/mobiius-ops-console",
		href: "https://github.com/git4emet/mobiius-ops-console",
		owner: "yours",
		language: "TypeScript",
		sizeKb: 352,
		pushed: "2026-08-31",
		visibility: "private",
		fork: false,
		issues: 1,
		action: "keep",
		note: "Only real Möbii³us source on this account. .env is in the tree — rotate.",
		artifactId: "gh-ops",
		slotId: "mobiius-source"
	},
	{
		fullName: "git4emet/DoinBetter-Floodwater",
		href: "https://github.com/git4emet/DoinBetter-Floodwater",
		owner: "yours",
		language: "none",
		sizeKb: 19,
		pushed: "2026-08-31",
		visibility: "public",
		fork: false,
		issues: 1,
		action: "shell",
		note: "README + docs/ + skills.md. Keep the name; do not treat as source.",
		artifactId: "gh-flood",
		slotId: "doinbetter-floodwater"
	},
	{
		fullName: "git4emet/DoinBetter-Fractal-Whisper",
		href: "https://github.com/git4emet/DoinBetter-Fractal-Whisper",
		owner: "yours",
		language: "none",
		sizeKb: 33,
		pushed: "2026-08-31",
		visibility: "public",
		fork: false,
		issues: 10,
		action: "shell",
		note: "Issue tracker is the product. No language, no src.",
		artifactId: "gh-whisper",
		slotId: "doinbetter-whisper"
	},
	{
		fullName: "git4emet/DoinBetter-ALTA-Survey",
		href: "https://github.com/git4emet/DoinBetter-ALTA-Survey",
		owner: "yours",
		language: "none",
		sizeKb: 12,
		pushed: "2026-08-31",
		visibility: "public",
		fork: false,
		issues: 1,
		action: "shell",
		note: "Same shell pattern as Floodwater.",
		artifactId: "gh-alta",
		slotId: "doinbetter-alta"
	},
	{
		fullName: "git4emet/nextjs-boilerplate",
		href: "https://github.com/git4emet/nextjs-boilerplate",
		owner: "yours",
		language: "TypeScript",
		sizeKb: 64,
		pushed: "2026-06-24",
		visibility: "private",
		fork: false,
		issues: 0,
		action: "keep",
		note: "Linked Vercel surface. Template, not canon.",
		artifactId: "gh-next",
		slotId: "deploy-surface"
	},
	{
		fullName: "git4emet/git4emet",
		href: "https://github.com/git4emet/git4emet",
		owner: "yours",
		language: "JavaScript",
		sizeKb: 2089,
		pushed: "2026-08-31",
		visibility: "private",
		fork: false,
		issues: 1,
		action: "triage",
		note: "Profile repo. Leave it; do not bind as product."
	},
	{
		fullName: "git4emet/silver-bold-wood-scarlet",
		href: "https://github.com/git4emet/silver-bold-wood-scarlet",
		owner: "yours",
		language: "JavaScript",
		sizeKb: 124889,
		pushed: "2026-09-15",
		visibility: "public",
		fork: false,
		issues: 0,
		action: "archive",
		note: "Grok App Builder dump. Same file list as civic-moonflowers.",
		artifactId: "gh-scarlet",
		slotId: "archive-dumps"
	},
	{
		fullName: "git4emet/civic-moonflowers",
		href: "https://github.com/git4emet/civic-moonflowers",
		owner: "yours",
		language: "JavaScript",
		sizeKb: 124889,
		pushed: "2026-09-14",
		visibility: "public",
		fork: false,
		issues: 0,
		action: "archive",
		note: "Twin of scarlet. Public 122 MB of sandbox, not product.",
		artifactId: "gh-moon",
		slotId: "archive-dumps"
	},
	{
		fullName: "git4emet/FindYourBase",
		href: "https://github.com/git4emet/FindYourBase",
		owner: "yours",
		language: "Python",
		sizeKb: 44717,
		pushed: "2026-09-13",
		visibility: "public",
		fork: false,
		issues: 0,
		action: "archive",
		note: "Same AGENTS.md / startup.sh scaffold. Language label is a misdetect.",
		artifactId: "gh-findbase",
		slotId: "archive-dumps"
	},
	{
		fullName: "git4emet/* (17 forks)",
		href: "https://github.com/git4emet?tab=repositories&type=fork",
		owner: "yours",
		language: "mixed",
		sizeKb: 0,
		pushed: "2026-07-07",
		visibility: "public",
		fork: true,
		issues: 0,
		action: "archive",
		note: "One-day fork swarm (roundcube, WebGPU, skillcoin, ContactResumes…). Experiments.",
		artifactId: "gh-fork-swarm",
		slotId: "archive-dumps"
	}
];
var MICHAEL_REPOS = [
	{
		fullName: "kaizencycle/Mobius-Substrate",
		href: "https://github.com/kaizencycle/Mobius-Substrate",
		owner: "michael",
		language: "TypeScript",
		sizeKb: 25867,
		pushed: "2026-09-23",
		visibility: "public",
		fork: false,
		issues: 7,
		action: "boundary",
		note: "His source of truth. You have pull, not push.",
		artifactId: "mk-substrate",
		slotId: "michael-boundary"
	},
	{
		fullName: "kaizencycle/mobius-civic-ai-terminal",
		href: "https://github.com/kaizencycle/mobius-civic-ai-terminal",
		owner: "michael",
		language: "TypeScript",
		sizeKb: 13953,
		pushed: "2026-09-23",
		visibility: "public",
		fork: false,
		issues: 0,
		action: "boundary",
		note: "Live today. Cite, do not fork-overwrite.",
		artifactId: "mk-terminal",
		slotId: "michael-boundary"
	},
	{
		fullName: "kaizencycle/mobius-browser-shell",
		href: "https://github.com/kaizencycle/mobius-browser-shell",
		owner: "michael",
		language: "TypeScript",
		sizeKb: 5978,
		pushed: "2026-09-23",
		visibility: "public",
		fork: false,
		issues: 0,
		action: "boundary",
		note: "Chambers UI. Boundary.",
		artifactId: "mk-shell",
		slotId: "michael-boundary"
	},
	{
		fullName: "kaizencycle/mobius-hive",
		href: "https://github.com/kaizencycle/mobius-hive",
		owner: "michael",
		language: "JavaScript",
		sizeKb: 5574,
		pushed: "2026-09-23",
		visibility: "public",
		fork: false,
		issues: 0,
		action: "boundary",
		note: "New since last catalog. Still his.",
		artifactId: "mk-hive",
		slotId: "michael-boundary"
	},
	{
		fullName: "kaizencycle/Civic-Protocol-Core",
		href: "https://github.com/kaizencycle/Civic-Protocol-Core",
		owner: "michael",
		language: "Python",
		sizeKb: 1364,
		pushed: "2026-09-23",
		visibility: "public",
		fork: false,
		issues: 0,
		action: "boundary",
		note: "Pushed today. Boundary.",
		artifactId: "mk-civic-core",
		slotId: "michael-boundary"
	},
	{
		fullName: "kaizencycle/epicon",
		href: "https://github.com/kaizencycle/epicon",
		owner: "michael",
		language: "JavaScript",
		sizeKb: 531,
		pushed: "2026-08-03",
		visibility: "public",
		fork: false,
		issues: 0,
		action: "boundary",
		note: "No consequential action without recorded intent.",
		artifactId: "mk-epicon",
		slotId: "michael-boundary"
	}
];
var OPT_ACTIONS = [
	{
		id: "archive-clones",
		title: "Archive the three App Builder clones",
		detail: "silver-bold-wood-scarlet, civic-moonflowers, and FindYourBase are the same sandbox scaffold. ~288 MB public. They are not Möbii³us source.",
		severity: "high",
		slotId: "archive-dumps",
		artifactIds: [
			"gh-scarlet",
			"gh-moon",
			"gh-findbase"
		],
		connectLabel: "Archive clones"
	},
	{
		id: "env-rotate",
		title: "Rotate keys in mobiius-ops-console",
		detail: "A .env file is committed in the private ops console. Bind the repo as source, then treat keys as burned until they are rotated and gitignored.",
		severity: "high",
		slotId: "mobiius-source",
		artifactIds: ["gh-ops"],
		connectLabel: "Bind ops console"
	},
	{
		id: "archive-forks",
		title: "Park the July 7 fork swarm",
		detail: "Seventeen forks in one day with garbled MCP titles. Useful as a lab notebook, not as canon.",
		severity: "medium",
		slotId: "archive-dumps",
		artifactIds: ["gh-fork-swarm"],
		connectLabel: "Archive forks"
	},
	{
		id: "keep-shells",
		title: "Keep DoinBetter names, admit they are shells",
		detail: "Floodwater, Whisper, and ALTA are README stubs. Bind the names. Do not copy Michael’s substrate into them.",
		severity: "medium",
		slotId: null,
		artifactIds: [
			"gh-flood",
			"gh-whisper",
			"gh-alta"
		],
		connectLabel: "Bind product names"
	},
	{
		id: "michael-line",
		title: "Hold the Michael line",
		detail: "Five of his repos pushed today. You have pull-only. Bind them to the boundary slot so they cannot be overwritten from this page.",
		severity: "high",
		slotId: "michael-boundary",
		artifactIds: [
			"mk-substrate",
			"mk-terminal",
			"mk-shell",
			"mk-hive",
			"mk-civic-core",
			"mk-epicon"
		],
		connectLabel: "Bind boundary"
	},
	{
		id: "connectus-spec",
		title: "Lock Connectus as spec, not code",
		detail: "UZFL fold adapter + HG-00–HG-12 + the Dunn live-feedback pitch are the English spec. Bind them. Do not start a repo.",
		severity: "high",
		slotId: "connectus-spec",
		artifactIds: [
			"drop-uzfl",
			"drop-hypergraphs",
			"drop-dunn"
		],
		connectLabel: "Bind spec"
	},
	{
		id: "cat-labs-visuals",
		title: "Separate Cat Labs visuals from Möbii³us",
		detail: "The STIRT shirt is merch. The tool-star is a Physical Phones / Cat Labs mark, not the Möbii³us logo.",
		severity: "medium",
		slotId: null,
		artifactIds: ["drop-shirt", "drop-toolstar"],
		connectLabel: "Bind visuals"
	},
	{
		id: "catgpt-lane",
		title: "Open a CatGPT lane, off the Möbii³us tree",
		detail: "Evidence digest, identity 2-hop, and the 376-APK graph describe CatGPT LLC / Physical Phones / a Samsung snapshot. Keep them together. They are not ops-console source.",
		severity: "medium",
		slotId: "catgpt-surface",
		artifactIds: [
			"drop-evidence",
			"drop-2hop",
			"drop-apk-graph"
		],
		connectLabel: "Bind CatGPT"
	}
];
var DROPS = [
	{
		artifactId: "drop-uzfl",
		title: "UZFL Fold Adapter",
		what: "Buddy at the center. Speech → canonical action. Guardian deny-by-default. This is Connectus.",
		slotId: "connectus-spec",
		image: "/drops/uzfl-adapter.png"
	},
	{
		artifactId: "drop-hypergraphs",
		title: "AI Federation hypergraphs",
		what: "13 hypergraphs (HG-00 master through HG-12 hardware). Higher-order spec for agents, evidence, MCP, firmware.",
		slotId: "connectus-spec"
	},
	{
		artifactId: "drop-dunn",
		title: "D.O.N.E. pitch",
		what: "Absurdist resume wrapping a real ask: live interactive surface instead of waiting on email. Spec tone, not HR.",
		slotId: "connectus-spec"
	},
	{
		artifactId: "drop-shirt",
		title: "STIRT merch",
		what: "Cat Labs joke about unconstrained builds. Visuals folder.",
		slotId: "cat-labs-visuals",
		image: "/drops/cat-labs-stirt.png"
	},
	{
		artifactId: "drop-toolstar",
		title: "Tool-star mark",
		what: "Garden tools arranged as a hexagram. Brand for Physical Phones / Cat Labs — not the Möbii³us mark.",
		slotId: "cat-labs-mark",
		image: "/drops/tool-star.jpg"
	},
	{
		artifactId: "drop-evidence",
		title: "Evidence digest",
		what: "Observed vs inferred. CatGPT LLC, askcatgpt.com, Physical Phones, Smooth Media, Samsung a17xsq. No malware proven.",
		slotId: "catgpt-surface"
	},
	{
		artifactId: "drop-2hop",
		title: "2-hop identity graph",
		what: "Operator Gmail cluster linked to CatGPT records and device files. Context graph, not a source tree.",
		slotId: "catgpt-surface"
	},
	{
		artifactId: "drop-apk-graph",
		title: "APK inventory hairball",
		what: "376 firmware paths. Unreadable as a map. Bind as evidence, do not try to operate from it.",
		slotId: "catgpt-surface"
	}
];
var HYPERGRAPHS = [
	{
		id: "HG-00",
		name: "Master system",
		lane: "Connectus"
	},
	{
		id: "HG-01",
		name: "Agent orchestration",
		lane: "Connectus"
	},
	{
		id: "HG-02",
		name: "Evidence / provenance",
		lane: "CatGPT evidence"
	},
	{
		id: "HG-03",
		name: "Public share ingestion",
		lane: "Connectus"
	},
	{
		id: "HG-04",
		name: "Provider federation",
		lane: "Connectus"
	},
	{
		id: "HG-05",
		name: "MCP capability",
		lane: "Connectus"
	},
	{
		id: "HG-06",
		name: "Security / trust",
		lane: "Voice keys"
	},
	{
		id: "HG-07",
		name: "RN / KMP platform",
		lane: "Future"
	},
	{
		id: "HG-08",
		name: "Embedded gateway",
		lane: "Physical Phones"
	},
	{
		id: "HG-09",
		name: "Workflow lifecycle",
		lane: "Connectus"
	},
	{
		id: "HG-10",
		name: "Temporal memory",
		lane: "Connectus"
	},
	{
		id: "HG-11",
		name: "Evaluation / attribution",
		lane: "Connectus"
	},
	{
		id: "HG-12",
		name: "Release / hardware",
		lane: "Physical Phones"
	}
];
var ACTION_TRIAGE = {
	keep: "keep",
	shell: "keep",
	archive: "archive",
	boundary: "boundary",
	triage: "rename"
};
function actionTriage(action) {
	return ACTION_TRIAGE[action];
}
function formatSize(kb) {
	if (!kb) return "—";
	if (kb >= 1024) return `${(kb / 1024).toFixed(0)} MB`;
	return `${kb} KB`;
}
function assessmentCsv() {
	const rows = [...YOURS_REPOS, ...MICHAEL_REPOS];
	const header = [
		"owner",
		"fullName",
		"action",
		"language",
		"sizeKb",
		"visibility",
		"fork",
		"pushed",
		"issues",
		"note",
		"href"
	];
	const escape = (v) => {
		const s = String(v);
		return /[",\n]/.test(s) ? `"${s.replaceAll("\"", "\"\"")}"` : s;
	};
	const body = rows.map((r) => [
		r.owner,
		r.fullName,
		r.action,
		r.language,
		r.sizeKb,
		r.visibility,
		r.fork,
		r.pushed,
		r.issues,
		r.note,
		r.href
	].map(escape).join(","));
	return [header.join(","), ...body].join("\n");
}
function assessmentJson(boundIds) {
	return {
		generatedAt: (/* @__PURE__ */ new Date()).toISOString(),
		assessedAt: ASSESSED_AT,
		verdict: VERDICT,
		actions: OPT_ACTIONS.map((a) => ({
			...a,
			bound: a.artifactIds.every((id) => boundIds.has(id))
		})),
		yours: YOURS_REPOS,
		michael: MICHAEL_REPOS,
		drops: DROPS,
		hypergraphs: HYPERGRAPHS
	};
}
var TRIAGE_TONE$1 = {
	keep: "keep",
	rename: "archive",
	archive: "archive",
	boundary: "boundary",
	spec: "spec"
};
function download(filename, text, mime) {
	const blob = new Blob([text], { type: mime });
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = filename;
	a.click();
	URL.revokeObjectURL(url);
}
function DistillView() {
	const artifacts = useArtifacts();
	const bindings = useCanon((s) => s.bindings);
	const bind = useCanon((s) => s.bind);
	const bindMany = useCanon((s) => s.bindMany);
	const boundIds = (0, import_react.useMemo)(() => new Set(bindings.map((b) => b.artifactId)), [bindings]);
	function suggestedSlot(artifactId, fallback) {
		return artifacts.find((a) => a.id === artifactId)?.suggestedSlotId ?? fallback;
	}
	function applyAction(action) {
		const pairs = action.artifactIds.flatMap((id) => {
			const slot = suggestedSlot(id, action.slotId);
			return slot ? [{
				artifactId: id,
				slotId: slot
			}] : [];
		});
		const n = bindMany(pairs);
		if (n === 0) toast("Nothing to bind on this row.");
		else toast(`Bound ${n} ${n === 1 ? "link" : "links"} · ${action.title}`);
	}
	function onExportJson() {
		download("canon-github-assessment.json", JSON.stringify(assessmentJson(boundIds), null, 2), "application/json");
		toast("Assessment JSON downloaded.");
	}
	function onExportCsv() {
		download("canon-github-repos.csv", assessmentCsv(), "text/csv");
		toast("Repo spreadsheet downloaded.");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-elevated p-4 shadow-[var(--shadow-border)] md:p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs font-medium tracking-widest text-muted uppercase",
						children: ["GitHub assessment · ", ASSESSED_AT]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-2xl md:text-3xl",
						children: "Optimization distillation"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-2xl text-sm text-muted",
						children: "Live pull of git4emet and kaizencycle. Push Connect on a row to bind it into canon. Spreadsheet and JSON export are the working copies."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-5 grid grid-cols-2 gap-3 md:grid-cols-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "Your originals",
								value: "9"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "Forks to park",
								value: "17"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "Michael",
								value: "18"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "Clone dumps",
								value: "3",
								warn: true
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							onClick: onExportCsv,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {}), "Spreadsheet"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							onClick: onExportJson,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {}), "JSON"]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-xl",
				children: "Do these first"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 flex flex-col gap-2",
				children: OPT_ACTIONS.map((action) => {
					const done = action.artifactIds.every((id) => boundIds.has(id));
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "rounded-xl bg-elevated p-4 shadow-[var(--shadow-border)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-3 md:flex-row md:items-start md:justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-medium",
											children: action.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											tone: action.severity === "high" ? "boundary" : "archive",
											children: action.severity
										}),
										done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											tone: "keep",
											children: "bound"
										}) : null
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted",
									children: action.detail
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: done ? "outline" : "default",
								className: "shrink-0",
								onClick: () => applyAction(action),
								children: done ? "Rebind" : action.connectLabel
							})]
						})
					}, action.id);
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RepoTable, {
				title: "git4emet — yours",
				repos: YOURS_REPOS,
				boundIds,
				onBind: (repo) => {
					if (!repo.artifactId || !repo.slotId) {
						toast("No bind target for that repo.");
						return;
					}
					bind(repo.artifactId, repo.slotId);
					toast(`Bound ${repo.fullName}.`);
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RepoTable, {
				title: "kaizencycle — Michael, pull only",
				repos: MICHAEL_REPOS,
				boundIds,
				onBind: (repo) => {
					if (!repo.artifactId || !repo.slotId) return;
					bind(repo.artifactId, repo.slotId);
					toast(`Bound at boundary · ${repo.fullName}.`);
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-xl",
					children: "This drop"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: "Classified from the files you just handed over. Phone numbers and raw address lists stay off this page."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 grid gap-3 md:grid-cols-2",
					children: DROPS.map((drop) => {
						const slot = slotById(drop.slotId);
						const done = boundIds.has(drop.artifactId);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3 rounded-xl bg-elevated p-3 shadow-[var(--shadow-border)]",
							children: [drop.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: drop.image,
								alt: "",
								className: "size-16 shrink-0 rounded-md object-cover bg-subtle"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "size-16 shrink-0 rounded-md bg-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-medium",
											children: drop.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											tone: TRIAGE_TONE$1[slot.triage],
											children: slot.triage
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-0.5 text-sm text-muted",
										children: drop.what
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 font-mono text-xs text-muted",
										children: slot.path
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										variant: done ? "outline" : "default",
										className: "mt-2",
										onClick: () => {
											bind(drop.artifactId, drop.slotId);
											toast(`Bound to ${slot.name}.`);
										},
										children: done ? "Bound" : "Connect"
									})
								]
							})]
						}, drop.artifactId);
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-elevated p-4 shadow-[var(--shadow-border)] md:p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl",
						children: "Hypergraph lanes"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "From the federation zip. Spec nodes only — nothing here is a repo to clone."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3",
						children: HYPERGRAPHS.map((hg) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-baseline justify-between gap-2 rounded-lg bg-subtle px-3 py-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-xs text-muted",
									children: hg.id
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex-1 text-sm",
									children: hg.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-muted",
									children: hg.lane
								})
							]
						}, hg.id))
					})
				]
			})
		]
	});
}
function Stat({ label, value, warn }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg bg-subtle px-3 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-xs tracking-wide text-muted uppercase",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: cn("mt-1 font-mono text-lg whitespace-nowrap tabular-nums", warn ? "text-warn" : "text-fg"),
			children: value
		})]
	});
}
function RepoTable({ title, repos, boundIds, onBind }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-xl bg-elevated p-4 shadow-[var(--shadow-border)] md:p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "font-display text-xl",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 -mx-4 overflow-x-auto px-4 md:mx-0 md:px-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full min-w-[40rem] text-left text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-b border-border text-xs tracking-wide text-muted uppercase",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "py-2 pr-3 font-medium",
							children: "Repo"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "py-2 pr-3 font-medium",
							children: "Action"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "py-2 pr-3 font-medium",
							children: "Size"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "py-2 pr-3 font-medium",
							children: "Pushed"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "py-2 font-medium",
							children: "Bind"
						})
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: repos.map((repo) => {
					const done = repo.artifactId ? boundIds.has(repo.artifactId) : false;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b border-border last:border-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "py-3 pr-3 align-top",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: repo.href,
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex items-center gap-1 font-medium hover:text-accent",
									children: [repo.fullName.replace(/^[^/]+\//, ""), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5 text-muted" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-0.5 text-xs text-muted",
									children: repo.note
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-3 pr-3 align-top",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: TRIAGE_TONE$1[actionTriage(repo.action)],
									children: repo.action
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "py-3 pr-3 align-top font-mono text-xs tabular-nums",
								children: [
									formatSize(repo.sizeKb),
									repo.visibility === "private" ? " · priv" : "",
									repo.fork ? " · fork" : ""
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-3 pr-3 align-top font-mono text-xs tabular-nums text-muted",
								children: repo.pushed
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-3 align-top",
								children: repo.artifactId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: done ? "outline" : "default",
									onClick: () => onBind(repo),
									children: done ? "Bound" : "Connect"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-muted",
									children: "leave"
								})
							})
						]
					}, repo.fullName);
				}) })]
			})
		})]
	});
}
var TRIAGE_TONE = {
	keep: "keep",
	rename: "archive",
	archive: "archive",
	boundary: "boundary",
	spec: "spec"
};
function BindPage() {
	const view = useCanon((s) => s.view);
	const setView = useCanon((s) => s.setView);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#work",
				className: "sr-only focus:not-sr-only focus:absolute focus:z-50 focus:m-3 focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-foreground",
				children: "Skip to work"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "mx-auto flex max-w-7xl gap-1 px-4 pt-4 md:px-6",
				"aria-label": "Views",
				children: [
					["bind", "Bind"],
					["distill", "Distill"],
					["map", "Map"],
					["constants", "Constants"]
				].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setView(id),
					className: cn("h-11 rounded-md px-4 text-sm font-medium transition-colors duration-[var(--motion-quick)]", view === id ? "bg-subtle text-fg" : "text-muted hover:text-fg"),
					"aria-current": view === id ? "page" : void 0,
					children: label
				}, id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "work",
				className: "mx-auto max-w-7xl px-4 py-5 md:px-6 md:py-8",
				children: [
					view === "bind" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BindView, {}) : null,
					view === "distill" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DistillView, {}) : null,
					view === "map" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapView, {}) : null,
					view === "constants" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConstantsView, {}) : null
				]
			})
		]
	});
}
function Header() {
	const bindings = useCanon((s) => s.bindings);
	const artifacts = useArtifacts();
	const bindSuggested = useCanon((s) => s.bindSuggested);
	const bound = bindings.length;
	const open = artifacts.length - new Set(bindings.map((b) => b.artifactId)).size;
	function onSuggested() {
		const n = bindSuggested();
		if (n === 0) toast("Nothing left at high confidence.");
		else toast(`Bound ${n} suggested ${n === 1 ? "link" : "links"}.`);
	}
	function onExport() {
		const payload = {
			generatedAt: (/* @__PURE__ */ new Date()).toISOString(),
			alpha: ALPHA,
			factor144000: FACTOR_144000,
			alphaMode: useCanon.getState().alphaMode,
			bindings: useCanon.getState().bindings.map((b) => {
				const art = artifacts.find((a) => a.id === b.artifactId);
				const slot = slotById(b.slotId);
				return {
					artifact: art?.title ?? b.artifactId,
					platform: art?.platformId,
					href: art?.href,
					slot: slot.name,
					path: slot.path,
					triage: slot.triage,
					boundAt: b.boundAt
				};
			}),
			folders: FOLDER_MAP
		};
		navigator.clipboard.writeText(JSON.stringify(payload, null, 2));
		toast("Canon map copied.");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 md:flex-row md:items-end md:justify-between md:px-6 md:py-7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "stagger-in flex items-start gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-0.5 flex size-11 items-center justify-center rounded-lg bg-subtle text-accent",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobiusMark, { className: "size-7" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-widest text-muted uppercase",
						children: "Möbii³us · DoinBetter"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-3xl leading-tight tracking-tight md:text-4xl",
						children: "Canon Bind"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 max-w-xl text-sm text-muted",
						children: "One page. Platforms on the left, canonical slots on the right. Push Connect to make the link."
					})
				] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mr-2 font-mono text-xs text-muted tabular-nums",
						children: [
							artifacts.length,
							" artifacts · ",
							bound,
							" bound · ",
							open,
							" open"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						onClick: onExport,
						children: "Export map"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: onSuggested,
						children: "Bind suggested"
					})
				]
			})]
		})
	});
}
function BindView() {
	const selected = useCanon((s) => s.selectedPlatformId);
	const setPlatform = useCanon((s) => s.setPlatform);
	const artifacts = useArtifacts();
	const bindings = useCanon((s) => s.bindings);
	const boundByArtifact = (0, import_react.useMemo)(() => {
		const m = /* @__PURE__ */ new Map();
		for (const b of bindings) m.set(b.artifactId, b);
		return m;
	}, [bindings]);
	const boundBySlot = (0, import_react.useMemo)(() => {
		const m = /* @__PURE__ */ new Map();
		for (const b of bindings) {
			const list = m.get(b.slotId) ?? [];
			list.push(b);
			m.set(b.slotId, list);
		}
		return m;
	}, [bindings]);
	const visible = artifacts.filter((a) => a.platformId === selected);
	const platform = platformById(selected);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4 lg:grid-cols-[16rem_minmax(0,1fr)_18rem] lg:gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlatformRail, {
				selected,
				onSelect: setPlatform,
				artifacts,
				boundByArtifact
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "min-w-0 rounded-xl bg-elevated p-3 shadow-[var(--shadow-border)] md:p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 flex flex-wrap items-start justify-between gap-3 px-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl",
							children: platform.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted",
							children: [
								platform.owner,
								" · ",
								platform.blurb
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScanButton, { platformId: selected })]
					}),
					visible.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyPlatform, { platformId: selected }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "flex flex-col gap-2",
						children: visible.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArtifactRow, {
							artifact: a,
							binding: boundByArtifact.get(a.id)
						}, a.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddUrl, { platformId: selected })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlotBoard, {
				boundBySlot,
				artifacts
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BindSheet, { artifacts })
		]
	});
}
function PlatformRail({ selected, onSelect, artifacts, boundByArtifact }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
		className: "-mx-4 overflow-x-auto px-4 lg:mx-0 lg:overflow-visible lg:px-0",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "flex gap-2 lg:flex-col",
			children: PLATFORMS.map((p) => {
				const arts = artifacts.filter((a) => a.platformId === p.id);
				const bound = arts.filter((a) => boundByArtifact.has(a.id)).length;
				const active = selected === p.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "shrink-0 lg:shrink",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => onSelect(p.id),
						className: cn("flex h-auto min-h-11 w-full min-w-44 flex-col items-start rounded-lg px-3 py-2.5 text-left transition-colors duration-[var(--motion-quick)] lg:min-w-0", active ? "bg-elevated text-fg" : "text-muted hover:text-fg"),
						"aria-current": active ? "true" : void 0,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex w-full items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-medium text-fg",
								children: p.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: p.status === "boundary" ? "boundary" : p.status === "planned" ? "plan" : "live",
								children: p.status
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-0.5 font-mono text-xs text-muted tabular-nums",
							children: [
								p.owner,
								" · ",
								bound,
								"/",
								arts.length
							]
						})]
					})
				}, p.id);
			})
		})
	});
}
function ArtifactRow({ artifact, binding }) {
	const openSheet = useCanon((s) => s.openSheet);
	const unbind = useCanon((s) => s.unbind);
	const bind = useCanon((s) => s.bind);
	const slot = binding ? slotById(binding.slotId) : null;
	const suggested = artifact.suggestedSlotId ? slotById(artifact.suggestedSlotId) : null;
	function onConnect() {
		if (artifact.suggestedSlotId && artifact.confidence === "high" && !binding) {
			bind(artifact.id, artifact.suggestedSlotId);
			toast(`Bound to ${suggested?.name}.`);
			return;
		}
		openSheet(artifact.id);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
		className: "rounded-lg bg-subtle p-3",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-sm font-medium",
								children: artifact.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: artifact.origin === "live" ? "live" : "plan",
								children: artifact.origin
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: "mute",
								children: artifact.kind
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 text-sm text-muted",
						children: artifact.subtitle
					}),
					slot ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 font-mono text-xs text-keep",
						children: ["Bound · ", slot.path]
					}) : suggested ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 font-mono text-xs text-muted",
						children: [
							"Suggests ",
							suggested.path,
							" · ",
							artifact.confidence
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted",
						children: "No suggestion — pick a slot."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 items-center gap-2",
				children: [artifact.href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: artifact.href,
						target: "_blank",
						rel: "noreferrer",
						"aria-label": `Open ${artifact.title}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})
					})
				}) : null, binding ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					onClick: () => {
						unbind(binding.id);
						toast("Unbound.");
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link2Off, {}), "Unbind"]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: onConnect,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link2, {}), "Connect"]
				})]
			})]
		})
	});
}
function SlotBoard({ boundBySlot, artifacts }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-xl bg-elevated p-3 shadow-[var(--shadow-border)] md:p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl",
				children: "Canonical slots"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-3 text-sm text-muted",
				children: "Keep, archive, or hold the Michael boundary."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-col gap-2",
				children: SLOTS.map((slot) => {
					const links = boundBySlot.get(slot.id) ?? [];
					const conflict = links.length > 1 && slot.id === "cat-labs-mark";
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-lg bg-subtle px-3 py-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium",
									children: slot.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-xs text-muted",
									children: slot.path
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: conflict ? "archive" : TRIAGE_TONE[slot.triage],
								children: conflict ? "conflict" : slot.triage
							})]
						}), links.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted",
							children: "Open"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-1 space-y-0.5",
							children: links.map((b) => {
								const art = artifacts.find((a) => a.id === b.artifactId);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "truncate text-xs text-fg",
									children: art?.title ?? b.artifactId
								}, b.id);
							})
						})]
					}, slot.id);
				})
			})
		]
	});
}
function BindSheet({ artifacts }) {
	const sheetArtifactId = useCanon((s) => s.sheetArtifactId);
	const openSheet = useCanon((s) => s.openSheet);
	const bind = useCanon((s) => s.bind);
	const artifact = artifacts.find((a) => a.id === sheetArtifactId) ?? null;
	const [pick, setPick] = (0, import_react.useState)(null);
	const selected = pick ?? artifact?.suggestedSlotId ?? "incoming";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
		open: Boolean(artifact),
		onOpenChange: (open) => {
			if (!open) {
				openSheet(null);
				setPick(null);
			}
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetContent, { children: artifact ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, { children: "Connect" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetDescription, { children: [
				"Bind ",
				artifact.title,
				" to a canonical slot. High-confidence suggestions can be confirmed in one press."
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 flex-1 space-y-2 overflow-y-auto pr-1",
				children: SLOTS.map((slot) => {
					const active = selected === slot.id;
					const suggested = artifact.suggestedSlotId === slot.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setPick(slot.id),
						className: cn("flex min-h-11 w-full flex-col items-start rounded-lg px-3 py-2.5 text-left transition-colors duration-[var(--motion-quick)]", active ? "bg-subtle text-fg" : "text-muted hover:text-fg"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex w-full items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-medium text-fg",
								children: slot.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex gap-1",
								children: [suggested ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: "keep",
									children: "suggested"
								}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: TRIAGE_TONE[slot.triage],
									children: slot.triage
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs",
							children: slot.path
						})]
					}) }, slot.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 flex gap-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					className: "flex-1",
					onClick: () => {
						bind(artifact.id, selected);
						toast(`Bound to ${slotById(selected).name}.`);
						setPick(null);
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link2, {}), "Connect"]
				})
			})
		] }) : null })
	});
}
function ScanButton({ platformId }) {
	const platform = platformById(platformId);
	const mergeLive = useCanon((s) => s.mergeLive);
	const [busy, setBusy] = (0, import_react.useState)(false);
	if (!platform.liveScan) return null;
	async function run() {
		setBusy(true);
		try {
			const result = platform.liveScan === "drive" ? await scanDrive({ data: {} }) : await scanGmail({ data: {} });
			if (result.loginRequired) {
				redirectToLoginIfRequired({
					ok: false,
					data: null,
					loginRequired: true,
					loginUrl: result.loginUrl
				});
				return;
			}
			if (!result.ok) {
				toast(result.error ?? "Scan failed.");
				return;
			}
			mergeLive(result.artifacts);
			toast(result.artifacts.length ? `Pulled ${result.artifacts.length} from ${platform.name}.` : `No new ${platform.name} artifacts.`);
		} catch (err) {
			toast(err instanceof Error ? err.message : "Scan failed.");
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		variant: "outline",
		onClick: () => void run(),
		disabled: busy,
		children: [busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScanLine, {}), "Scan"]
	});
}
function EmptyPlatform({ platformId }) {
	const p = platformById(platformId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg bg-subtle px-4 py-8 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-sm text-fg",
			children: [
				"Nothing on ",
				p.name,
				" yet."
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-muted",
			children: "Paste a URL below, or scan if this platform supports it."
		})]
	});
}
function AddUrl({ platformId }) {
	const addCustom = useCanon((s) => s.addCustom);
	const openSheet = useCanon((s) => s.openSheet);
	const [title, setTitle] = (0, import_react.useState)("");
	const [href, setHref] = (0, import_react.useState)("");
	function submit(e) {
		e.preventDefault();
		const name = title.trim() || href.trim();
		if (!name) return;
		const id = `custom-${Date.now()}`;
		addCustom({
			id,
			platformId,
			title: name,
			subtitle: href.trim() || "Added here",
			href: href.trim() || void 0,
			kind: "url",
			suggestedSlotId: "incoming",
			confidence: "low",
			origin: "live"
		});
		setTitle("");
		setHref("");
		openSheet(id);
		toast("Artifact added. Pick a slot.");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: submit,
		className: "mt-4 grid grid-cols-1 gap-2 rounded-lg bg-subtle p-3 md:grid-cols-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				value: title,
				onChange: (e) => setTitle(e.target.value),
				placeholder: "Name",
				"aria-label": "Artifact name"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				value: href,
				onChange: (e) => setHref(e.target.value),
				placeholder: "https://",
				inputMode: "url",
				"aria-label": "Artifact URL"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				type: "submit",
				variant: "outline",
				className: "w-full md:w-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {}), "Add"]
			})
		]
	});
}
function MapView() {
	const bindings = useCanon((s) => s.bindings);
	const artifacts = useArtifacts();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-xl bg-elevated p-4 shadow-[var(--shadow-border)] md:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl",
				children: "Target folder structure"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 max-w-2xl text-sm text-muted",
				children: "Canonical layout for overlapping Dropbox zips. Bind first, then keep, rename, archive, or hold at the Michael boundary."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-6 space-y-3",
				children: FOLDER_MAP.map((node) => {
					const slot = SLOTS.find((s) => s.path === node.path);
					const links = slot ? bindings.filter((b) => b.slotId === slot.id) : [];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-lg bg-subtle px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-start justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-sm text-fg",
									children: node.path
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium",
									children: node.label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted",
									children: node.note
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: TRIAGE_TONE[node.triage],
								children: node.triage
							})]
						}), links.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-2 space-y-1",
							children: links.map((b) => {
								const art = artifacts.find((a) => a.id === b.artifactId);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "text-sm text-fg",
									children: [
										art?.title,
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-muted",
											children: ["· ", art ? platformById(art.platformId).name : ""]
										})
									]
								}, b.id);
							})
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs text-muted",
							children: "No bindings yet."
						})]
					}, node.path);
				})
			})
		]
	});
}
function ConstantsView() {
	const alphaMode = useCanon((s) => s.alphaMode);
	const setAlphaMode = useCanon((s) => s.setAlphaMode);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4 md:grid-cols-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-elevated p-5 shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-widest text-muted uppercase",
						children: "Factorization"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl",
						children: "144,000"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-mono text-lg text-accent",
						children: FACTOR_144000
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted",
						children: "Corrected factorization. Use this form everywhere the number is expanded."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-elevated p-5 shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-widest text-muted uppercase",
						children: "Coupling"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-2 font-display text-3xl",
						children: ["α = ", ALPHA]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted",
						children: "Shared until you split it into named per-layer constants."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: alphaMode === "shared" ? "default" : "outline",
							onClick: () => setAlphaMode("shared"),
							children: "Keep shared"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: alphaMode === "split" ? "default" : "outline",
							onClick: () => setAlphaMode("split"),
							children: "Split later"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs text-muted",
						children: alphaMode === "shared" ? "One α across layers. Decision recorded here." : "Flagged to split. Named constants are not defined yet."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-elevated p-5 shadow-[var(--shadow-border)] md:col-span-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl",
						children: "Ownership line"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "my-3" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "grid gap-3 text-sm md:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted",
								children: "Yours"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "git4emet · DoinBetter · Cat Labs · heyMico" })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted",
								children: "Michael"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "kaizencycle/Mobius-Substrate and sibling repos. Boundary." })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted",
								children: "Voice"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "mom-voice-buddy stays unbound until keys are server-only." })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted",
								children: "Connectus"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Spec slot. UZFL + hypergraphs + the live-feedback pitch. No repo yet." })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted",
								children: "CatGPT"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Physical Phones / askcatgpt.com. Separate from Möbii³us source." })] })
						]
					})
				]
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BindPage, {});
}
//#endregion
export { Home as component, redirectToLoginIfRequired as n, isLoginRequired as t };
