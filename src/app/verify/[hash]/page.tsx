import { api } from "@/trpc/server";
import Link from "next/link";
import {
  CheckCircle,
  XCircle,
  Award,
  Calendar,
  Building2,
  ArrowLeft,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default async function VerifyCertificatePage({
  params,
}: {
  params: Promise<{ hash: string }>;
}) {
  const { hash } = await params;

  let certificate;
  try {
    certificate = await api.certificate.verify({ hash });
  } catch {
    certificate = null;
  }

  if (!certificate) {
    return (
      <div className="liquid-bg flex min-h-screen flex-col items-center justify-center p-4 text-center">
        <div className="rounded-full bg-red-500/10 p-4 backdrop-blur-md">
          <XCircle className="h-12 w-12 text-red-500" />
        </div>
        <h1 className="mt-4 text-2xl font-bold text-white">
          Invalid Certificate
        </h1>
        <p className="mt-2 text-slate-400">
          The certificate you are looking for does not exist or has been
          revoked.
        </p>
        <Button asChild className="mt-8" variant="outline">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Home
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="liquid-bg min-h-screen p-4 md:p-8">
      <div className="mx-auto max-w-3xl">
        <Card className="overflow-hidden border-white/10 bg-white/5 backdrop-blur-2xl dark:border-slate-800/50 dark:bg-slate-900/40">
          <div className="bg-emerald-500/10 p-8 text-center backdrop-blur-md">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20">
              <CheckCircle className="h-8 w-8 text-emerald-400" />
            </div>
            <h1 className="text-2xl font-bold text-white">
              Verified Credential
            </h1>
            <p className="text-sm font-medium text-emerald-400/70">
              This certificate has been cryptographically verified.
            </p>
          </div>

          <CardContent className="p-8 md:p-12">
            <div className="space-y-6 text-center">
              <div>
                <p className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                  This certifies that
                </p>
                <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
                  {certificate.recipientName}
                </h2>
              </div>

              <div className="flex justify-center">
                <div className="h-px w-24 bg-slate-800" />
              </div>

              <div>
                <p className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                  Has been awarded the
                </p>
                <h3 className="mt-2 text-2xl font-bold text-emerald-400">
                  {certificate.title}
                </h3>
                {certificate.description && (
                  <p className="mx-auto mt-4 max-w-lg leading-relaxed text-slate-400">
                    {certificate.description}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 border-t border-white/10 pt-8 md:grid-cols-2">
              <div className="flex items-center gap-4">
                <div className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-md">
                  <Building2 className="h-5 w-5 text-slate-400" />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-wider text-slate-500 uppercase">
                    Issued By
                  </p>
                  <p className="font-semibold text-white">
                    {certificate.organizationName}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-md">
                  <Calendar className="h-5 w-5 text-slate-400" />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-wider text-slate-500 uppercase">
                    Issue Date
                  </p>
                  <p className="font-semibold text-white">
                    {new Date(certificate.issueDate).toLocaleDateString(
                      "en-US",
                      {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      },
                    )}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-white/5 bg-black/20 p-4 backdrop-blur-md">
              <p className="mb-2 text-[10px] font-bold tracking-wider text-slate-500 uppercase">
                Verification Hash
              </p>
              <p className="font-mono text-[10px] break-all text-slate-400">
                {hash}
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <Button
            variant="ghost"
            asChild
            className="text-slate-400 hover:text-white"
          >
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to TalentSync
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
