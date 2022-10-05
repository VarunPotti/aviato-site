import companiesAtom from "../../state/companies";
import { useAtom } from "jotai";

const Companies = () => {
  const [companies, setCompanies] = useAtom(companiesAtom);
  return (
    <div className="flex flex-col w-1/4 gap-[20px] overflow-y-auto py-4 select-none">
      {companies.map((company) => (
        <div className="flex gap-3 items-center justify-start h-12 rounded-full w-full">
          <img
            src={company.logo}
            alt={company.name}
            className=" rounded-full"
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
