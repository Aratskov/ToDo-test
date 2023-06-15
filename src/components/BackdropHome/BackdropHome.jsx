import s from "./BackdropHome.module.scss"

export const BackdropHome = ({ children }) => {
  return <main className={s.background}>{children}</main>;
};
