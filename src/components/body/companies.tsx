import companiesAtom from "../../state/companies";
import { useAtom } from "jotai";
import { Menu } from "@headlessui/react";

const Companies = () => {
  const [companies, _] = useAtom(companiesAtom);
  return (
    <div className="flex flex-col w-1/4 gap-[20px] overflow-y-auto py-4 ">
      <Menu>
        <Menu.Button className="text-lg font-semibold text-left outline-none">
          Pending
        </Menu.Button>
        <Menu.Items className="absolute w-[142px] mt-10 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg outline-none px-1 text-dodgerBlue ">
          <Menu.Item>
            {({ active }) => (
              <div className="mb-2 border-none px-1 py-1 hover:bg-dodgerBlue hover:text-white rounded-sm">
                Pending
              </div>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <div className="mb-2 border-none px-1 py-1 hover:bg-dodgerBlue hover:text-white rounded-sm">
                Contacted
              </div>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <div className="mb-2 border-none px-1 py-1 hover:bg-dodgerBlue hover:text-white rounded-sm">
                Rejected
              </div>
            )}
          </Menu.Item>
        </Menu.Items>
      </Menu>
      {companies.map((company) => (
        <div className="flex gap-3 items-center justify-start h-12 rounded-full w-full">
          <img
            src={company.logo}
            alt={company.name}
            className="select-none rounded-full"
          />
          <div className="flex flex-col gap-1">
            <span className="font-medium text-[16px] leading-5">
              {company.name}
            </span>
            <span className="text-[12px] leading-[15px] text-[#BFBFC3]">
              {company.description}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Companies;
