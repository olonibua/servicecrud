import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { UserProvider } from "../../Context/UseContext";
import CreateAccount from "../CreateAccount";
import { jest } from "@jest/globals";
import axios from "axios";

describe("test for creating account", () => {
  test("render the login form with on button", async () => {
    render(
      <UserProvider>
        <CreateAccount />
      </UserProvider>
    );
    const buttonList = await screen.findAllByRole("button");
    expect(buttonList).toHaveLength(2);
  });

  test("should create user account", async () => {
    axios.post = jest.fn().mockResolvedValue({
      data: [
        {
          username: "testUsername",
          email: "test@example.com",
          password: "testPassword",
          title: test,
        },
      ],
    });

    render(
      <UserProvider>
        <CreateAccount />
      </UserProvider>
    );
    const usernameInput = screen.getByPlaceholderText("Input your username");
    const emailInput = screen.getByPlaceholderText("Input your Email Address");
    const passwordInput = screen.getByPlaceholderText("Input your password");

    fireEvent.change(usernameInput, {
      target: { name: "username", value: "testUsername" },
    });
    fireEvent.change(emailInput, {
      target: { name: "email", value: "test@example.com" },
    });
    fireEvent.change(passwordInput, {
      target: { name: "password", value: "testPassword" },
    });

    fireEvent.click(screen.getByText("create"));

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledTimes(1);
      expect(axios.post).toHaveBeenCalledWith(
        "http://localhost:5001/api/users/register",
        {
          username: "testUsername",
          email: "test@example.com",
          password: "testPassword",
        }
      );
    });
  });
});
