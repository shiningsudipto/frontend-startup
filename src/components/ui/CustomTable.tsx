import { ReactNode } from "react";

const CustomTable = ({
  tableHead,
  label,
  children,
}: {
  tableHead: string[];
  label?: string;
  children: ReactNode;
}) => {
  return (
    <div className="overflow-x-auto">
      <div className="bg-white">
        {label && <h3 className="text-xl font-bold mb-5">{label}</h3>}
        <div className="overflow-x-auto">
          <table className="table-auto w-full min-w-max">
            <thead className="bg-gray-100 border">
              <tr>
                {tableHead?.map((head: string, index: number) => (
                  <th
                    key={index}
                    className="border border-gray-300 px-4 py-4 text-left"
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>{children}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CustomTable;
