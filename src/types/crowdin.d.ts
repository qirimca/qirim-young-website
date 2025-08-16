// Crowdin Proxy Translator types
declare global {
  interface Window {
    proxyTranslator?: {
      init: (config: {
        baseUrl: string;
        appUrl: string;
        valuesParams: string;
        distributionBaseUrl: string;
        filePath: string;
        distribution: string;
        distributionSeparateFiles: boolean;
        languagesData: Record<string, {
          code: string;
          name: string;
          twoLettersCode: string;
        }>;
        defaultLanguage: string;
        defaultLanguageTitle: string;
        languageDetectType: string;
        poweredBy: boolean;
        hideLanguageSwitcher: boolean;
        customLanguageSwitcher: boolean;
      }) => void;
      reload: () => void;
      changeLanguage: (lang: string) => void;
    };
    _jipt?: [string, string | boolean][];
  }
}

export {}