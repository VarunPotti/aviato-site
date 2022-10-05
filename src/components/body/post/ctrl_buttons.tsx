import { ReactNode } from "react";
import { ReactComponent as WrongIcon } from "../../../assets/icons/wrong.svg";
import { ReactComponent as BookmarkIcon } from "../../../assets/icons/bookmark.svg";
import { ReactComponent as TickIcon } from "../../../assets/icons/tick.svg";

const Button = ({ children, yes }: { children: ReactNode; yes?: boolean }) => {
  return (
    <button
      className={`w-[112px] h-full ${
        yes
          ? "bg-dodgerBlue"
          : "bg-white/10 backdrop-blur-3xl hover:bg-white/20"
      } rounded-full flex items-center justify-center  transition-all duration-500 text-white gap-3`}
    >
      {children}
    </button>
  );
};

const ControlButtons = () => {
  return (
    <div className="w-full h-[46px] flex items-center justify-center gap-3 mt-[40px]">
      <Button>
        <WrongIcon />
        <span className="text-[14px] font-medium">No</span>
      </Button>
      <Button>
        <BookmarkIcon />
        <span className="text-[14px] font-medium">Save</span>
      </Button>
      <Button yes>
        <TickIcon />
        <span className="text-[14px] font-medium">Yes</span>
      </Button>
    </div>
  );
};

export default ControlButtons;
