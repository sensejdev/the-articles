import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button";
import { Input } from "shared/ui/Input/Input";
import * as cls from "./LoginForm.module.scss";

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input autoFocus placeholder={t("Введите логин")} />
      <Input placeholder={t("Введите пароль")} />
      <Button className={cls.loginBtn}>{t("Войти")}</Button>
    </div>
  );
};
