<template>
  <header class="header-block">
    <div class="header-block__logo">
      <router-link :to="'/'">
        <img class="" src="logo.svg" alt="logo"
      /></router-link>
    </div>
    <nav class="header-block__nav nav">
      <ul class="nav__lists">
        <li class="nav__list">
          <router-link class="nav__list-link" :to="'/'">Главная</router-link>
        </li>
        <li class="nav__list">
          <router-link class="nav__list-link" :to="'/cart'"
            >Корзина</router-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>
<style lang="scss">
.header-block {
  width: 100%;
  padding: 30px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .nav {
    .nav__lists {
      display: flex;
      gap: 24px;

      .nav__list {
        a {
          color: #333;
          font-family: Roboto;
          font-size: 14px;
          font-weight: 600;
        }
        .router-link-active {
          color: #ba967d;
        }
      }
    }
  }
}
</style>
