import { PurgeCSS as _PurgeCSS } from "purgecss";
import { ICSSProcessor } from "../../3_adapters/interfaces";

interface CSSProcessorProps {
  content: Array<string | { raw: string; extension: string }>;
  safelist?: Array<RegExp | string>;
  blocklist?: Array<RegExp | string>;
}

export default class CSSProcessor implements ICSSProcessor {
  private constructor(private props: CSSProcessorProps) {}

  static create = (props: CSSProcessorProps) => new CSSProcessor(props);

  async removeUnused<T extends { contents: string }>(css: Array<T>) {
    if (!this.props.content || !this.props.content.length) return css;

    const purged = await new _PurgeCSS().purge({
      css: css.map((f) => ({ raw: f.contents })),
      content: this.props.content,
      safelist: this.props.safelist || [],
      blocklist: this.props.blocklist || [],
      defaultExtractor: (content: string) => {
        return content.match(/[A-Za-z:!.@%0-9_-]+/g) || [];
      },
    });

    return css.map((f, idx) => ({ ...f, contents: purged[idx].css }));
  }
}
