import { IRulesetsBuilder } from "../RulesetsBuilder/RulesetsBuilder.interface";
import AllRulesetsFactory from "./AllRulesetsFactory";

const result = [
  { classname: "w_10", declarations: "width: 10px;" },
  { classname: "h_10", declarations: "height: 10px;" },
];

const builder: IRulesetsBuilder = {
  addSize: jest.fn(() => builder),
  addMargin: jest.fn(() => builder),
  addPadding: jest.fn(() => builder),
  addOffset: jest.fn(() => builder),
  addFont: jest.fn(() => builder),
  addBorder: jest.fn(() => builder),
  addColor: jest.fn(() => builder),
  addFlex: jest.fn(() => builder),
  addZIndex: jest.fn(() => builder),
  addDisplay: jest.fn(() => builder),
  addPosition: jest.fn(() => builder),
  addText: jest.fn(() => builder),
  addVisibility: jest.fn(() => builder),
  addCursor: jest.fn(() => builder),
  addList: jest.fn(() => builder),
  addOverflow: jest.fn(() => builder),
  addOpacity: jest.fn(() => builder),
  getResult: jest.fn(() => result),
};

const values = {
  size: {},
  padding: {},
  margin: {},
  offset: {},
  font: {},
  flex: {},
  border: {},
  color: {},
  zIndex: {},
};

describe("AllRulesetsFactory", () => {
  it("should create all available rulesets", () => {
    const factory = new AllRulesetsFactory(builder);
    const rulesets = factory.create(values);
    expect(builder.addSize).toBeCalledWith(values.size);
    expect(builder.addMargin).toBeCalledWith(values.margin);
    expect(builder.addPadding).toBeCalledWith(values.padding);
    expect(builder.addOffset).toBeCalledWith(values.offset);
    expect(builder.addFont).toBeCalledWith(values.font);
    expect(builder.addBorder).toBeCalledWith(values.border);
    expect(builder.addColor).toBeCalledWith(values.color);
    expect(builder.addFlex).toBeCalledWith(values.flex);
    expect(builder.addZIndex).toBeCalledWith(values.zIndex);
    expect(builder.addDisplay).toBeCalledWith();
    expect(builder.addPosition).toBeCalledWith();
    expect(builder.addText).toBeCalledWith();
    expect(builder.addVisibility).toBeCalledWith();
    expect(builder.addCursor).toBeCalledWith();
    expect(builder.addList).toBeCalledWith();
    expect(builder.addOverflow).toBeCalledWith();
    expect(builder.addOpacity).toBeCalledWith();
    expect(builder.getResult).toBeCalled();
    expect(rulesets).toEqual(result);
  });
});
