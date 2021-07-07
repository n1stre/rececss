import Head from "next/head";
import LandingLayout from "../components/layout/LayoutLanding";
import Button from "../components/presentational/Button";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Rececss | Not Found</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LandingLayout>
        <div className="d_f h_full ai_c pos_r">
          <div className="fx_1/2">
            <p className="fw_b">
              <span className="fz_9xl mt_0 va_m">404</span>
              <span className="d_ib h_5xl w_1 bgc_black mx_xl va_m"></span>
              <span className="fz_xl va_m">Page not found!</span>
            </p>
          </div>
        </div>
      </LandingLayout>
    </>
  );
}
