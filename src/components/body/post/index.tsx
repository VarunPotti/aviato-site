import { IPosts } from "../../../state/posts";
import Profile from "../profile";
import ControlButtons from "./ctrl_buttons";
import Tag from "./tag";

const Post = ({ post }: { post: IPosts }) => {
  return (
    <div
      className="w-[799px] min-h-[597px]  rounded-xl"
      style={{
        backgroundImage: `url(${post.img})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full h-full bg-gradient-to-b to-[#0000006B] rounded-[40px] transition-all duration-300 from-transparent flex justify-end items-start pb-9 px-[40px] flex-col select-none">
        <Profile author={post.author} />
        <div className="flex gap-[15px] pt-4">
          {post.tags.map((tag) => (
            <Tag tag={tag} />
          ))}
        </div>
        <h1 className="pt-[25px] text-[14px] leading-[18px] font-medium text-white opacity-70">
          {post.title}
        </h1>
        <ControlButtons />
      </div>
    </div>
  );
};

export default Post;
