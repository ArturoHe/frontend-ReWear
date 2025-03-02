const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>ReWear</h2>
            <p>Moda sostenible para un futuro mejor</p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h3>Navegación</h3>
              <ul>
                <li>
                  <a href="#quienes-somos">¿Quiénes Somos?</a>
                </li>
                <li>
                  <a href="#que-queremos">¿Qué Queremos?</a>
                </li>
                <li>
                  <a href="#mision">Misión</a>
                </li>
                <li>
                  <a href="#vision">Visión</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Legal</h3>
              <ul>
                <li>
                  <a href="#">Términos y Condiciones</a>
                </li>
                <li>
                  <a href="#">Política de Privacidad</a>
                </li>
                <li>
                  <a href="#">Cookies</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Contacto</h3>
              <ul>
                <li>
                  <a href="mailto:info@rewear.co">info@rewear.co</a>
                </li>
                <li>
                  <a href="tel:+573001234567">+57 300 123 4567</a>
                </li>
                <li>Bogotá, Colombia</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} ReWear. Todos los derechos
            reservados.
          </p>
          <div className="social-icons">
            <a href="#" aria-label="Facebook">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
