import { classNames } from "shared/lib/classNames/classNames";
import * as cls from "./PageError.module.scss";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button";

interface PageErrorProps {
  className?: string;
}

const reloadPage = () => {
  location.reload();
};

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p className={cls.text}>{t("Произошла непредвиденная ошибка")}</p>
      <Button onClick={reloadPage}>{t("Обновить страницу")}</Button>
    </div>
  );
};
