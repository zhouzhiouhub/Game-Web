import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = {
  width: 512,
  height: 512,
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
          background: "#09090b",
        }}
      >
        <div
          style={{
            width: 280,
            height: 280,
            borderRadius: 999,
            border: "28px solid #00d4ff",
            boxShadow: "0 0 80px rgba(0, 212, 255, 0.45)",
          }}
        />
      </div>
    ),
    size,
  );
}
