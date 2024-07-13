import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/Input";
import { useState } from "react";

const Main = () => {
  const { t } = useTranslation("main");
  const [value, setValue] = useState("");

  const onChange = (val: string) => {
    setValue(val);
  };

  return <div>{t("Главная")} </div>;
};

export default Main;
