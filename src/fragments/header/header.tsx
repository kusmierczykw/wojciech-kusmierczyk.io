import * as React from 'react';
import Avatar from '../avatar/avatar';
import Marker from '../marker/marker';
import NoticeAboutMe from '../notice-about-me/notice-about-me';
import './header.scss';

function Header() {
  return (
    <header>
      <section className="row">
        <div className="col-lg-5">
          <Marker />
        </div>

        <div className="col-lg-7">
          <div className="text-uppercase">
            <div
              className="text-size-48 fw-lighter letter-spacing-2"
              style={{ lineHeight: 1 }}
            >
              <span className="me-2">Wojciech</span>
              <span className="highlight">Kuśmierczyk</span>
            </div>

            <div className="text-size-16 fw-light letter-spacing-4">
              Angular Developer
            </div>
          </div>
        </div>
      </section>

      <section className="row align-items-center mt-5 py-5">
        <div className="col-lg-5 text-center">
          <Avatar size="13rem" />
        </div>

        <div className="col-lg-7 px-3">
          <NoticeAboutMe />
        </div>
      </section>
    </header>
  );
}

export default Header;
