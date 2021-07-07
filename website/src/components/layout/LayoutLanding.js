import Image from "next/image";
import Header from "./Header";
import Container from "./Container";
import Footer from "./Footer";
import LogoDecorative from "../presentational/LogoDecorative";

export default function LandingLayout({ children }) {
  return (
    <div className="d_f fxd_c h_100vh">
      <Header />
      <Container className="d_f fx_1 pt_4xl pb_2xl">
        <main className="fx_1 pos_r">
          <LogoDecorative
            // width="1795px"
            // height="544px"
            // unoptimized
            // src="/rececss/rececss_decorative.svg"
            className="h_full pos_a op_0.1"
            // alt=""
          />
          {children}
        </main>
      </Container>
      <Footer />
    </div>
  );
}
