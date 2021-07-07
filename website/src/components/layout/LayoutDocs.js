import Header from "./Header";
import Footer from "./Footer";
import Container from "./Container";
import Sidebar from "./Sidebar";

export default function DocsLayout({ children, nav }) {
  return (
    <section className="d_f fxd_c h_100vh">
      <Header />
      <Container className="d_f fx_1 pt_4xl pb_2xl">
        <Sidebar nav={nav} />

        <main className="fx_1 ml_300">
          <div className="maw_720 m_0a px_lg">{children}</div>
        </main>
      </Container>
      <Footer />
    </section>
  );
}
