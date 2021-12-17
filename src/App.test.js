import App from './App';
import { shallow } from 'enzyme'
import toJSON from "enzyme-to-json";

test('renders learn react link', () => {
  const component = shallow(<App />);
  expect(toJSON(component)).toMatchSnapshot();
});
