export function ProductThumb({ sku }: { sku: string }) {
  // Deterministic pseudo-illustration based on SKU prefix
  const prefix = sku.slice(0, 3);
  return (
    <div className="flex h-full w-full items-center justify-center text-axis-line">
      <svg viewBox="0 0 100 100" className="h-2/3 w-2/3 max-h-48 max-w-48" fill="none">
        {prefix === "FST" && (
          <g stroke="currentColor" strokeWidth="2">
            <rect x="42" y="20" width="16" height="60" fill="#cbd5e1" />
            <polygon points="35,20 65,20 60,10 40,10" fill="#94a3b8" />
            <rect x="45" y="80" width="10" height="6" fill="#64748b" />
          </g>
        )}
        {prefix === "BRG" && (
          <g stroke="currentColor" strokeWidth="2" fill="none">
            <circle cx="50" cy="50" r="34" fill="#cbd5e1" />
            <circle cx="50" cy="50" r="24" fill="#94a3b8" />
            <circle cx="50" cy="50" r="14" fill="#e2e8f0" />
            <circle cx="50" cy="50" r="6" fill="#64748b" />
          </g>
        )}
        {prefix === "CBL" && (
          <g stroke="currentColor" strokeWidth="2">
            <circle cx="50" cy="50" r="36" fill="#334155" />
            <circle cx="50" cy="50" r="28" fill="#475569" />
            <circle cx="50" cy="50" r="20" fill="#64748b" />
            <circle cx="50" cy="50" r="12" fill="#94a3b8" />
            <circle cx="50" cy="50" r="6" fill="#cbd5e1" />
          </g>
        )}
        {prefix === "SFT" && (
          <g fill="#cbd5e1" stroke="currentColor" strokeWidth="2">
            <path d="M 30 40 Q 30 20 45 25 L 45 55 Q 40 60 30 55 Z" />
            <path d="M 45 25 Q 50 20 55 25 L 55 55 L 45 55 Z" />
            <path d="M 55 25 Q 60 22 65 27 L 65 55 L 55 55 Z" />
            <path d="M 65 30 Q 70 30 70 40 L 70 55 L 65 55 Z" />
            <rect x="28" y="55" width="45" height="25" fill="#94a3b8" />
          </g>
        )}
        {prefix === "VLV" && (
          <g stroke="currentColor" strokeWidth="2">
            <circle cx="50" cy="50" r="26" fill="#cbd5e1" />
            <rect x="20" y="46" width="60" height="8" fill="#94a3b8" />
            <rect x="46" y="20" width="8" height="20" fill="#64748b" />
            <rect x="38" y="18" width="24" height="4" fill="#64748b" />
          </g>
        )}
        {prefix === "PLC" && (
          <g stroke="currentColor" strokeWidth="2" fill="none">
            <rect x="30" y="30" width="20" height="40" fill="#334155" rx="4" />
            <circle cx="40" cy="45" r="3" fill="#94a3b8" />
            <circle cx="40" cy="55" r="3" fill="#94a3b8" />
            <path d="M 50 50 L 78 50" stroke="#64748b" strokeWidth="3" />
            <circle cx="78" cy="50" r="4" fill="#cbd5e1" />
          </g>
        )}
        {prefix === "GRN" && (
          <g stroke="currentColor" strokeWidth="2">
            <circle cx="50" cy="50" r="34" fill="#94a3b8" />
            <circle cx="50" cy="50" r="30" fill="#cbd5e1" />
            <circle cx="50" cy="50" r="8" fill="#64748b" />
            <path d="M 50 20 L 56 28 M 74 34 L 66 40 M 80 50 L 70 52 M 74 66 L 65 60 M 50 80 L 52 70 M 26 66 L 35 60 M 20 50 L 30 49 M 26 34 L 34 40" stroke="#64748b" />
          </g>
        )}
        {prefix === "ELC" && (
          <g stroke="currentColor" strokeWidth="2">
            <rect x="32" y="24" width="36" height="52" rx="3" fill="#cbd5e1" />
            <rect x="38" y="32" width="24" height="14" rx="2" fill="#334155" />
            <rect x="38" y="52" width="8" height="16" fill="#94a3b8" />
            <rect x="54" y="52" width="8" height="16" fill="#94a3b8" />
            <path d="M 36 24 L 36 16 M 50 24 L 50 16 M 64 24 L 64 16" stroke="#64748b" strokeWidth="3" />
          </g>
        )}
        {prefix === "PNU" && (
          <g stroke="currentColor" strokeWidth="2">
            <rect x="42" y="18" width="16" height="22" rx="2" fill="#cbd5e1" />
            <polygon points="34,40 66,40 62,54 38,54" fill="#94a3b8" />
            <rect x="44" y="54" width="12" height="26" fill="#64748b" />
            <path d="M 44 60 L 56 60 M 44 66 L 56 66 M 44 72 L 56 72" stroke="#334155" strokeWidth="1.5" />
          </g>
        )}
        {prefix === "LUB" && (
          <g stroke="currentColor" strokeWidth="2">
            <rect x="36" y="30" width="28" height="50" rx="3" fill="#cbd5e1" />
            <rect x="42" y="20" width="16" height="10" fill="#94a3b8" />
            <rect x="46" y="12" width="8" height="8" fill="#64748b" />
            <rect x="36" y="44" width="28" height="20" fill="#94a3b8" />
          </g>
        )}
        {prefix === "HYD" && (
          <g stroke="currentColor" strokeWidth="2" fill="none">
            <path d="M 24 76 Q 24 40 50 40 Q 76 40 76 24" stroke="#64748b" strokeWidth="8" />
            <rect x="18" y="72" width="12" height="12" fill="#94a3b8" />
            <rect x="70" y="16" width="12" height="12" fill="#94a3b8" />
          </g>
        )}
        {prefix === "TLS" && (
          <g stroke="currentColor" strokeWidth="2">
            <path d="M 30 78 L 62 46 L 68 52 L 36 84 Z" fill="#94a3b8" />
            <path d="M 62 46 L 74 22 L 80 28 L 68 52 Z" fill="#cbd5e1" />
            <path d="M 36 72 L 42 66 M 44 64 L 50 58 M 52 56 L 58 50" stroke="#334155" strokeWidth="1.5" />
          </g>
        )}
        {!["FST", "BRG", "CBL", "SFT", "VLV", "PLC", "GRN", "ELC", "PNU", "LUB", "HYD", "TLS"].includes(prefix) && (
          <g stroke="currentColor" strokeWidth="2">
            <polygon points="50,18 78,34 78,66 50,82 22,66 22,34" fill="#cbd5e1" />
            <circle cx="50" cy="50" r="12" fill="#94a3b8" />
          </g>
        )}
      </svg>
    </div>
  );
}
