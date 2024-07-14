import { memo, useCallback } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button";
import { Input } from "shared/ui/Input/Input";
import { ButtonTheme } from "shared/ui/Button/ui/Button";
import { loginActions } from "../../model/slice/loginSlice";
import * as cls from "./LoginForm.module.scss";
import { AppDispatch, RootState } from "app/providers/StoreProvider";
import { Text, TextTheme } from "shared/ui/Text/Text";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { username, password, isLoading, error } =
    useAppSelector(getLoginState);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t("Форма авторизации")} />
      {error && <Text theme={TextTheme.ERROR} text={error} />}
      <Input
        value={username}
        autoFocus
        onChange={onChangeUsername}
        placeholder={t("Введите логин")}
      />
      <Input
        value={password}
        onChange={onChangePassword}
        placeholder={t("Введите пароль")}
      />
      <Button
        onClick={onLoginClick}
        theme={ButtonTheme.OUTLINE}
        className={cls.loginBtn}
        disabled={isLoading}
      >
        {t("Войти")}
      </Button>
    </div>
  );
});
