const Tag = ({ tag }: { tag: string }) => {
  return (
    <div className="backdrop-blur-sm bg-white/10 px-[10px] py-[6px] rounded-[6px] text-xs text-white ">
      {tag}
    </div>
  );
};

export default Tag;
