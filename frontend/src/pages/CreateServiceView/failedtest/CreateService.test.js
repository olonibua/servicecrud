// jest.mock("../../../components/Context/UseContext");
// import axios from "axios";
// import { render, screen, fireEvent, waitFor } from "@testing-library/react";

// import { jest } from "@jest/globals";
// import { MemoryRouter } from "react-router-dom";
// import CreateForm from "../component/CreateForm";
// import React from "react";

// const mockUser = {
//   name: "testName",
//   email: "test@example.com",
//   accessToken: "fakeToken",
// };
// describe("test for creating services", () => {
//   test("test for creating a service", async () => {
//     jest.spyOn(React, "useContext").mockReturnValue(mockUser);
//     axios.post = jest.fn().mockResolvedValue({
//       data: {
//         service: "testService",
//         category: "testCategory",
//         contact: {
//           name: "testName",
//           email: "test@example.com",
//           phone: "testPhone",
//         },
//       },
//     });

//     // render(
//     //   <MemoryRouter>
//     //     {/* <UserProvider> */}
//     //     <CreateForm />
//     //     {/* </UserProvider> */}
//     //   </MemoryRouter>
//     // );
//     render(<CreateForm />);

//     const serviceInput = screen.getByPlaceholderText("input service");
//     const categoryInput = screen.getByPlaceholderText("input category");
//     const nameInput = screen.getByPlaceholderText("input name");
//     const emailInput = screen.getByPlaceholderText("input email");
//     const phoneInput = screen.getByPlaceholderText("input phone");

//     fireEvent.change(serviceInput, {
//       target: { name: "service", value: "testService" },
//     });
//     fireEvent.change(categoryInput, {
//       target: { name: "category", value: "testCategory" },
//     });
//     fireEvent.change(nameInput, {
//       target: { name: "name", value: "testName" },
//     });
//     fireEvent.change(emailInput, {
//       target: { name: "email", value: "test@example.com" },
//     });
//     fireEvent.change(phoneInput, {
//       target: { name: "phone", value: "testPhone" },
//     });

//     const expectedData = {
//       service: "testService",
//       category: "testCategory",
//       contact: {
//         name: "testName",
//         email: "test@example.com",
//         phone: "testPhone",
//       },
//     };

//     fireEvent.click(screen.getByText("save"));
//     const headers = {
//       Authorization: `Bearer ${mockUser.accessToken}`,
//     };

//     await waitFor(() => {
//       expect(axios.post).toHaveBeenCalledTimes(1);
//       expect(axios.post).toHaveBeenCalledWith(
//         "http://localhost:5001/api/services",

//         expectedData,
//         { headers }
//       );
//     });
//   });
// });
