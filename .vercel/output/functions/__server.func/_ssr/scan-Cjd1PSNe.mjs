import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
import { i as string, r as object } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/scan-Cjd1PSNe.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
function asRecord(value) {
	return value && typeof value === "object" && !Array.isArray(value) ? value : null;
}
function driveFiles(data) {
	const rec = asRecord(data);
	const files = rec?.files ?? rec?.data;
	if (Array.isArray(files)) return files;
	if (Array.isArray(data)) return data;
	return [];
}
function gmailThreads(data) {
	const rec = asRecord(data);
	const threads = rec?.threads ?? rec?.data;
	if (Array.isArray(threads)) return threads;
	return [];
}
function mimeKind(mime) {
	if (mime.startsWith("image/")) return "image";
	if (mime.startsWith("video/")) return "video";
	if (mime.includes("pdf")) return "pdf";
	if (mime.includes("zip")) return "zip";
	return "file";
}
var scanDrive_createServerFn_handler = createServerRpc({
	id: "814db6738defe8560cfa84dbe3ef09733e696b9782332b4b8bd6b36c7d5ed795",
	name: "scanDrive",
	filename: "src/lib/scan.ts"
}, (opts) => scanDrive.__executeServer(opts));
var scanDrive = createServerFn({ method: "POST" }).validator(object({ query: string().optional() })).handler(scanDrive_createServerFn_handler, async ({ data }) => {
	const { callTool } = await import("./client.server-D9RvPeAI.mjs");
	const { ConnectorType, GoogleDriveTools } = await import("./app-data-jXMq8gca.mjs").then((n) => n.t);
	const result = await callTool(GoogleDriveTools.search, {
		query: data.query ?? "",
		max_results: 20,
		modified_by_me: true
	}, { connectorType: ConnectorType.GoogleDrive });
	if (!result.ok) return {
		ok: false,
		artifacts: [],
		error: result.errorMessage ?? "Drive scan failed",
		loginRequired: result.loginRequired,
		loginUrl: result.loginUrl
	};
	return {
		ok: true,
		artifacts: driveFiles(result.data).slice(0, 20).map((f) => {
			const id = String(f.file_id ?? f.id ?? f.name ?? Math.random());
			const mime = String(f.mime_type ?? f.mimeType ?? "");
			const kind = mimeKind(mime);
			const visual = kind === "image" || kind === "video";
			return {
				id: `drive-${id}`,
				platformId: "drive",
				title: String(f.name ?? "Untitled"),
				subtitle: mime || "Drive file",
				href: f.web_view_link ?? f.webViewLink,
				kind,
				suggestedSlotId: visual ? "cat-labs-visuals" : "incoming",
				confidence: visual ? "medium" : "low",
				origin: "live",
				updated: f.modified_time ?? f.modifiedTime
			};
		})
	};
});
var scanGmail_createServerFn_handler = createServerRpc({
	id: "2ba6886f760597b814f13c1ddca0019c69cca2b1bdd645b91a21348821bbc387",
	name: "scanGmail",
	filename: "src/lib/scan.ts"
}, (opts) => scanGmail.__executeServer(opts));
var scanGmail = createServerFn({ method: "POST" }).validator(object({ query: string().optional() })).handler(scanGmail_createServerFn_handler, async ({ data }) => {
	const { callTool } = await import("./client.server-D9RvPeAI.mjs");
	const { ConnectorType } = await import("./app-data-jXMq8gca.mjs").then((n) => n.t);
	const result = await callTool("gmail_search", {
		query: data.query ?? "mobius OR doinbetter OR nasa newer_than:365d",
		max_results: 12
	}, { connectorType: ConnectorType.Gmail });
	if (!result.ok) return {
		ok: false,
		artifacts: [],
		error: result.errorMessage ?? "Gmail scan failed",
		loginRequired: result.loginRequired,
		loginUrl: result.loginUrl
	};
	return {
		ok: true,
		artifacts: gmailThreads(result.data).slice(0, 12).map((t) => {
			const msg = t.messages?.[0];
			const subject = msg?.subject?.trim() || "Untitled thread";
			const id = String(t.thread_id ?? subject);
			const lower = subject.toLowerCase();
			const nasa = lower.includes("nasa") || lower.includes("soil");
			return {
				id: `gmail-${id}`,
				platformId: "gmail",
				title: subject,
				subtitle: [msg?.from, msg?.date].filter(Boolean).join(" · "),
				kind: "thread",
				suggestedSlotId: nasa ? "doinbetter-nasa" : "incoming",
				confidence: nasa ? "medium" : "low",
				origin: "live"
			};
		})
	};
});
//#endregion
export { scanDrive_createServerFn_handler, scanGmail_createServerFn_handler };
