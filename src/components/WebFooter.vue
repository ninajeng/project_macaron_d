<template>
  <div class="bg-light">
    <div class="container text-md-center py-3">
      <div class="mb-3">
        <a href="#" class="fs-3 logo fw-medium text-decoration-none"
          >macar<i class="bi bi-egg-fill"></i>n
          <h1 class="m-0 fs-3 logo"></h1
        ></a>
      </div>
      <ul
        class="d-none d-md-flex flex-wrap w-100 justify-content-center fw-bolder list-unstyled"
      >
        <li>
          <router-link
            class="text-primary-emphasis text-decoration-none px-3 border-end border-2"
            to="/"
            >使用條款</router-link
          >
        </li>
        <li>
          <router-link
            class="text-primary-emphasis text-decoration-none px-3 border-end border-2"
            to="/"
            >隱私權政策</router-link
          >
        </li>
        <li>
          <router-link
            class="text-primary-emphasis text-decoration-none px-3"
            to="/login"
            >後台登入</router-link
          >
        </li>
      </ul>
      <div class="d-md-flex flex-wrap justify-content-center text-start">
        <p class="me-3">
          <span class="me-2 fw-semibold">營業時間:</span>每週二至週日
          11:00~21:00 (周一公休)
        </p>
        <p class="me-3">
          <span class="me-2 fw-semibold">地址:</span>330桃園市桃園區桃園路1號
        </p>
        <p class="me-3">
          <span class="me-2 fw-semibold">電話:</span
          ><a href="tel:+" class="text-primary-emphasis text-decoration-none"
            >03-3344-5566</a
          >
        </p>
        <p>
          <span class="me-2 fw-semibold">Email:</span
          ><a href="mailto:" class="text-primary-emphasis text-decoration-none"
            >marcaron@email.com</a
          >
        </p>
      </div>
      <p class="text-gray border-top border-primary mb-0 pt-3">
        本網站無商業用途，僅供練習使用
      </p>
    </div>
  </div>
</template>
