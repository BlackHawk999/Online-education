<template>
  <div class="footer">
    <div class="container">
      <div class="footer-wrapper">
        <div class="footer-logo-wrapper">
          <div class="logo-wrapper">
            <img src="@/assets/images/footer-logo.svg" alt="" />
          </div>
          <p class="subtitle-logo">
            Language2Go — интерактивная платформа для легкого, удобного и
            быстрого изучения иностранных языков.
          </p>
          <div class="footer-payment">
            <div class="payment-logo">
              <img src="@/assets/images/visa.svg" alt="" />
            </div>
            <div class="payment-logo">
              <img src="@/assets/images/mscard.svg" alt="" />
            </div>
            <div class="payment-logo">
              <img src="@/assets/images/mir.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="footer-education">
          <h6 class="footer-link-title">Обучение</h6>
          <router-link class="link" to="#">Все языки</router-link>
          <router-link class="link" to="#">Взрослым</router-link>
          <router-link class="link" to="#">Детям и подросткам</router-link>
          <router-link class="link" to="#">Мини-курсы</router-link>
          <router-link class="link" to="#">Тренажеры</router-link>
          <router-link class="link" to="#">Индивидуальные занятия</router-link>
        </div>
        <div class="footer-education">
          <h6 class="footer-link-title">Информация</h6>
          <router-link class="link" to="#">О нас</router-link>
          <router-link class="link" to="#">Отзывы</router-link>
          <router-link class="link" to="#">Новости</router-link>
          <router-link class="link" to="#">Частые вопросы</router-link>
          <router-link class="link" to="#">Условия оплаты</router-link>
          <router-link class="link" to="#">Контакты</router-link>
        </div>
        <div class="footer-contacts">
          <h6 class="footer-link-title">Контакты</h6>
          <p class="footer-tel">+998 91 0133564</p>
          <a
            class="footer-mail"
            href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
            >elsadulaev@gmail.com</a
          >
          <p class="footer-mail">130100 Jizzakh, Uzbekistan</p>
          <div class="footer-contact-icons">
            <div class="icon-wrapper fb">
              <svg
                width="11"
                height="20"
                viewBox="0 0 11 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.11986 3.32003H10.9999V0.14003C10.0896 0.045377 9.17502 -0.00135428 8.25986 2.98641e-05C5.53986 2.98641e-05 3.67986 1.66003 3.67986 4.70003V7.32003H0.609863V10.88H3.67986V20H7.35986V10.88H10.4199L10.8799 7.32003H7.35986V5.05003C7.35986 4.00003 7.63986 3.32003 9.11986 3.32003Z"
                  fill="white"
                />
              </svg>
            </div>
            <div class="icon-wrapper yt">
              <svg
                width="24"
                height="16"
                viewBox="0 0 24 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 5.71047C23.0495 4.27913 22.7365 2.85849 22.09 1.58047C21.6514 1.05607 21.0427 0.702182 20.37 0.580472C17.5875 0.327998 14.7936 0.224516 12 0.270472C9.21667 0.222431 6.43274 0.322573 3.66003 0.570473C3.11185 0.670189 2.60454 0.927314 2.20003 1.31047C1.30003 2.14047 1.20003 3.56047 1.10003 4.76047C0.954939 6.91804 0.954939 9.08291 1.10003 11.2405C1.12896 11.9159 1.22952 12.5863 1.40003 13.2405C1.5206 13.7455 1.76455 14.2128 2.11003 14.6005C2.51729 15.0039 3.03641 15.2757 3.60003 15.3805C5.75594 15.6466 7.92824 15.7569 10.1 15.7105C13.6 15.7605 16.67 15.7105 20.3 15.4305C20.8775 15.3321 21.4112 15.06 21.83 14.6505C22.11 14.3704 22.3191 14.0276 22.44 13.6505C22.7977 12.5531 22.9733 11.4046 22.96 10.2505C23 9.69047 23 6.31047 23 5.71047ZM9.74003 10.8505V4.66047L15.66 7.77047C14 8.69047 11.81 9.73047 9.74003 10.8505Z"
                  fill="white"
                />
              </svg>
            </div>
            <div class="icon-wrapper vk">
              <svg
                width="20"
                height="12"
                viewBox="0 0 20 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.8021 8.2982C17.8021 8.2982 19.4191 9.8952 19.8191 10.6342C19.8269 10.6449 19.8329 10.6567 19.8371 10.6692C20.0001 10.9422 20.0401 11.1562 19.9601 11.3142C19.8251 11.5752 19.3681 11.7062 19.2131 11.7172H16.3551C16.1561 11.7172 15.7421 11.6652 15.2381 11.3172C14.8531 11.0482 14.4701 10.6052 14.0991 10.1722C13.5451 9.5292 13.0661 8.9712 12.5811 8.9712C12.5198 8.97107 12.459 8.98121 12.4011 9.0012C12.0341 9.1172 11.5681 9.6402 11.5681 11.0332C11.5681 11.4692 11.2241 11.7172 10.9831 11.7172H9.67409C9.22809 11.7172 6.90609 11.5612 4.84709 9.3902C2.32409 6.7322 0.05809 1.4002 0.03609 1.3532C-0.10491 1.0082 0.19109 0.820203 0.51109 0.820203H3.39709C3.78409 0.820203 3.91009 1.0542 3.99809 1.2642C4.10009 1.5052 4.47809 2.4692 5.09809 3.5522C6.10209 5.3142 6.71909 6.0312 7.21209 6.0312C7.30471 6.03148 7.39577 6.00733 7.47609 5.9612C8.12009 5.6072 8.00009 3.3072 7.97009 2.8332C7.97009 2.7412 7.96909 1.8062 7.63909 1.3542C7.40309 1.0302 7.00109 0.904203 6.75809 0.858203C6.82309 0.764203 6.96109 0.620203 7.13809 0.535203C7.57909 0.315203 8.37609 0.283203 9.16709 0.283203H9.60609C10.4641 0.295203 10.6861 0.350203 10.9981 0.429203C11.6261 0.579203 11.6381 0.986203 11.5831 2.3722C11.5671 2.7682 11.5501 3.2142 11.5501 3.7392C11.5501 3.8512 11.5451 3.9762 11.5451 4.1032C11.5261 4.8142 11.5011 5.6152 12.0031 5.9442C12.0682 5.98476 12.1434 6.00624 12.2201 6.0062C12.3941 6.0062 12.9151 6.0062 14.3281 3.5812C14.9481 2.5102 15.4281 1.2472 15.4611 1.1522C15.4891 1.0992 15.5731 0.950203 15.6751 0.890203C15.7476 0.851598 15.8289 0.832314 15.9111 0.834203H19.3061C19.6761 0.834203 19.9271 0.890203 19.9761 1.0302C20.0581 1.2572 19.9601 1.9502 18.4101 4.0462C18.1491 4.3952 17.9201 4.6972 17.7191 4.9612C16.3141 6.8052 16.3141 6.8982 17.8021 8.2982Z"
                  fill="white"
                />
              </svg>
            </div>
            <div class="icon-wrapper tw">
              <svg
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 2.80021C19.2483 3.1263 18.4534 3.34187 17.64 3.44021C18.4982 2.92753 19.1413 2.12099 19.45 1.17021C18.6436 1.65027 17.7608 1.98851 16.84 2.17021C16.2245 1.50278 15.405 1.05851 14.5098 0.907061C13.6147 0.755616 12.6945 0.905568 11.8938 1.3334C11.093 1.76123 10.4569 2.44274 10.0852 3.27105C9.71355 4.09935 9.62729 5.0276 9.84 5.91021C8.20943 5.82774 6.61444 5.40316 5.15865 4.66407C3.70287 3.92498 2.41885 2.8879 1.39 1.62021C1.02914 2.25038 0.839519 2.96403 0.84 3.69021C0.83872 4.36459 1.00422 5.02883 1.32176 5.62377C1.63929 6.21872 2.09902 6.72592 2.66 7.10021C2.00798 7.08247 1.36989 6.90751 0.8 6.59021V6.64021C0.804887 7.5851 1.13599 8.4993 1.73731 9.22818C2.33864 9.95705 3.17326 10.4559 4.1 10.6402C3.74326 10.7488 3.37287 10.806 3 10.8102C2.74189 10.8072 2.48442 10.7838 2.23 10.7402C2.49391 11.553 3.00462 12.2634 3.69107 12.7724C4.37753 13.2814 5.20558 13.5638 6.06 13.5802C4.6172 14.7155 2.83588 15.3351 1 15.3402C0.665735 15.3413 0.331736 15.3213 0 15.2802C1.87443 16.4905 4.05881 17.1329 6.29 17.1302C7.82969 17.1462 9.35714 16.8552 10.7831 16.2743C12.2091 15.6934 13.505 14.8341 14.5952 13.7467C15.6854 12.6593 16.548 11.3656 17.1326 9.94112C17.7172 8.51663 18.012 6.98994 18 5.45021C18 5.28021 18 5.10021 18 4.92021C18.7847 4.33502 19.4615 3.61763 20 2.80021Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sub-footer">
      <div class="container">
        <div class="sub-footer-wrapper">
          <p class="sub-footer-year">© 2022 Language to go</p>
          <div class="sub-footer-items">
            <p class="sub-footer-text">Правовая оговорка</p>
            <p class="sub-footer-text">Правовая оговорка</p>
            <p class="sub-footer-text">Политика конфиденциальности</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  padding-top: 77px;
  background: #641f76;

  &-wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  .subtitle-logo {
    width: 70%;
    font-weight: 500;
    font-size: 14px;
    line-height: 120%;
    color: #ffffff;
    margin-top: 30px;
    margin-bottom: 44px;
  }

  &-payment {
    display: flex;
    align-items: center;
  }

  .payment-logo {
    &:not(:last-child) {
      margin-right: 15px;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  &-education {
    display: flex;
    flex-direction: column;

    .link {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #ffffff;
      text-decoration: none;
      margin-bottom: 4px;
    }
  }

  &-link-title {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: #ffffff;
    margin: 0;
    margin-bottom: 11px;
  }

  &-tel {
    font-weight: 700;
    font-size: 18px;
    line-height: 113%;
    color: #ffffff;
    margin: 0;
  }

  &-mail {
    font-weight: 400;
    font-size: 16px;
    line-height: 113%;
    color: #ffffff;
    text-decoration: none;
  }

  &-contact-icons {
    display: flex;
    align-items: center;
  }

  .icon-wrapper {
    transition: 0.3s all;
    cursor: pointer;

    &:not(:last-child) {
      margin-right: 18px;
    }

    &.fb:hover {
      svg path {
        fill: #3b5998;
      }
    }
    &.yt:hover {
      svg path {
        fill: #ff0000;
      }
    }
    &.vk:hover {
      svg path {
        fill: #4c75a3;
      }
    }
    &.tw:hover {
      svg path {
        fill: #00acee;
      }
    }
    svg {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .sub-footer {
    margin-top: 100px;
    background: #232323;
    &-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &-year {
      font-weight: 400;
      font-size: 14px;
      line-height: 113%;
      color: #ffffff;
    }

    &-items {
      display: flex;
      align-items: center;
    }

    &-text {
      font-weight: 400;
      font-size: 14px;
      line-height: 113%;
      letter-spacing: 0.01em;
      color: #ffffff;

      &:not(:last-child) {
        margin-right: 15px;
      }
    }
  }
}
</style>
