import './footer.css';
import Image from 'next/image';
import ScrollIntoView from '@app/components/ScrollIntoView/ScrollIntoView';
import Link from 'next/link';
import testIds from '@app/utils/test-ids';

const FooterNote = () => (
  <div className="text-sm font-open-sans-condensed text-gray-c1 float-right">
    <span>©2024 BY <a href="https://greenleafstudio.it" target="_blank" rel="noopener noreferrer"><strong>Green Leaf Studio</strong></a></span>
  </div>
);

const Footer = () => (
  <footer
    className="w-full m-h-56 bg-cyan-600 leading-7 text-black text-gray-c1"
    data-testid={testIds.LAYOUT.FOOTER}
  >

    <div className="max-w-full-content mx-auto gap-16 pt-14 px-3">
      <p className="uppercase sm:mb-10 text-3xl tracking-[.35em]">
        Contact Us
      </p>
    </div>

    <div className="max-w-full-content mx-auto sm:flex gap-16 pt-14 px-3">
      <div className="flex-1 relative">
   
          <div className="text-2xl tracking-wider max-w-[350px]">
            <section className="uppercase">
              <p>
                Feel free to write us. We’d love to hear from you!
              </p>
            </section>
            <section className="mt-8 sm:mt-14">
              <p><strong>Animals Of Our World</strong></p>
              <p>The only UK-registered charity providing sanctuary to neglected animals in Siem Reap, Cambodia.</p>
            </section>
          </div>

       
      
      </div>
      <div className="flex-1 relative">
        <form>
          <ScrollIntoView hashName="#contact" />
          <div className="font-open-sans-condensed">
            <input
              className="footer-form-input"
              id="contact-form-name"
              type="text"
              name="name"
              placeholder="Name"
              aria-required="false"
              maxLength={100}
            />

            <input
              className="footer-form-input"
              id="contact-form-email"
              type="email"
              name="email"
              placeholder="Email"
              required
              aria-required="true"
              pattern="^.+@.+\.[a-zA-Z]{2,63}$"
              maxLength={250}
            />
            <input
              className="footer-form-input"
              id="contact-form-subject"
              type="text"
              name="subject"
              placeholder="Subject"
              aria-required="false"
            />
            <textarea
              className="footer-form-input h-24"
              id="contact-form-message"
              name="message"
              placeholder="Message"
              aria-required="false"
            />
            <div
              aria-disabled="false"
              className="flex justify-center my-4 sm:mt-6"
            >
              <button
                className="btn-third w-full p-1 text-lg w-full sm:w-32 hover:border-gray-c1"
                aria-disabled="false"
              >
                <span>Submit</span>
              </button>
            </div>
          </div>
        </form>
      </div>


    </div>




    <div className="max-w-full-content mx-auto sm:flex gap-16  pb-10 px-3">
      <div className="flex-1 relative">
      <div className="mt-10 sm:mt-24 mb-5">
            <ul
              aria-label="Social Bar"
              className="flex gap-4 sm:absolute bottom-0 left-0 justify-between md:justify-start"
            >
              <li>
                <a
                  href="https://www.facebook.com/aooworld"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/aoow_hos/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@houseofstrays-aoow5715"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@aoowhos_"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-tiktok" viewBox="0 0 16 16">
                    <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
      </div>
      <div className="flex-1 relative">
      <div className="md:mt-10 md:mb-5">
              <div className="sm:absolute right-0 bottom-0">
                <FooterNote />
              </div>
            </div>
      </div>
    </div>

    <div className='text-center text-lg tracking-wider pb-4 md:pb-16'>
    <Link
            className="py-4"
            href="/#top"
            scroll={false}
          >
            <Image
              className="rotate-180 mx-auto"
              width={31}
              height={18}
              alt="back to top"
              src="/common/arrow.svg"
            />
          </Link>

    </div>
    
    <div className='text-center text-lg tracking-wider'>
      <p className='text-sm bold md:text md'>UK Charity #1197372 regulated by the Charity Commission for England and Wales.</p>
    </div>


  </footer>
);

export default Footer;
