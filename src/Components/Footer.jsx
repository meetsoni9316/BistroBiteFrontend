import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer p-10 bg-gradient-to-r from-blue to-sb  text-base-content mt-10">
        <aside>
          <img
            src="https://freesvg.org/img/1577464949chef.png "
            className="w-25 h-20 "
          ></img>
          <p className="text-cho">
            BistroBite
            <br />
            Providing delicious dishes since 1992
          </p>
        </aside>
        <nav>
          <h6 className="footer-title text-cho">Services</h6>
          <a className="link link-hover text-cho">Branding</a>
          <a className="link link-hover text-cho">Design</a>
          <a className="link link-hover text-cho">Marketing</a>
          <a className="link link-hover text-cho">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title text-cho">Company</h6>
          <a className="link link-hover text-cho">About us</a>
          <a className="link link-hover text-cho">Contact</a>
          <a className="link link-hover text-cho">Jobs</a>
          <a className="link link-hover text-cho">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title text-cho">Legal</h6>
          <a className="link link-hover text-cho">Terms of use</a>
          <a className="link link-hover text-cho">Privacy policy</a>
          <a className="link link-hover text-cho">Cookie policy</a>
        </nav>
      </footer>
    </>
  );
}

export default Footer;
