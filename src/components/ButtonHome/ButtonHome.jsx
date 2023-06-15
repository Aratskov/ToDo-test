import s from './ButtonHome.module.scss';

export const ButtonHome = ({ title }) => {
  return <button type='submit' className={s.button}>{title}</button>;
};
