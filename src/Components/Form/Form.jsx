import { Input } from "./input";
import { SubmitButton } from "./SubmitButton";
import { AlertButton } from "./AlertButton.jsx";

function handleSubmit(e) {
  e.preventDefault();
  console.log("enviaste");
  const form = e.target;
  const formData = new FormData(form); // generates an object with all data (names and values)
  const entries = formData.entries(); 
  const data = [...entries];
  console.log(data);
}

export const Form = () => {
  return (
    <div className="form-container">
      <h2>My Form</h2>
      <form className="form" id="form" action="submit" onSubmit={handleSubmit}>
        <Input required   label="First Name" type="text" />
        <Input required label="Last Name" type="text" />
        <Input required label="Phone Number" type="number" />
        <Input required label="Email" type="email" />
        <Input required label="Password" type="password" />
        <Input className="textArea" label="Comments" type="text" />
        <SubmitButton type="submit" text="enviar" />
        <AlertButton />
      </form>
    </div>
  );
};
