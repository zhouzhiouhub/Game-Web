const clientMessageKeys = [
  "nav",
  "footer",
  "languageSwitcher",
  "cookieConsent",
  "devices",
  "seo",
] as const;

export function pickClientMessages(messages: Record<string, unknown>) {
  return Object.fromEntries(
    clientMessageKeys.flatMap((key) => {
      const value = messages[key];
      return value === undefined ? [] : [[key, value]];
    }),
  );
}
