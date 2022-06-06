import { Input, Button } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProfile } from "../../store/profile";

export const ProfileForm = ({ firstName, lastName }) => {
  const [form, setForm] = useState({
    firstName,
    lastName,
  });

  const dispatch = useDispatch();

  const handleChangeForm = (event) => {
    const field = event.target.getAttribute("data-name");

    if (!!field) {
      setForm({
        ...form,
        [field]: event.target.value,
      });
    }
  };

  return (
    <div>
      <h1>Edit profile</h1>

      <Input
        placeholder="firstName"
        value={form.firstName}
        onChange={handleChangeForm}
        inputProps={{
          "data-name": "firstName",
        }}
      />
      <Input
        placeholder="lastName"
        value={form.lastName}
        onChange={handleChangeForm}
        inputProps={{
          "data-name": "lastName",
        }}
      />
      <Button onClick={() => dispatch(updateProfile(form))}>save</Button>
    </div>
  );
};
