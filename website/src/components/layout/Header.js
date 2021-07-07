import Link from "next/link";
import Container from "./Container";
import Logo from "../presentational/Logo";

function Header() {
  return (
    <header className="h_4xl d_f fxd_c jc_c bxsh_2xs pos_f w_full z_1 bgc_black c_white t_0">
      <Container>
        <div className="d_f jc_sb ai_c">
          <Link href="/">
            <Logo
              // width="120px"
              // height="24px"
              // src="/rececss/rececss_long.svg"
              className="h_lg"
              // alt="Rececss logo"
            />
          </Link>

          <nav className="d_f">
            <Link href="/docs">
              <a className="td_u:h mr_md">Docs</a>
            </Link>
            <Link href="/components">
              <a className="td_u:h mr_md">Components</a>
            </Link>
            <Link href="/tools">
              <a className="td_u:h">Tools</a>
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}

export default Header;
