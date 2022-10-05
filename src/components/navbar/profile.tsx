import { useAtom } from "jotai";
import userAtom from "../../state/user";

const Profile = () => {
  const user = useAtom(userAtom)[0];
  return (
    <img
      width={"52px"}
      className="rounded-full select-none"
      src={user.profilepic}
    />
  );
};

export default Profile;
