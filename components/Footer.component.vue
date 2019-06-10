<template>
  <section class="footer">
    <div class="footer-links">
      <a href="#">Integration</a>
      <a href="#">Terms & Conditions</a>
      <a href="#">Privacy Policy</a>
      <a href="#">Legal</a>
      <a href="#">Shopping Policy</a>
      <a href="#">Help</a>
    </div>
    <span>Copyright &copy; {{ new Date().getFullYear() }}. Instamarket.co</span>
  </section>
</template>

<style scoped>
  .footer {
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .footer .footer-links {
    margin: 1rem 0;
    text-align: center;
  }

  .footer .footer-links a {
    color: #0b0b0b;
    text-decoration: none;
    text-align: center;
    display: block;
    margin: 0.5rem 0;
    cursor: pointer;
  }

  .footer span {
    font-size: 0.8rem;
  }

  @media (min-width: 769px) {
    .footer .footer-links {
      display: flex;
      justify-content: space-around;
      width: 100%;
      padding: 0 4rem;
      margin: 1rem 0;
    }
  }
</style>
