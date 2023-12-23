import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import LogIn from "../LogIn";
import { UserProvider } from "../../Context/UseContext";
import axios from "axios";
import { jest } from "@jest/globals";

// Now you can use jest.mock and other Jest functions

describe("Test the Login component", () => {
  test("render the login form with on button", async () => {
    render(
      <UserProvider>
        <LogIn />
      </UserProvider>
    );
    const buttonList = await screen.findAllByRole("button");
    expect(buttonList).toHaveLength(2);
  });

  test("password input should have type password", () => {
    render(
      <UserProvider>
        <LogIn />
      </UserProvider>
    );
    const passwordInputs = screen.getAllByPlaceholderText("password");
    passwordInputs.forEach((password) => {
      expect(password).toHaveAttribute("type", "password");
    });
  });

  test("should handle changes in email and password inputs", () => {
    render(
      <UserProvider>
        <LogIn />
      </UserProvider>
    );

    const emailInput = screen.getByPlaceholderText("Input your Email Address");
    const passwordInput = screen.getByPlaceholderText("password");

    fireEvent.change(emailInput, {
      target: { name: "email", value: "test@example.com" },
    });

    fireEvent.change(passwordInput, {
      target: { name: "password", value: "testPassword" },
    });

    expect(emailInput.value).toBe("test@example.com");

    expect(passwordInput.value).toBe("testPassword");
  });

  test("should sign in user", async () => {
    axios.post = jest.fn().mockResolvedValue({
      data: [
        {
          email: "test@example.com",
          password: "testPassword",
          title: test,
        },
      ],
    });

    render(
      <UserProvider>
        <LogIn />
      </UserProvider>
    );

    const emailInput = screen.getByPlaceholderText("Input your Email Address");
    const passwordInput = screen.getByPlaceholderText("password");

    fireEvent.change(emailInput, {
      target: { name: "email", value: "test@example.com" },
    });
    fireEvent.change(passwordInput, {
      target: { name: "password", value: "testPassword" },
    });

    // Simulate clicking the "Sign in" button
    fireEvent.click(screen.getByText("Sign in"));

    // Wait for the asynchronous signInUser function to complete
    await waitFor(() => {
      // Assert that the API was called with the correct data
      expect(axios.post).toHaveBeenCalledTimes(1);
      expect(axios.post).toHaveBeenCalledWith(
        "http://localhost:5001/api/users/login",
        {
          email: "test@example.com",
          password: "testPassword",
        }
      );
    });
  });
});
