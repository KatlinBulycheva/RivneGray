import styles from "./Footer.module.css";
import logo from "../../imgs/logo-black.png";
import facebookIcon from "../../icons/iconfacebook.svg";
import instagramIcon from "../../icons/iconinstagram.svg";
import telegramIcon from "../../icons/icontelegram.svg";
import tiktokIcon from "../../icons/icontiktok.svg";
import { Link } from "react-router-dom";

export const Footer = function () {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <span>м. Рівне, вул. Чорновола, 10</span>
        <span>(біля ТЦ "Вікторія")</span>
        <span>Ми працюємо:</span>
        <span>Вт-Пт: 11:00 - 22:00</span>
        <span>Сб-Нд: 11:00 23:00</span>
      </div>
      <div className={styles.middle}>
        <b>Інформація:</b>
        <Link to='/delivery-payment'>Доставка та оплата</Link>
        <Link>Обмін і повернення</Link>
        <Link>Система знижок</Link>
        <Link>Політика конфіденційності</Link>
      </div>
      <div className={styles.right}>
        <img src={logo} alt="logo"/>
        <div className={styles.containerSocNet}>
          <img src={facebookIcon} alt="facebook"/>
          <img src={instagramIcon} alt="instagram"/>
          <img src={telegramIcon} alt="telegram"/>
          <img src={tiktokIcon} alt="tiktok"/>
        </div>
      </div>
    </footer>
  );
};
