import { useState } from "react";

const languages = [
  {
    code: "en",
    name: "English",
    flag: "https://flagcdn.com/w40/gb.png",
  },
  {
    code: "de",
    name: "German",
    flag: "https://flagcdn.com/w40/de.png",
  },
  {
    code: "ru",
    name: "Russian",
    flag: "https://flagcdn.com/w40/ru.png",
  },
  {
    code: "fr",
    name: "French",
    flag: "https://flagcdn.com/w40/fr.png",
  },
  {
    code: "nl",
    name: "Dutch",
    flag: "https://flagcdn.com/w40/nl.png",
  },
  {
    code: "pl",
    name: "Polish",
    flag: "https://flagcdn.com/w40/pl.png",
  },
  {
    code: "it",
    name: "Italian",
    flag: "https://flagcdn.com/w40/it.png",
  },
  {
    code: "es",
    name: "Spanish",
    flag: "https://flagcdn.com/w40/es.png",
  },
  {
    code: "sv",
    name: "Swedish",
    flag: "https://flagcdn.com/w40/se.png",
  },
  {
    code: "da",
    name: "Danish",
    flag: "https://flagcdn.com/w40/dk.png",
  },
  {
    code: "no",
    name: "Norwegian",
    flag: "https://flagcdn.com/w40/no.png",
  },
  {
    code: "fi",
    name: "Finnish",
    flag: "https://flagcdn.com/w40/fi.png",
  },
  {
    code: "cs",
    name: "Czech",
    flag: "https://flagcdn.com/w40/cz.png",
  },
  {
    code: "pt",
    name: "Portuguese",
    flag: "https://flagcdn.com/w40/pt.png",
  },
  {
    code: "ro",
    name: "Romanian",
    flag: "https://flagcdn.com/w40/ro.png",
  },
];

export default function GoogleTranslate({
  inline = false,
}: {
  inline?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("en");

  const translate = (language: string) => {
    setSelected(language);
    setOpen(false);

    const select = document.querySelector(
      ".goog-te-combo"
    ) as HTMLSelectElement | null;

    if (!select) {
      console.warn("Google Translate is not loaded yet.");
      return;
    }

    select.value = language;
    select.dispatchEvent(new Event("change", { bubbles: true }));
  };

  const currentLanguage =
    languages.find((language) => language.code === selected) ??
    languages[0];

  return (
    <div
      style={
        inline
          ? {
              position: "relative",
              zIndex: 999999,
            }
          : {
              position: "fixed",
              top: "80px",
              right: "20px",
              zIndex: 999999,
            }
      }
    >
      <div style={{ position: "relative" }}>
        {/* Main Language Button */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "9px",
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
          {/* Flag Image */}
          <img
            src={currentLanguage.flag}
            alt={currentLanguage.name}
            style={{
              width: "24px",
              height: "17px",
              objectFit: "cover",
              borderRadius: "2px",
              display: "block",
            }}
          />

          <span>{currentLanguage.name}</span>

          <span
            style={{
              fontSize: "10px",
              transform: open ? "rotate(180deg)" : "none",
              transition: "0.2s",
            }}
          >
            ▼
          </span>
        </button>

        {/* Dropdown */}
        {open && (
          <div
            style={{
              position: "absolute",
              top: "calc(100% + 8px)",
              right: 0,
              width: "190px",
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
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  width: "100%",
                  padding: "10px 12px",
                  border: "none",
                  borderRadius: "9px",
                  background:
                    selected === language.code
                      ? "rgba(255,255,255,0.15)"
                      : "transparent",
                  color: "#fff",
                  textAlign: "left",
                  fontSize: "14px",
                  cursor: "pointer",
                  transition: "background 0.2s ease",
                }}
              >
                {/* Flag Image */}
                <img
                  src={language.flag}
                  alt={language.name}
                  style={{
                    width: "25px",
                    height: "18px",
                    objectFit: "cover",
                    borderRadius: "2px",
                    display: "block",
                    flexShrink: 0,
                  }}
                />

                <span>{language.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}