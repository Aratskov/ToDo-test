import { NavLink} from 'react-router-dom';
import s from './Welcome.module.scss';
import { BackdropHome } from 'components/BackdropHome/BackdropHome';

export const Welcome = () => {
  return (
    <BackdropHome>
      <div className={s.form}>
              <h1 className={s.h}>Task Pro</h1>
              <p className={s.p}>Supercharge your productivity and take control of your tasks with Task Pro - Don't wait, start achieving your goals now!</p>
        <NavLink to="/auth/register" className={s.a}>Registration</NavLink>
        <NavLink to="/auth/login" className={s.second}>Log In</NavLink>
      </div>
    </BackdropHome>
  );
};
