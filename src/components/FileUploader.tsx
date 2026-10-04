import React, { useRef, useState } from "react";
import { Paperclip, Upload, X, FileText, Image as ImageIcon } from "lucide-react";

export interface AttachedFile {
  id: string;
  name: string;
  mimeType: string;
  size: number;
  data: string;
  status: "parsing" | "ready" | "error";
  error?: string;
  pages?: { page: number; text: string }[];
  detectedQuestions?: string[];
}

interface Props {
  files: AttachedFile[];
  setFiles: (files: AttachedFile[]) => void;
  disabled?: boolean;
}

const ACCEPTED = ".pdf,.png,.jpg,.jpeg,.webp,.txt";
const MAX_FILES = 5;
const MAX_SIZE = 10 * 1024 * 1024;

export default function FileUploader({ files, setFiles, disabled }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragOver, setDragOver] = useState(false);

  const readFile = (file: File): Promise<AttachedFile> =>
    new Promise((resolve) => {
      const base = {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        name: file.name,
        mimeType: file.type || "application/octet-stream",
        size: file.size,
        status: "parsing" as const,
      };
      if (file.size > MAX_SIZE) {
        resolve({ ...base, data: "", status: "error", error: `Too large (${(file.size / 1048576).toFixed(1)} MB > 10 MB)` });
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        const raw = reader.result;
        if (typeof raw !== "string") {
          resolve({ ...base, data: "", status: "error", error: "Unreadable" });
          return;
        }
        const base64 = raw.includes(",") ? raw.split(",")[1] : raw;
        resolve({ ...base, data: base64, status: "ready" });
      };
      reader.onerror = () => resolve({ ...base, data: "", status: "error", error: "Read failed" });
      reader.readAsDataURL(file);
    });

  const handleFiles = async (list: FileList | null) => {
    if (!list || disabled) return;
    const incoming = Array.from(list).filter((f) =>
      ACCEPTED.split(",").includes("." + f.name.split(".").pop()?.toLowerCase())
    );
    const slots = Math.max(0, MAX_FILES - files.length);
    const parsed = await Promise.all(incoming.slice(0, slots).map(readFile));
    setFiles([...files, ...parsed]);
  };

  const remove = (id: string) => setFiles(files.filter((f) => f.id !== id));

  return (
    <div className="space-y-2">
      <div
        onClick={() => !disabled && inputRef.current?.click()}
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => { e.preventDefault(); setDragOver(false); handleFiles(e.dataTransfer.files); }}
        className={`cursor-pointer rounded-xl border-2 border-dashed p-4 transition-all
          ${dragOver ? "border-purple-500 bg-purple-500/10" : "border-slate-700 bg-slate-950/50 hover:border-purple-500/60"}
          ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        <input
          ref={inputRef}
          type="file"
          multiple
          accept={ACCEPTED}
          disabled={disabled}
          className="hidden"
          onChange={(e) => { handleFiles(e.target.files); e.target.value = ""; }}
        />
        <div className="flex flex-col sm:flex-row items-center gap-3 justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-purple-500/20 border border-purple-500/40 flex items-center justify-center">
              <Paperclip className="w-5 h-5 text-purple-300" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Attach Past Paper PDFs, Question Sheets & Exam Notes</p>
              <p className="text-[11px] text-slate-400">PDF · PNG · JPG · WEBP · TXT — up to {MAX_FILES} files, 10 MB each</p>
            </div>
          </div>
          <button
            type="button"
            disabled={disabled || files.length >= MAX_FILES}
            onClick={(e) => { e.stopPropagation(); inputRef.current?.click(); }}
            className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white text-sm font-semibold flex items-center gap-2 shadow active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Upload className="w-4 h-4" />
            <span>Choose File / Upload</span>
          </button>
        </div>
        <p className="text-[10px] text-slate-500 mt-2 text-center">
          {files.length} / {MAX_FILES} attached · or drag & drop anywhere above
        </p>
      </div>

      {files.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {files.map((f) => (
            <div key={f.id} className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs
              ${f.status === "error" ? "bg-rose-500/10 border-rose-500/40 text-rose-200"
              : f.status === "ready" ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-100"
              : "bg-slate-800 border-slate-700 text-slate-200"}`}>
              {f.mimeType.includes("pdf") ? <FileText className="w-3 h-3" />
                : f.mimeType.startsWith("image/") ? <ImageIcon className="w-3 h-3" />
                : <FileText className="w-3 h-3" />}
              <span className="font-medium max-w-[180px] truncate">{f.name}</span>
              <span className="text-[10px] opacity-70">
                {f.status === "parsing" ? "Reading…" : f.status === "ready" ? "✓ Ready" : "✗"}
              </span>
              {f.error && <span className="text-[10px] text-rose-300">{f.error}</span>}
              <button type="button" onClick={(e) => { e.stopPropagation(); remove(f.id); }} className="hover:text-white">
                <X className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
