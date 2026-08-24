import { useState } from "react";

const languages = [
  { code: "en", name: "English" },
  { code: "si", name: "සිංහල" },
  { code: "ta", name: "தமிழ்" },
  { code: "hi", name: "हिन्दी" },
  { code: "ar", name: "العربية" },
  { code: "fr", name: "Français" },
  { code: "zh-CN", name: "中文" },
  { code: "ja", name: "日本語" },
  { code: "ru", name: "Русский" },
];

export default function GoogleTranslate() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("en");

  const translate = (language: string) => {
    setSelected(language);
    setOpen(false);

    const select = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;

    if (!select) {
      console.warn("Google Translate is not loaded yet.");
      return;
    }

    select.value = language;

    select.dispatchEvent(new Event("change", { bubbles: true }));
  };

  const currentLanguage = languages.find((language) => language.code === selected) ??
    languages[0] ?? { code: "en", name: "English" };

  return (
    <div
      style={{
        position: "fixed",
        top: "80px",
        right: "20px",
        zIndex: 999999,
      }}
    >
      <div style={{ position: "relative" }}>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "10px 15px",
            borderRadius: "999px",
            border: "1px solid rgba(255,255,255,0.25)",
            background: "rgba(0,0,0,0.65)",
            color: "#fff",
            fontSize: "14px",
            cursor: "pointer",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        >
          {currentLanguage.name}

          <span
            style={{
              transform: open ? "rotate(180deg)" : "none",
              transition: "0.2s",
            }}
          >
            ▼
          </span>
        </button>

        {open && (
          <div
            style={{
              position: "absolute",
              top: "calc(100% + 8px)",
              right: 0,
              width: "170px",
              maxHeight: "70vh",
              overflowY: "auto",
              padding: "6px",
              borderRadius: "14px",
              background: "rgba(0,0,0,0.95)",
              border: "1px solid rgba(255,255,255,0.15)",
              boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
            }}
          >
            {languages.map((language) => (
              <button
                key={language.code}
                type="button"
                onClick={() => translate(language.code)}
                style={{
                  display: "block",
                  width: "100%",
                  padding: "10px 12px",
                  border: "none",
                  borderRadius: "9px",
                  background: selected === language.code ? "rgba(255,255,255,0.15)" : "transparent",
                  color: "#fff",
                  textAlign: "left",
                  fontSize: "14px",
                  cursor: "pointer",
                }}
              >
                {language.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
