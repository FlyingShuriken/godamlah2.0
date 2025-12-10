import { api } from "@/trpc/server";
import Link from "next/link";

export default async function VerifyCertificatePage({
  params,
}: {
  params: Promise<{ hash: string }>;
}) {
  const { hash } = await params;

  let certificate;
  try {
    certificate = await api.certificate.verify({ hash });
  } catch (error) {
    certificate = null;
  }

  if (!certificate) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 p-4 text-center">
        <div className="rounded-full bg-rose-500/10 p-4">
          <svg
            className="h-12 w-12 text-rose-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <h1 className="mt-4 text-2xl font-bold text-white">
          Invalid Certificate
        </h1>
        <p className="mt-2 text-slate-400">
          The certificate you are looking for does not exist or has been revoked.
        </p>
        <Link
          href="/"
          className="mt-8 rounded-lg bg-slate-800 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
        >
          Go Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 p-4 md:p-8">
      <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl">
        <div className="bg-slate-900 p-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20">
            <svg
              className="h-8 w-8 text-emerald-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white">Verified Credential</h1>
          <p className="text-slate-400">
            This certificate has been cryptographically verified.
          </p>
        </div>

        <div className="border-b border-slate-100 bg-slate-50 p-8 text-center">
          <p className="text-sm font-medium tracking-wider text-slate-500 uppercase">
            This certifies that
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900">
            {certificate.recipientName}
          </h2>
          <p className="mt-6 text-sm font-medium tracking-wider text-slate-500 uppercase">
            Has been awarded the
          </p>
          <h3 className="mt-2 text-2xl font-bold text-indigo-600">
            {certificate.title}
          </h3>
          {certificate.description && (
            <p className="mx-auto mt-4 max-w-lg text-slate-600">
              {certificate.description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 divide-x divide-slate-100 bg-white">
          <div className="p-6 text-center">
            <p className="text-xs font-medium text-slate-400 uppercase">
              Issued By
            </p>
            <p className="mt-1 font-semibold text-slate-900">
              {certificate.organization?.name}
            </p>
            {certificate.event && (
              <p className="text-sm text-slate-500">
                Event: {certificate.event.title}
              </p>
            )}
          </div>
          <div className="p-6 text-center">
            <p className="text-xs font-medium text-slate-400 uppercase">
              Date Issued
            </p>
            <p className="mt-1 font-semibold text-slate-900">
              {certificate.issueDate.toLocaleDateString("en-MY", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>

        <div className="bg-slate-50 p-6 text-center">
          <p className="text-xs text-slate-400">Verification Hash</p>
          <p className="mt-1 font-mono text-xs text-slate-500 break-all">
            {certificate.hash}
          </p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/"
          className="text-sm font-medium text-slate-500 hover:text-white"
        >
          ← Back to GodamLah
        </Link>
      </div>
    </div>
  );
}
