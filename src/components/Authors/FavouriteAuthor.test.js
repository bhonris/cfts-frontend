import { shallow } from 'enzyme'
import FavouriteAuthor from './FavouriteAuthor';
import * as fetchAuthors from "./_fetchAuthors";

jest.mock("./_fetchAuthors", () => {
  return {
    __esModule: true,
    default: async () => [
      {
        id: 1,
        name: "Test Author 1"
      },
      {
        id: 2,
        name: "Test Author 2"
      }
    ]
  };
});

describe("Test for Favorite Author", ()=>{
  it("shoud render something",async ()=>{
    const fetchAuthorsSpy = jest.spyOn(fetchAuthors, "default")
    const component = shallow(<FavouriteAuthor/>)
    expect(component.find("option").at(0).text()).toEqual("Select an Author")
    const button = component.find("button")
    button.simulate("click")
    expect(fetchAuthorsSpy).toBeCalled()
    await new Promise(resolve => setTimeout(resolve, 300));
    const options = component.find("option")
    const event = {
      target: {
        value: "Test Author 2"
      }
    }
    component.find("select").simulate("change", event);
    const selectedAuthor = component.find("SelectedAuthor")
    expect(selectedAuthor.props().author).toEqual("Test Author 2")
  })
})