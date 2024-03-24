import { NavLink, Outlet } from "react-router-dom";
import { withQuery } from "../../HOCs/withQuery";
import styles from "./Profile.module.css";

export const ProfileInner = withQuery(({ data }) => {
  return (
    <section className={styles.profile}>
      <nav className={styles.nav}>
        <NavLink
          to="/profile/contacts"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
            Контактні дані
        </NavLink>
        <NavLink
          to="/profile/addresses"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
            Адреса доставки
        </NavLink>
        <NavLink
          to="/profile/orders"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
            Замовлення
        </NavLink>
        <NavLink
          to="/profile/promotions"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
            Доступнi акцii
        </NavLink>
        <NavLink
          to="/profile/backcall"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
            Зворотний зв'язок
        </NavLink>
      </nav>
      <Outlet context={[data]}/>
    </section>
  );
});