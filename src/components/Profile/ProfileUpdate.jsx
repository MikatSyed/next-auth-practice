import Form from "../../components/Global/Form";
import Button from "../../components/Global/Button";
import updateUser from "../../actions/authActions";
const ProfileUpdate = ({ update }) => {
  const handleUpdateProfile = async (formData) => {
    const name = formData.get("name");
    const image = formData.get("image");

    if (update) update({ name, image });

    const res = await updateUser({ name, image });
    if (res?.message) alert(res?.message);
  };
  return (
    <div>
      <h2> Profile Update </h2>

      <Form action={handleUpdateProfile} style={{ margin: "30px 0" }}>
        <input type="text" name="name" placeholder="Name" required />
        <input type="text" name="image" placeholder="Image" required />
        <Button value="Update Profile" />
      </Form>
    </div>
  );
};

export default ProfileUpdate;
