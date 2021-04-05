import { renderHook } from "@testing-library/react-hooks";
import { useFetch } from "./useFetch";
import "whatwg-fetch";
import fetchMock from "fetch-mock";

describe("useFetch", () => {
  beforeAll(() => {
    global.fetch = fetch;
  });
  afterEach(() => {
    fetchMock.restore();
  });

  it("fetches data", async () => {
    fetchMock.mock("*", { things: [1, 2, 3] });
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch("test.com")
    );
    await waitForNextUpdate();
    const { data, error, loading } = result.current;
    expect(data).toEqual({ things: [1, 2, 3] });
    expect(error).toBe(null);
    expect(loading).toBe(false);
  });

  it("returns an error if fetch fails", async () => {
    fetchMock.mock("*", 500);
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch("test.com")
    );
    await waitForNextUpdate();
    const { data, error, loading } = result.current;
    expect(data).toBe(null);
    expect(error.statusText).toBe("Internal Server Error");
    expect(loading).toBe(false);
  });

  it("returns triggers loading while fetch is in progress", () => {
    fetchMock.mock("*", {});
    const { result } = renderHook(() => useFetch("test.com"));
    const { data, error, loading } = result.current;
    expect(data).toBe(null);
    expect(error).toBe(null);
    expect(loading).toBe(true);
  });
});
