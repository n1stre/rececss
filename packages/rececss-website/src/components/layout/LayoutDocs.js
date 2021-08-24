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

        <main className="fx_1 ml_250">
          <div className="maw_720 m_0a px_lg pb_lg">{children}</div>
        </main>
      </Container>
      <Footer />
    </section>
  );
}

// let lol = {
//   components: {
//     Layout: {
//       props: { nav: "" },

//       markup: {
//         "section class=(d_f fxd_c h_100vh) ": {
//           "~Header": {},
//           "~Container class=(d_f fx_1 pt_4xl pb_2xl)": {
//             "~Sidebar nav=($.props.nav)": {},
//             "main class=(fx_1 ml_250)": {
//               "div": "$.props.children"
//             }
//           },
//         },
//       },
//     },
//   },

//   pages: {
//     ROOT: {
//       data: {
//         todos: [],
//       },
//       onload: "",
//       markup: {
//         $rr: "some",
//       },
//     },
//   },
// };
