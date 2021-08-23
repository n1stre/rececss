import { getDocsNavigation, getDocsPaths, getDocBySlug } from "../../api/docs";
import DocsLayout from "../../components/layout/LayoutDocs";

export default function Doc({ nav, doc }) {
  return <DocsLayout nav={nav}>
    <section dangerouslySetInnerHTML={{ __html: doc.content }} />
  </DocsLayout>
}

export async function getStaticProps({params}) {
  const nav =  getDocsNavigation();
  const doc = await getDocBySlug(params.slug)
  return { props: { nav, doc } };
}

export async function getStaticPaths() {
  const paths = getDocsPaths()
  return { paths, fallback: false }
}