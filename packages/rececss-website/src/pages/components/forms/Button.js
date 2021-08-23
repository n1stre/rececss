import Layout from "../../../components/layout/LayoutComponents";
import Preview from "../../../components/containers/ComponentsPreview";
import Usage from "../../../examples/Button/react/usage";
import { getCode } from "../../../api/components";

export default function ButtonPage(props) {
  return (
    <Layout>
      <h2>Button</h2>

      <p>Simple button component</p>

      <Preview initialVariant="react">
        <Preview.Variant name="react">
          <Preview.Render>
            <Usage />
          </Preview.Render>

          <Preview.Html label="Usage">
            {props.code.react.usageHighlighted}
          </Preview.Html>

          <Preview.Html label="Source">
            {props.code.react.sourceHighlighted}
          </Preview.Html>
        </Preview.Variant>

        <Preview.Variant name="html">
          <Preview.Render>
            <Preview.Html>{props.code.html.source}</Preview.Html>
          </Preview.Render>

          <Preview.Html label="Source">
            {props.code.html.sourceHighlighted}
          </Preview.Html>
        </Preview.Variant>
      </Preview>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const code = await getCode("Button");
  return { props: { code } };
}
