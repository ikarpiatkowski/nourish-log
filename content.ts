interface DictionaryEntry {
  homeHeader: string;
  homeContent: string;
  aboutHeader: string;
  aboutNext: string;
  aboutClerk: string;
  aboutReact: string;
  aboutSupabase: string;
  aboutTailwind: string;
  loading: string;
}
export const dictionary: Record<string, DictionaryEntry> = {
  en: {
    homeHeader: 'Nourish Log',
    homeContent: 'Your personal food tracker!',
    aboutHeader: 'List of Features:',
    aboutNext: 'Search food nutritions',
    aboutClerk: 'Login with github account',
    aboutReact: 'Loading states and errors for components',
    aboutSupabase: 'Database connection and configuration',
    aboutTailwind: 'Managing UI with 3rd party libraries',
    loading: 'Loading...',
  },
  pl: {
    homeHeader: 'Nourish Log',
    homeContent: 'Twój osobisty dziennik żywieniowy!',
    aboutHeader: 'Lista funkcjonalności',
    aboutNext: 'Sprawdź wartości odżywcze',
    aboutClerk: 'Zaloguj się z kontem github',
    aboutReact: 'Dynamiczne ładowanie i obsługa błędów',
    aboutSupabase: 'Połączenie z bazą danych i konfiguracja',
    aboutTailwind: 'Zarządzanie UI z bibliotekami 3rd party',
    loading: 'Ładowanie...',
  },
};
