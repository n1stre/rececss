import DocsLayout from "./LayoutDocs";

const nav = {
  Forms: {
    Button: "/components/forms/Button",
    TextInput: "/components/forms/TextInput",
    Textarea: "/components/forms/Textarea",
    Checkbox: "/components/forms/Checkbox",
    Radio: "/components/forms/Radio",
  },
};

export default function ComponentsLayout({ children }) {
  return <DocsLayout nav={nav}>{children}</DocsLayout>;
}
