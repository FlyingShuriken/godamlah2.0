import { DashboardPage } from "@/app/_components/DashboardPage";
import { LoginView } from "@/app/_components/LoginView";
import { getSession } from "@/server/better-auth/server";
import { HydrateClient } from "@/trpc/server";

export default async function Home() {
  const session = await getSession();

  if (!session?.user) {
    return (
      <main className="bg-linear-to-br flex min-h-screen flex-col items-center justify-center from-slate-950 via-slate-900 to-slate-950 text-white">
        <LoginView />
      </main>
    );
  }

  return (
    <HydrateClient>
      <main className="bg-linear-to-br min-h-screen from-slate-950 via-slate-900 to-slate-950">
        <DashboardPage />
      </main>
    </HydrateClient>
  );
}
