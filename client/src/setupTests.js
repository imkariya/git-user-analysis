import { server } from "./testMocks";

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

const mock = function () {
  return {
    observe: jest.fn(),
    disconnect: jest.fn(),
  };
};

window.IntersectionObserver = mock;
