import Layout from "../../components/layout/LayoutDocs";
import { getComponentsNavigation } from "../../api/components";

export default function Components(props) {
  return <Layout nav={props.nav}>Components</Layout>;
}

export async function getStaticProps({ params }) {
  const nav = getComponentsNavigation();
  return { props: { nav } };
}
