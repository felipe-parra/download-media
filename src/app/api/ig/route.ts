import { InstagramService } from "@xncn/instagramdownloaderpro";
import DownloadResponse from "@xncn/instagramdownloaderpro/dist/response/DownloadResponse";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const res = await req.json();
  const url = res.url || null;
  console.log({ url });
  if (!url) return new NextResponse("url is required", { status: 400 });
  if (typeof url !== "string")
    return new NextResponse("url must be a string", { status: 400 });
  const ig = new InstagramService();

  const urlsList: DownloadResponse[] =
    (await ig.downloadService.Download(url)) || [];

  if (!urlsList.length) {
    throw new Error("Not found");
  }

  const lastUrl = urlsList.pop();
  console.log({ lastUrl });
  return NextResponse.json({ data: lastUrl, message: "Success" });
}
