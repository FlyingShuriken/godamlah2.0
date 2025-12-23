import { DashboardPage } from "@/app/_components/DashboardPage";
import { LoginView } from "@/app/_components/LoginView";
import { getSession } from "@/server/better-auth/server";
import { HydrateClient } from "@/trpc/server";

export default async function Home() {
  const session = await getSession();

  if (!session?.user) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
        <LoginView />
      </main>
    );
  }

  return (
    <HydrateClient>
      <main className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950">
        <DashboardPage />
      </main>
    </HydrateClient>
  );
}
