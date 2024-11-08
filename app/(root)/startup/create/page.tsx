import { auth } from "@/auth";
import StartupForm from "@/components/StartupForm";
import { redirect } from "next/dist/server/api-utils";

const Page = async () => {
  const session = await auth();

  if (!session) redirect("/");
  return (
    <>
      <section className="pink_container !min-h-[230px]">
        <h1 className="heading">Submit you Startup</h1>
      </section>

      <StartupForm />
    </>
  );
};

export default Page;