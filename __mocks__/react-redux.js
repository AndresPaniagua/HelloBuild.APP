const mockDispatch = jest.fn();
const mockSelector = jest.fn();

const mockState = (state = {}) => {
  return mockSelector.mockImplementationOnce((callback) => {
    return callback(state);
  });
};

module.exports = {
  ...jest.requireActual("react-redux"),
  __esModule: true,
  useSelector: mockSelector,
  useDispatch: () => mockDispatch,
  mockDispatch,
  mockState,
};
