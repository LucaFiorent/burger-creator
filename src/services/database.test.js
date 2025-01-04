import "@testing-library/jest-dom";
import databaseService from "./database";
import axios from "axios";

axios.get = jest.fn();

describe("database service - getIngredients", () => {
  const url = "https://react-interview.xm.com/ingredients";
  const token = "fakeToken";
  const resp = { data: ["patty", "bacon", "egg"] };
  const errMss = "failed to fetch";

  it("should make a GET request correctly", async () => {
    axios.get.mockResolvedValueOnce(resp);

    const res = await databaseService.getIngredients(token);

    expect(axios.get).toHaveBeenCalledWith(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    expect(res).toEqual(resp.data);
  });
});
