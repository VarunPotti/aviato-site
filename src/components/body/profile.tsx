import { IUser } from "../../state/user";

const Profile = ({ author }: { author: IUser }) => {
  return (
    <div className="w-full flex gap-[10px]">
      <img
        width={"46px"}
        height={"46px"}
        className="rounded-full"
        src={author.profilepic}
        alt={author.name}
      />
      <div className="flex flex-col gap-[3px] justify-center">
        <span className="text-[#FFFFFF] font-bold text-base leading-5">
          {author.name}
        </span>
        <span className="text-[#FFFFFF] text-[10px] leading-[13px] opacity-50">
          {author.company}
        </span>
      </div>
    </div>
  );
};

export default Profile;
