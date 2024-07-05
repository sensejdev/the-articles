import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {classNames} from "shared/lib/classNames/classNames";
import * as cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>Go to main</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>Go to about</AppLink>
            </div>
        </div>
    );
};