import { ImageResponse } from "next/og";
import { getBrandIconDataUri } from "@/lib/brand-icon";

export const dynamic = "force-static";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default async function AppleIcon() {
  const iconSrc = await getBrandIconDataUri();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#08152D",
        }}
      >
        <img src={iconSrc} width={180} height={180} alt="" />
      </div>
    ),
    size,
  );
}
