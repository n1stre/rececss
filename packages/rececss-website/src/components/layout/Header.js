import Link from "next/link";
import Container from "./Container";
import Logo from "../presentational/Logo";

function Header() {
  return (
    <header className="h_4xl d_f fxd_c jc_c bxsh_2xs pos_f w_full z_1 bgc_black c_white t_0">
      <Container>
        <div className="d_f jc_sb ai_c">
          <Link href="/">
            <a className="d_f">
              <Logo className="h_lg" />
            </a>
          </Link>

          <nav className="d_f">
            <Link href="/docs/getting-started/introduction">
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
