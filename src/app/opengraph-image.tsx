import { ImageResponse } from "next/og";

export const alt = "DLApp";
export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export const metadata = {
  title: 'DL App',
  themeColor: 'dark',
  viewport: {
    width: 1,
  },
}

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          background: "black",
          fontSize: "5rem",
          color: "white"
        }}
      />
    ),
  );
}