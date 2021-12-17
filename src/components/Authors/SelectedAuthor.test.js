import { shallow } from 'enzyme'
import toJSON from "enzyme-to-json";
import SelectedAuthor from './SelectedAuthor';

describe("Test for Seelcted Author", ()=>{
  it("should match blank author snapshot", ()=>{
    const component = shallow(<SelectedAuthor author={""}/>);
    expect(toJSON(component)).toMatchSnapshot();
  })

  it("should match with author name snapshot", ()=>{
    const component = shallow(<SelectedAuthor author={"Friedrich Nietzsche"}/>);
    const text = component.find("label").text();
    expect(text).toEqual("Selected Author: Friedrich Nietzsche");

  })
})