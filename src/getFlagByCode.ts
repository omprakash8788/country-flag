import flags from "../data/flags.json";

export type CountryCode = keyof typeof flags;

/**
 * Returns flag URL for given country code (like IN, US, UK)
 */
export const getFlagByCode = (code: string): string | null => {
  if (!code) return null;
  const upper = code.trim().toUpperCase() as CountryCode;
  return flags[upper] ?? null;
};
