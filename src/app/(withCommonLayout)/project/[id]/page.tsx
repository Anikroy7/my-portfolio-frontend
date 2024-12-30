import ProjectDetails from "@/src/components/ui/ProjectDetails";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  return (
    <>
      <ProjectDetails id={id} />
    </>
  );
}
