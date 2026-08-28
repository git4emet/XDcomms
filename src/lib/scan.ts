import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import type { Artifact } from "./catalog";

export type ScanResult = {
  ok: boolean;
  artifacts: Artifact[];
  error?: string;
  loginRequired?: boolean;
  loginUrl?: string;
};

type DriveFile = {
  file_id?: string;
  id?: string;
  name?: string;
  mime_type?: string;
  mimeType?: string;
  web_view_link?: string;
  webViewLink?: string;
  modified_time?: string;
  modifiedTime?: string;
};

type GmailThread = {
  thread_id?: string;
  messages?: Array<{
    subject?: string;
    from?: string;
    date?: string;
  }>;
};

function asRecord(value: unknown): Record<string, unknown> | null {
  return value && typeof value === "object" && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : null;
}

function driveFiles(data: unknown): DriveFile[] {
  const rec = asRecord(data);
  const files = rec?.files ?? rec?.data;
  if (Array.isArray(files)) return files as DriveFile[];
  if (Array.isArray(data)) return data as DriveFile[];
  return [];
}

function gmailThreads(data: unknown): GmailThread[] {
  const rec = asRecord(data);
  const threads = rec?.threads ?? rec?.data;
  if (Array.isArray(threads)) return threads as GmailThread[];
  return [];
}

function mimeKind(mime: string): string {
  if (mime.startsWith("image/")) return "image";
  if (mime.startsWith("video/")) return "video";
  if (mime.includes("pdf")) return "pdf";
  if (mime.includes("zip")) return "zip";
  return "file";
}

export const scanDrive = createServerFn({ method: "POST" })
  .validator(z.object({ query: z.string().optional() }))
  .handler(async ({ data }): Promise<ScanResult> => {
    const { callTool } = await import("@/lib/app-data/client.server");
    const { ConnectorType, GoogleDriveTools } = await import("@/lib/app-data");
    const result = await callTool(
      GoogleDriveTools.search,
      {
        query: data.query ?? "",
        max_results: 20,
        modified_by_me: true,
      },
      { connectorType: ConnectorType.GoogleDrive },
    );
    if (!result.ok) {
      return {
        ok: false,
        artifacts: [],
        error: result.errorMessage ?? "Drive scan failed",
        loginRequired: result.loginRequired,
        loginUrl: result.loginUrl,
      };
    }
    const artifacts: Artifact[] = driveFiles(result.data)
      .slice(0, 20)
      .map((f) => {
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
          updated: f.modified_time ?? f.modifiedTime,
        };
      });
    return { ok: true, artifacts };
  });

export const scanGmail = createServerFn({ method: "POST" })
  .validator(z.object({ query: z.string().optional() }))
  .handler(async ({ data }): Promise<ScanResult> => {
    const { callTool } = await import("@/lib/app-data/client.server");
    const { ConnectorType } = await import("@/lib/app-data");
    const result = await callTool(
      "gmail_search",
      {
        query: data.query ?? "mobius OR doinbetter OR nasa newer_than:365d",
        max_results: 12,
      },
      { connectorType: ConnectorType.Gmail },
    );
    if (!result.ok) {
      return {
        ok: false,
        artifacts: [],
        error: result.errorMessage ?? "Gmail scan failed",
        loginRequired: result.loginRequired,
        loginUrl: result.loginUrl,
      };
    }
    const artifacts: Artifact[] = gmailThreads(result.data)
      .slice(0, 12)
      .map((t) => {
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
          origin: "live",
        };
      });
    return { ok: true, artifacts };
  });
