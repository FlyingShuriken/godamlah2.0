import { DashboardClient } from "@/app/_components/dashboard";
import { MyKadLoginForm } from "@/app/_components/mykad-login-form";
import { signOut } from "@/server/better-auth/actions";
import { getSession } from "@/server/better-auth/server";
import { HydrateClient } from "@/trpc/server";

export default async function Home() {
  const session = await getSession();

  if (!session?.user) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
        <div className="container flex max-w-lg flex-col items-center justify-center gap-8 px-4 py-16">
          <div className="space-y-2 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              GodamLah
            </h1>
            <p className="text-lg text-slate-300">Your career, verified</p>
            <p className="text-sm text-slate-400">
              Build a verified professional profile powered by MyKad. Discover
              job matches and connect with events.
            </p>
          </div>

          <div className="w-full space-y-6">
            {/* QR Code placeholder - for future implementation */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
              <div className="mb-4 flex items-center gap-2 text-sm text-slate-400">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                  />
                </svg>
                <span>Coming soon: QR Code scanner</span>
              </div>

              {/* MyKad manual input */}
              <MyKadLoginForm className="space-y-3" />
            </div>

            {/* Info section */}
            <div className="rounded-lg bg-slate-800/30 px-4 py-3 text-xs text-slate-500">
              <p className="font-medium text-slate-400">Mock Mode</p>
              <p className="mt-1">
                Enter any valid Malaysian IC number format (12 digits). In
                production, you&apos;ll scan your MyKad&apos;s QR code for
                verified authentication.
              </p>
              <p className="mt-2 text-slate-600">
                Example: 900101-01-5555 (born Jan 1, 1990, male)
              </p>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <HydrateClient>
      <main className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950">
        <nav className="border-b border-slate-800 bg-slate-900/40 backdrop-blur-sm">
          <div className="container flex items-center justify-between px-4 py-4">
            <h1 className="text-xl font-bold text-white">GodamLah</h1>
            <form action={signOut}>
              <button
                type="submit"
                className="rounded-lg bg-slate-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-600"
              >
                Sign out
              </button>
            </form>
          </div>
        </nav>
        <div className="container px-4 py-8">
          <DashboardClient userName={session.user.name ?? "there"} />
        </div>
      </main>
    </HydrateClient>
  );
}
