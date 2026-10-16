
import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#101d32",
          borderRadius: "14px",
          border: "2px solid #30445e",
          position: "relative",
        }}
      >
        <span
          style={{
            color: "#e8eef7",
            fontSize: 42,
            fontWeight: 700,
            lineHeight: 1,
          }}
        >
          T
        </span>
      </div>
    ),
    size,
  );
}
