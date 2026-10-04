import React, { useRef, useState } from "react";
import { Paperclip, X, FileText, Image as ImageIcon } from "lucide-react";

export interface AttachedFile {
  id: string;
  name: string;
  mimeType: string;
  size: number;
  data: string; // base64, no prefix
  previewUrl?: string; // object URL for images
}

const MAX_FILE_BYTES = 10 * 1024 * 1024; // 10MB
const MAX_FILES = 5;

const ALLOWED = [
  "application/pdf",
  "image/png",
  "image/jpeg",
  "image/webp",
  "image/heic",
  "image/heif",
  "text/plain",
  "text/markdown",
];

function formatBytes(n: number) {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / 1024 / 1024).toFixed(2)} MB`;
}

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      const comma = result.indexOf(",");
      resolve(comma >= 0 ? result.slice(comma + 1) : result);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

interface Props {
  files: AttachedFile[];
  setFiles: React.Dispatch<React.SetStateAction<AttachedFile[]>>;
  disabled?: boolean;
}

export default function FileUploader({ files, setFiles, disabled }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragOver, setDragOver] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const addFiles = async (incoming: FileList | File[]) => {
    setError(null);
    const next: AttachedFile[] = [...files];

    for (const file of Array.from(incoming)) {
      if (next.length >= MAX_FILES) {
        setError(`Maximum ${MAX_FILES} files per message.`);
        break;
      }
      const mime = file.type || "application/octet-stream";
      if (!ALLOWED.includes(mime)) {
        setError(`Unsupported file format: ${file.name} (${mime}). Supported: PDF, PNG, JPG, WEBP, TXT.`);
        continue;
      }
      if (file.size > MAX_FILE_BYTES) {
        setError(`File "${file.name}" exceeds the 10 MB limit (${formatBytes(file.size)}).`);
        continue;
      }

      try {
        const data = await fileToBase64(file);
        next.push({
          id: crypto.randomUUID(),
          name: file.name,
          mimeType: mime,
          size: file.size,
          data,
          previewUrl: mime.startsWith("image/") ? URL.createObjectURL(file) : undefined,
        });
      } catch (err) {
        console.error("Failed to read file", err);
        setError(`Failed to read file ${file.name}`);
      }
    }

    setFiles(next);
  };

  const remove = (id: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  };

  return (
    <div className="space-y-2">
      {/* Dropzone */}
      <div
        onDragOver={(e) => {
          e.preventDefault();
          if (!disabled) setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragOver(false);
          if (!disabled && e.dataTransfer.files.length) {
            addFiles(e.dataTransfer.files);
          }
        }}
        onClick={() => !disabled && inputRef.current?.click()}
        className={`border-2 border-dashed rounded-xl px-4 py-3 text-center text-xs cursor-pointer transition-all ${
          dragOver
            ? "border-blue-500 bg-blue-950/40 text-blue-200"
            : "border-slate-800 bg-slate-950/60 hover:border-slate-700 hover:bg-slate-950 text-slate-400"
        } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        <div className="flex items-center justify-center gap-2">
          <Paperclip className="w-4 h-4 text-blue-400" />
          <span className="font-semibold text-slate-200">
            Attach past paper PDFs, exam screenshots, or study notes
          </span>
        </div>
        <div className="text-[11px] text-slate-500 mt-1">
          Drag & drop or click · PDF, PNG, JPG, WEBP, TXT · Up to 5 files · 10 MB each
        </div>
        <input
          ref={inputRef}
          type="file"
          multiple
          accept=".pdf,.png,.jpg,.jpeg,.webp,.heic,.heif,.txt,.md"
          className="hidden"
          onChange={(e) => {
            if (e.target.files) addFiles(e.target.files);
            e.target.value = "";
          }}
        />
      </div>

      {error && (
        <div className="text-xs text-rose-300 bg-rose-950/50 border border-rose-800/60 rounded-lg px-3 py-2">
          {error}
        </div>
      )}

      {/* Attached file chips */}
      {files.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-1">
          {files.map((f) => (
            <div
              key={f.id}
              className="flex items-center gap-2 bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs shadow-sm"
            >
              {f.previewUrl ? (
                <img
                  src={f.previewUrl}
                  alt={f.name}
                  className="w-7 h-7 object-cover rounded border border-slate-700"
                />
              ) : (
                <div className="w-7 h-7 flex items-center justify-center bg-slate-900 border border-slate-800 rounded text-slate-400">
                  {f.mimeType === "application/pdf" ? (
                    <FileText className="w-4 h-4 text-red-400" />
                  ) : (
                    <ImageIcon className="w-4 h-4 text-blue-400" />
                  )}
                </div>
              )}
              <div className="max-w-[170px]">
                <div className="font-medium text-slate-200 truncate">{f.name}</div>
                <div className="text-[10px] text-slate-500 font-mono">{formatBytes(f.size)}</div>
              </div>
              <button
                type="button"
                onClick={() => remove(f.id)}
                className="text-slate-500 hover:text-rose-400 p-1 transition-colors"
                title="Remove attachment"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
