import { api } from "@/trpc/server";
import Link from "next/link";
import {
  ArrowLeft,
  Briefcase,
  Calendar,
  Award,
  CheckCircle,
} from "lucide-react";
import { Card } from "@/app/_components/ui";

export default async function CandidateProfilePage({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;

  let user;
  try {
    user = await api.profile.getById({ userId });
  } catch {
    user = null;
  }

  if (!user) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 p-4 text-center">
        <h1 className="text-2xl font-bold text-white">Profile Not Found</h1>
        <p className="mt-2 text-slate-400">
          This profile is private or does not exist.
        </p>
        <Link
          href="/"
          className="mt-8 rounded-lg bg-slate-800 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
        >
          Go Back
        </Link>
      </div>
    );
  }

  const profile = user.profile;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/80 px-4 py-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center gap-4">
          <Link
            href="/"
            className="rounded-lg p-2 transition-colors hover:bg-slate-800"
          >
            <ArrowLeft size={20} className="text-slate-400" />
          </Link>
          <h1 className="text-xl font-bold text-white">Candidate Profile</h1>
        </div>
      </header>

      <main className="mx-auto max-w-4xl p-4 py-8 md:p-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Left Column: Basic Info */}
          <div className="space-y-6 md:col-span-1">
            <Card className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                <span className="text-4xl font-bold">
                  {user.name?.[0] || "U"}
                </span>
              </div>
              <h2 className="text-xl font-bold text-white">
                {profile?.fullName || user.name}
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                {profile?.headline || "Job Seeker"}
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-2">
                <div className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                  <CheckCircle size={12} />
                  MyKad Verified
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-sm font-bold tracking-wider text-slate-400 uppercase">
                Skills
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {profile?.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
                {(!profile?.skills || profile.skills.length === 0) && (
                  <p className="text-sm text-slate-500 italic">
                    No skills listed
                  </p>
                )}
              </div>
            </Card>
          </div>

          {/* Right Column: Experience & Education */}
          <div className="space-y-8 md:col-span-2">
            {/* Bio */}
            {profile?.bio && (
              <section>
                <h3 className="mb-4 text-lg font-bold text-white">About</h3>
                <Card className="p-6">
                  <p className="leading-relaxed text-slate-300">
                    {profile.bio}
                  </p>
                </Card>
              </section>
            )}

            {/* Experience Timeline */}
            <section>
              <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-white">
                <Briefcase size={20} className="text-blue-500" />
                Verified Experience
              </h3>
              <div className="space-y-4">
                {user.experiences.length > 0 ? (
                  user.experiences.map((exp) => (
                    <Card key={exp.id} className="relative overflow-hidden p-6">
                      {exp.verificationStatus === "VERIFIED" && (
                        <div className="absolute top-0 right-0 flex items-center gap-1 rounded-bl-lg border-b border-l border-emerald-500/20 bg-emerald-500/10 px-3 py-1">
                          <CheckCircle size={12} className="text-emerald-400" />
                          <span className="text-[10px] font-bold text-emerald-400 uppercase">
                            Verified
                          </span>
                        </div>
                      )}
                      <div className="flex items-start gap-4">
                        <div className="mt-1 rounded-lg bg-slate-800 p-2 text-slate-400">
                          {exp.type === "EVENT" ? (
                            <Calendar size={20} />
                          ) : (
                            <Briefcase size={20} />
                          )}
                        </div>
                        <div>
                          <h4 className="font-bold text-white">{exp.title}</h4>
                          <p className="text-sm text-slate-400">
                            {exp.organization?.name || "Independent"}
                          </p>
                          <p className="mt-1 text-xs text-slate-500">
                            {exp.startDate
                              ? new Date(exp.startDate).toLocaleDateString(
                                  "en-US",
                                  { month: "short", year: "numeric" },
                                )
                              : "N/A"}{" "}
                            -{" "}
                            {exp.isCurrent
                              ? "Present"
                              : exp.endDate
                                ? new Date(exp.endDate).toLocaleDateString(
                                    "en-US",
                                    { month: "short", year: "numeric" },
                                  )
                                : "N/A"}
                          </p>
                          {exp.skills.length > 0 && (
                            <div className="mt-3 flex flex-wrap gap-1">
                              {exp.skills.map((skill) => (
                                <span
                                  key={skill}
                                  className="rounded border border-slate-700/50 bg-slate-800/50 px-2 py-0.5 text-[10px] text-slate-400"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </Card>
                  ))
                ) : (
                  <Card className="p-8 text-center text-slate-500 italic">
                    No verified experiences yet.
                  </Card>
                )}
              </div>
            </section>

            {/* Certificates */}
            <section>
              <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-white">
                <Award size={20} className="text-purple-500" />
                E-Certificates
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {user.certificates.length > 0 ? (
                  user.certificates.map((cert) => (
                    <Card
                      key={cert.id}
                      className="border-purple-500/20 bg-purple-500/5 p-4"
                    >
                      <div className="flex items-start gap-3">
                        <div className="rounded-lg bg-purple-500/10 p-2 text-purple-400">
                          <Award size={20} />
                        </div>
                        <div>
                          <h4 className="text-sm leading-tight font-bold text-white">
                            {cert.title}
                          </h4>
                          <p className="mt-1 text-[10px] text-slate-400">
                            {cert.organization?.name}
                          </p>
                          <p className="text-[10px] text-slate-500">
                            {new Date(cert.issueDate).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))
                ) : (
                  <Card className="col-span-full p-8 text-center text-slate-500 italic">
                    No certificates earned yet.
                  </Card>
                )}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
