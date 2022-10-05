import postsAtom from "../../state/posts";
import ControlButtons from "./control_buttons";
import { useAtom } from "jotai";
import Post from "./post";
import Companies from "./companies";

const Body = () => {
  const [posts, setPosts] = useAtom(postsAtom);
  return (
    <div className="w-full h-full flex ">
      <ControlButtons />
      <div className="w-full h-full flex gap-[41px]">
        <div className="w-3/4 h-[calc(100vh-96px)] flex flex-col items-center gap-[10px] overflow-y-auto pb-5 py-1">
          {posts.map((post) => (
            <Post post={post} />
          ))}
        </div>
        <div className="flex items-center justify-center w-1 h-[calc(100vh-96px)]">
          <div className="h-[418px] bg-[#D3D3D366] w-1 rounded-[60px]"></div>
        </div>
        <Companies />
      </div>
    </div>
  );
};

export default Body;
