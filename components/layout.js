import Head from "next/head";

import Link from "next/link";

const name = "Henning";
export const siteTitle = "bertramonline.com";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
 
      </Head>
      <div id="content">
        <div id="header">
          <h1>bertramonline.com</h1>
          <p className="larger">
            <a href="https://misc.bertramonline.com/writings/">writings</a>
            &nbsp;|&nbsp;
            <a href="https://photos.bertramonline.com/">photos</a>
          </p>
          <p className="smaller">
            <a href="https://familyphotos.bertramonline.com/">family photos</a>
            &nbsp;|&nbsp;
            <a href="https://misc.bertramonline.com/photoblog/">
              old family photos
            </a>
            &nbsp;|&nbsp;
            <a
              href="
					/about"
            >
              about
            </a>
          </p>
        </div>

        {children}

        <div id="footer">
          <p>
            This site is lovingly by and large handmade in Copenhagen, Denmark. &copy; 2020.
          </p>
        </div>
      </div>
    </div>
  );
}
