import * as React from "react";

export function MapTitle() {
  return (
    <div
      className="absolute mt-[3em] md:mt-[3.7em] md:ml-3 top-0 z-5 titleBox  ml-2 text-base bold md:semi-bold break-words bg-[#212121]"
      style={{
        backgroundColor: "#212121",
        color: "#ffffff",
      }}
    >
      <strong className="">41.18 Arrests (1/1/21 - 12/31/24)</strong>
    </div>
  );
}
