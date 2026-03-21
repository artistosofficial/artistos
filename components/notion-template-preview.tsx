import Image from "next/image"

export function NotionTemplatePreview() {
  return (
    <Image
      src="/images/artistos-dashboard.png"
      alt="ArtistOS 2.0 Notion template dashboard showing tasks, projects, and business modules"
      width={3840}
      height={2259}
      className="w-full h-auto rounded-[11px]"
      priority
    />
  )
}
