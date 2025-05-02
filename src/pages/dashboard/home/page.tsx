import React from "react";

const DashboardPage = () => {
  return (
    <div className="p-24">
      <h3>Dashboard</h3>
      <div className="grid grid-cols-4 gap-10 mt-6 mb-10">
        {Array(4)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="mx-auto w-full rounded-md border border-primary p-4"
            >
              <div className="flex animate-pulse space-x-4">
                <div className="size-10 rounded-full bg-gray-200"></div>
                <div className="flex-1 space-y-6 py-1">
                  <div className="h-2 rounded bg-gray-200"></div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="col-span-2 h-2 rounded bg-gray-200"></div>
                      <div className="col-span-1 h-2 rounded bg-gray-200"></div>
                    </div>
                    <div className="h-2 rounded bg-gray-200"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div>
        <h3>Recent Transactions</h3>

        <div className="space-y-4 mt-6">
          {Array(10)
            .fill("")
            .map((_, index) => (
              <div
                key={index}
                className="animate-pulse w-full h-10 rounded bg-gray-200"
              ></div>
            ))}
        </div>
      </div>
    </div>
  );
};

export { DashboardPage };
