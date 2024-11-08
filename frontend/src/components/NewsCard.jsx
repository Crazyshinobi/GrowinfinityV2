import React from "react";

export const NewsCard = ({ item }) => {
  return (
    <div className="bg-[#F1F1F1] rounded-[19.4px] font-poppins m-2">
      <div className="p-1">
        <img
          src={`${process.env.BASE_URL}/${item.image}`}
          alt=""
          className="h-[200px] w-full rounded-[19.4px]"
        />
      </div>
      <div className="p-2">
        <p className="py-2 px-3">{item.createdAt.split("T")[0]}</p>
        <h3 className=" font-semibold text-md p-3">
          {item.title.slice(0, 50) + ".."}
        </h3>
        <p className="text-md p-3 text-[#1b1364] hover:font-semibold">Read more</p>
      </div>
    </div>
  );
};
