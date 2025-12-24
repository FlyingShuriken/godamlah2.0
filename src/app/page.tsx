import { DashboardPage } from "@/app/_components/DashboardPage";
import { LoginView } from "@/app/_components/LoginView";
import { getSession } from "@/server/better-auth/server";
import { HydrateClient } from "@/trpc/server";

export default async function Home() {
  const session = await getSession();

  if (!session?.user) {
    return (
      <main className="liquid-bg flex min-h-screen flex-col items-center justify-center text-white">
        <LoginView />
      </main>
    );
  }

  return (
    <HydrateClient>
      <main className="liquid-bg min-h-screen">
        <DashboardPage />
      </main>
    </HydrateClient>
  );
}
