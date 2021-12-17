import App from './App';
import { mount } from 'enzyme'
import toJSON from "enzyme-to-json";

test('renders learn react link', () => {
  const component = mount(<App />);
  expect(toJSON(component)).toMatchSnapshot();
});
