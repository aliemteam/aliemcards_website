import * as React from 'react';
import Link from 'next/link';

const styles = require('./footer.sass');

export default () =>
  <div className="footer" role="contentinfo"><div className="container">
    <div className="row footer__cc">
      <div className="footer__cc-image">
        <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/3.0/">
          <img alt="creative-commons" src='/static/by-nc-nd.svg' />
        </a>
      </div>
      <div className="footer__cc-text">
        This work is licensed under a{' '}
        <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/3.0/">
          Creative Commons Attribution-NonCommercial-NoDerivs 3.0 Unported License
        </a>.
      </div>
    </div>
    <div className="row footer__links">
      <div>
        <Link href="/contact"><a>Contact</a></Link>
      </div>
      <div>
        <Link href="/contact"><a>Get Involved</a></Link>
      </div>
      <div>
        <Link href="/about"><a>About</a></Link>
      </div>
    </div>
    <div className="row row--centered">
      <div className="container footer__disclaimer">
        ALiEM Cards content is intended for use by healthcare professionals. Users of this site
        should exercise their own clinical judgment as to the reliability and accuracy of its
        information. Non-healthcare-professionals who use this site do so at their own risk. Content
        on this site should not be construed as medical advice. Users should always confer with
        medical profoessionals regarding decisions about medications, evaluations and other medical
        treatments.
      </div>
    </div>
  </div></div>;
