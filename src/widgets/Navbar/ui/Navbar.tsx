import { classNames } from "shared/lib/classNames/classNames";
import { Modal } from "shared/ui/Modal";
import { Button } from "shared/ui/Button";
import * as cls from "./Navbar.module.scss";
import { ButtonTheme } from "shared/ui/Button/ui/Button";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { LoginModal } from "features/AuthByUsername";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState(false);
  const { t } = useTranslation("navbar");

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onOpenModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        onClick={onOpenModal}
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
      >
        {t("Войти")}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </div>
  );
};
