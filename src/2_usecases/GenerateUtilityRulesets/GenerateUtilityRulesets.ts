import { IClassNamesService } from "../interfaces";
import { IUtilityValuesDTO } from "./interfaces";
import * as errors from "./GenerateUtilityRulesets.errors";
import { IRulesetDTO } from "../../1_entities/Ruleset/Ruleset.interface";

export default () => {
  return class GenerateUtilityRulesetsUseCase {
    constructor(private cn: IClassNamesService) {}

    public exec = async (dto: IUtilityValuesDTO) => {
      return [
        this.getSizeStaticRulesets(),
        this.getSizeRulesets(dto.size),
        this.getPaddingRulesets(dto.padding),
        this.getMarginRulesets(dto.margin),
        this.getOffsetRulesets(dto.offset),
        this.getZIndexRulesets(dto.zIndex),
        this.getFontSizeRulesets(dto.fontSize),
        this.getFontFamilyRulesets(dto.fontFamily),
        this.getBorderRulesets(dto.border),
        this.getColorRulesets(dto.color),
      ].flat();
    };

    private getSizeStaticRulesets = () => {
      return this.toRulesets({
        widthAuto: "width: auto;",
        heightAuto: "height: auto;",
      });
    };

    private getSizeRulesets = (values: Record<string, string>) => {
      return this.toRulesetsFromValues(values, (v) => ({
        width: `width: ${v};`,
        height: `height: ${v};`,
        minWidth: `min-width: ${v};`,
        minHeight: `min-height: ${v};`,
        maxWidth: `max-width: ${v};`,
        maxHeight: `max-height: ${v};`,
      }));
    };

    private getPaddingRulesets = (values: Record<string, string>) => {
      return this.toRulesetsFromValues(values, (v) => ({
        padding: `padding: ${v};`,
        paddingTop: `padding-top: ${v};`,
        paddingBottom: `padding-bottom: ${v};`,
        paddingVertical: `padding-top: ${v}; padding-bottom: ${v};`,
        paddingLeft: `padding-left: ${v};`,
        paddingRight: `padding-right: ${v};`,
        paddingHorizontal: `padding-left: ${v}; padding-right: ${v};`,
      }));
    };

    private getMarginRulesets = (values: Record<string, string>) => {
      return this.toRulesetsFromValues(values, (v) => ({
        margin: `margin: ${v};`,
        marginTop: `margin-top: ${v};`,
        marginBottom: `margin-bottom: ${v};`,
        marginVertical: `margin-top: ${v}; margin-bottom: ${v};`,
        marginLeft: `margin-left: ${v};`,
        marginRight: `margin-right: ${v};`,
        marginHorizontal: `margin-left: ${v}; margin-right: ${v};`,
      }));
    };

    private getOffsetRulesets = (values: Record<string, string>) => {
      return this.toRulesetsFromValues(values, (v) => ({
        top: `top: ${v};`,
        bottom: `bottom: ${v};`,
        left: `left: ${v};`,
        right: `right: ${v};`,
        topLeft: `top: ${v}; left: ${v}`,
        topRight: `top: ${v}; right: ${v}`,
        bottomLeft: `bottom: ${v}; left: ${v}`,
        bottomRight: `bottom: ${v}; right: ${v}`,
      }));
    };

    private getZIndexRulesets = (values: Record<string, string>) => {
      return this.toRulesetsFromValues(values, (v) => ({
        zIndex: `z-index: ${v};`,
      }));
    };

    private getFontSizeRulesets = (values: Record<string, string>) => {
      return this.toRulesetsFromValues(values, (v) => ({
        fontSize: `font-size: ${v};`,
      }));
    };

    private getFontFamilyRulesets = (values: Record<string, string>) => {
      return this.toRulesetsFromValues(values, (v) => ({
        fontFamily: `font-family: ${v};`,
      }));
    };

    private getBorderRulesets = (values: Record<string, string>) => {
      return this.toRulesetsFromValues(values, (v) => ({
        border: `border: ${v};`,
      }));
    };

    private getColorRulesets = (values: Record<string, string>) => {
      return this.toRulesetsFromValues(values, (v) => ({
        color: `color: ${v};`,
        backgroundColor: `background-color: ${v};`,
      }));
    };

    private toRulesets = (
      data: Record<string, string>,
      modifier?: string,
    ): IRulesetDTO[] => {
      return mapRecord(data, (id: string, declarations: string) => {
        const classname = this.cn.generate(id, modifier);
        const result = { classname, declarations };
        return result;
      });
    };

    private toRulesetsFromValues = (
      values: Record<string, string>,
      map: (v: string) => Record<string, string>,
    ): IRulesetDTO[] => {
      return mapRecord(values, (modifier, value) => {
        return this.toRulesets(map(value), modifier);
      }).flat();
    };
  };
};

function mapRecord<T>(
  record: Record<string, string>,
  cb: (key: string, value: string) => T,
): T[] {
  return Object.entries(record).map((r) => cb(r[0], r[1]));
}
