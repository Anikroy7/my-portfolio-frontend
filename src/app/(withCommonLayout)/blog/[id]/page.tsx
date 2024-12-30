import BlogDetailsPage from "@/src/components/ui/BlogDetails";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  return (
    <>
      <BlogDetailsPage id={id} />
    </>
  );
}
