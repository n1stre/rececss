import Head from "next/head";
import LandingLayout from "../components/layout/LayoutLanding";
import Button from "../components/presentational/Button";
import HeroIllustration from "../components/presentational/HeroIllustration";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Rececss | Minimalistic, fully customizable CSS utilities generator
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LandingLayout>
        <div className="d_f h_full ai_c pos_r">
          <div className="fx_1">
            <h1 className="fz_3xl mt_0">
              Minimalistic, fully customizable CSS utilities generator
            </h1>
            <Button>Get started</Button>
          </div>

          <div className="fx_1 d_f jc_fe">
            <HeroIllustration />
          </div>
        </div>
      </LandingLayout>
    </>
  );
}
