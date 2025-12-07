import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { DashboardClient } from "@/app/_components/dashboard";
import { auth } from "@/server/better-auth";
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

          <form
            className="w-full space-y-3"
            action={async (formData) => {
              "use server";
              const mykad = (formData.get("mykad") ?? "").toString().trim();
              if (!/^[0-9]{6,12}$/.test(mykad)) {
                throw new Error("Invalid MyKad number");
              }

              const email = `${mykad}@mock.mykad.local`;
              const password = mykad; // mock-only

              await auth.api
                .signUpEmail({
                  body: { email, password, name: `MyKad ${mykad}` },
                })
                .catch(() => undefined); // ignore if already exists

              const res = await auth.api.signInEmail({
                body: { email, password },
              });

              if (!res?.token) {
                throw new Error("Sign-in failed");
              }

              redirect("/");
            }}
          >
            <label className="flex flex-col gap-1 text-sm text-slate-200">
              MyKad IC Number (mock login)
              <input
                name="mykad"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={12}
                placeholder="e.g. 900101015555"
                className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white focus:border-emerald-400 focus:outline-none"
                required
              />
            </label>
            <button
              type="submit"
              className="w-full rounded-lg bg-emerald-500 px-6 py-3 text-base font-semibold text-slate-900 transition hover:bg-emerald-400"
            >
              Sign in with MyKad (mock)
            </button>
          </form>

          <p className="text-xs text-slate-500">
            Mock mode: we derive a temp account from your MyKad number. Replace
            with QR-based flow later.
          </p>
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
            <form>
              <button
                formAction={async () => {
                  "use server";
                  await auth.api.signOut({
                    headers: await headers(),
                  });
                  redirect("/");
                }}
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
