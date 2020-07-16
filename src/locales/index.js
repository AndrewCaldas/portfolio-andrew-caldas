import i18n from "i18n-js";

import ptBR from "./pt-BR.json";
import enUS from "./en-US.json";

i18n.defaultLocale = "ptBR";
i18n.locale = "ptBR";
i18n.fallbacks = true;
i18n.translations = { ptBR, enUS };

export default i18n;
