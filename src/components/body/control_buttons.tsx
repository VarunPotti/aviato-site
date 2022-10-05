import { ReactNode } from "react";
import { ReactComponent as House } from "../../assets/icons/house.svg";
import { ReactComponent as Metrics } from "../../assets/icons/metrics.svg";
import { ReactComponent as Comment } from "../../assets/icons/comment.svg";

const ControlItem = ({
  children,
  active,
}: {
  children: ReactNode;
  active?: boolean;
}) => {
  return (
    <div
      className={`w-16 h-16 ${
        active
          ? "bg-white text-[#3981F6]"
          : "hover:bg-white text-white transition-all duration-200 hover:text-[#3981F6]"
      } rounded-full grid place-items-center`}
    >
      {children}
    </div>
  );
};

const Divider = () => (
  <div className="w-[26px] h-[2px] bg-[#2F78ED] rounded-[40px]"></div>
);

const ControlButtons = () => {
  return (
    <div className="pl-[60px] pr-[40px] h-3/4 flex items-center justify-center">
      <div className="h-64 w-[88px] bg-dodgerBlue rounded-full flex items-center justify-center flex-col gap-[10px]">
        <ControlItem active>
          <House />
        </ControlItem>
        <Divider />
        <ControlItem>
          <Metrics />
        </ControlItem>
        <Divider />
        <ControlItem>
          <Comment />
        </ControlItem>
      </div>
    </div>
  );
};

export default ControlButtons;
