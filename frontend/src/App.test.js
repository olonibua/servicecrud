import { render, screen } from "@testing-library/react";
import App from "./App";
import LogIn from "./components/User/LogIn";
import { UserProvider } from "./components/Context/UseContext";
import Service from "./pages/service/Service";

// test("renders Service Crud", () => {
//   render(
//     <UserProvider>
//       <Service />
//     </UserProvider>
//   );
//   const linkElement = screen.getByRole("heading", { name: /Service Crud/i });
//   expect(linkElement).toBeInTheDocument();
// });

test("render Email text in the document", () => {
  const component = render(
    <UserProvider>
      <LogIn />
    </UserProvider>
  );
  const childElement = component.getByLabelText("Email:");
  expect(childElement).toBeTruthy();
});
