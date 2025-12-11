"use client";

import React, { useState, useEffect } from "react";
import {
  Clock,
  Globe,
  Search,
  ExternalLink,
  Edit2,
  Save,
  X,
  CheckCircle,
  Calendar,
  Award,
  TrendingUp,
  Lightbulb,
  Briefcase,
} from "lucide-react";
import { api } from "@/trpc/react";
import { Card, Button, Input, TextArea } from "./ui";

const formatDateStr = (dateStr?: string | Date) => {
  if (!dateStr) return "Present";
  const date = typeof dateStr === "string" ? new Date(dateStr) : dateStr;
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
};

interface SeekerViewProps {
  activeTab: string;
}

export const SeekerView: React.FC<SeekerViewProps> = ({ activeTab }) => {
  const profileQuery = api.profile.getMine.useQuery();
  const timelineQuery = api.profile.timeline.useQuery();
  const jobMatchesQuery = api.matching.suggestJobs.useQuery();
  const eventMatchesQuery = api.matching.suggestEvents.useQuery();
  const checkInsQuery = api.checkIn.myCheckIns.useQuery();
  const certificatesQuery = api.certificate.getMine.useQuery();
  const careerInsightsQuery = api.matching.careerInsights.useQuery();

  const utils = api.useUtils();

  const profileMutation = api.profile.upsert.useMutation({
    onSuccess: async () => {
      await Promise.all([
        utils.profile.getMine.invalidate(),
        utils.profile.timeline.invalidate(),
      ]);
      setIsEditing(false);
    },
  });

  const checkInEventMutation = api.checkIn.checkInToEvent.useMutation({
    onSuccess: async () => {
      await Promise.all([
        utils.checkIn.myCheckIns.invalidate(),
        utils.profile.timeline.invalidate(),
      ]);
    },
  });

  const checkInEmploymentMutation = api.checkIn.checkInEmployment.useMutation({
    onSuccess: async () => {
      await Promise.all([
        utils.checkIn.myCheckIns.invalidate(),
        utils.profile.timeline.invalidate(),
      ]);
    },
  });

  // Local state for profile editing
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    headline: "",
    bio: "",
    skills: "",
    consentTalentPool: true,
  });

  // Check-in form state
  const [eventCheckInId, setEventCheckInId] = useState("");
  const [eventCheckInNote, setEventCheckInNote] = useState("");
  const [employmentOrgId, setEmploymentOrgId] = useState("");
  const [employmentTitle, setEmploymentTitle] = useState("");
  const [employmentStart, setEmploymentStart] = useState("");
  const [employmentNote, setEmploymentNote] = useState("");

  // Load data into form
  useEffect(() => {
    if (profileQuery.data) {
      setFormData({
        fullName: profileQuery.data.fullName || "",
        headline: profileQuery.data.headline || "",
        bio: profileQuery.data.bio || "",
        skills: profileQuery.data.skills?.join(", ") || "",
        consentTalentPool: profileQuery.data.consentTalentPool ?? true,
      });
    } else if (!profileQuery.isLoading && !profileQuery.data) {
      // If loaded but no data (New User), auto-enable edit mode
      setIsEditing(true);
    }
  }, [profileQuery.data, profileQuery.isLoading]);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    profileMutation.mutate({
      fullName: formData.fullName,
      headline: formData.headline,
      bio: formData.bio,
      skills: formData.skills
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      consentTalentPool: formData.consentTalentPool,
    });
  };

  const handleEventCheckIn = (e: React.FormEvent) => {
    e.preventDefault();
    if (!eventCheckInId) return;
    checkInEventMutation.mutate({
      eventId: eventCheckInId,
      note: eventCheckInNote || undefined,
    });
    setEventCheckInNote("");
    setEventCheckInId("");
  };

  const handleEmploymentCheckIn = (e: React.FormEvent) => {
    e.preventDefault();
    if (!employmentOrgId || !employmentTitle) return;
    checkInEmploymentMutation.mutate({
      organizationId: employmentOrgId,
      title: employmentTitle,
      note: employmentNote || undefined,
      startDate: employmentStart
        ? new Date(employmentStart).toISOString()
        : undefined,
    });
    setEmploymentNote("");
    setEmploymentTitle("");
    setEmploymentStart("");
    setEmploymentOrgId("");
  };

  if (profileQuery.isLoading) {
    return (
      <div className="p-10 text-center text-slate-500">
        Loading your profile...
      </div>
    );
  }

  // Provide fallback values for new users
  const profile = profileQuery.data ?? {
    fullName: "New User",
    headline: "",
    bio: "",
    skills: [] as string[],
    consentTalentPool: true,
  };

  /* --- VIEW: HOME FEED --- */
  if (activeTab === "home") {
    return (
      <div className="mx-auto max-w-2xl space-y-6">
        {/* Profile Summary Card */}
        <Card className="border-emerald-500/20 bg-gradient-to-br from-slate-900 to-slate-900 p-6">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white">
                {profile.fullName}
              </h2>
              <p className="font-medium text-emerald-400">
                {profile.headline || "No headline yet"}
              </p>
              <p className="mt-2 max-w-md text-sm text-slate-400">
                {profile.bio || "No bio added yet"}
              </p>
            </div>
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-slate-700 bg-slate-800 text-2xl">
              {profile.fullName?.charAt(0) ?? "U"}
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {profile.skills && profile.skills.length > 0 ? (
              profile.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-700 bg-slate-800 px-2.5 py-1 text-xs text-slate-300"
                >
                  {skill}
                </span>
              ))
            ) : (
              <span className="text-xs text-slate-500">No skills added</span>
            )}
          </div>
          <div className="mt-4 flex items-center gap-2 border-t border-slate-800/50 pt-4">
            <Globe
              size={14}
              className={
                profile.consentTalentPool
                  ? "text-emerald-500"
                  : "text-slate-500"
              }
            />
            <span className="text-xs text-slate-400">
              Talent Pool Visibility:{" "}
              <span
                className={
                  profile.consentTalentPool
                    ? "text-emerald-400"
                    : "text-slate-500"
                }
              >
                {profile.consentTalentPool ? "Public" : "Private"}
              </span>
            </span>
          </div>
        </Card>

        {/* Timeline Section */}
        <div className="space-y-4">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
            <Clock size={18} className="text-emerald-500" />
            Verified Timeline
          </h3>

          {timelineQuery.data && timelineQuery.data.length > 0 ? (
            timelineQuery.data.map((item) => (
              <div
                key={item.id}
                className="relative border-l border-slate-800 pb-6 pl-6 last:pb-0"
              >
                <div
                  className={`absolute top-1 -left-1.5 h-3 w-3 rounded-full ${
                    item.verificationStatus === "VERIFIED"
                      ? "bg-emerald-500"
                      : "bg-slate-600"
                  }`}
                />
                <Card className="ml-2 p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-white">
                        {item.title || "Experience"}
                      </h4>
                      <p className="mt-1 text-sm text-slate-400">
                        {formatDateStr(item.startDate ?? undefined)}
                        {item.endDate &&
                          ` - ${formatDateStr(item.endDate ?? undefined)}`}
                      </p>
                      {item.notes && (
                        <p className="mt-2 text-xs text-slate-500">
                          {item.notes}
                        </p>
                      )}
                    </div>
                    <span
                      className={`rounded-full px-2 py-1 text-xs ${
                        item.verificationStatus === "VERIFIED"
                          ? "bg-emerald-500/20 text-emerald-400"
                          : "bg-slate-700/50 text-slate-400"
                      }`}
                    >
                      {item.verificationStatus}
                    </span>
                  </div>
                </Card>
              </div>
            ))
          ) : (
            <Card className="p-6 text-center text-slate-400">
              No experiences yet. Check-in to events or add employment history.
            </Card>
          )}
        </div>

        {/* Career Insights Section */}
        <div className="space-y-4">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
            <Lightbulb size={18} className="text-amber-500" />
            Career Insights
          </h3>

          {careerInsightsQuery.isLoading ? (
            <Card className="p-6 text-center text-slate-400">
              Analyzing your career...
            </Card>
          ) : careerInsightsQuery.data ? (
            <div className="grid gap-4 md:grid-cols-2">
              {/* Recommended Skills */}
              {careerInsightsQuery.data.recommendedSkills.length > 0 && (
                <Card className="border-amber-500/20 p-5">
                  <div className="mb-3 flex items-center gap-2">
                    <TrendingUp size={16} className="text-amber-500" />
                    <h4 className="text-sm font-semibold text-white">
                      Skills to Learn
                    </h4>
                  </div>
                  <p className="mb-3 text-xs text-slate-400">
                    These skills appear most frequently in jobs you&apos;re
                    close to qualifying for
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {careerInsightsQuery.data.recommendedSkills.map(
                      ({ skill, count }) => (
                        <span
                          key={skill}
                          className="flex items-center gap-1 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1.5 text-xs text-amber-300"
                        >
                          {skill}
                          <span className="text-[10px] text-amber-500/60">
                            ({count})
                          </span>
                        </span>
                      ),
                    )}
                  </div>
                </Card>
              )}

              {/* Potential Roles */}
              {careerInsightsQuery.data.potentialRoles.length > 0 && (
                <Card className="border-indigo-500/20 p-5">
                  <div className="mb-3 flex items-center gap-2">
                    <Briefcase size={16} className="text-indigo-500" />
                    <h4 className="text-sm font-semibold text-white">
                      Potential Next Roles
                    </h4>
                  </div>
                  <p className="mb-3 text-xs text-slate-400">
                    Based on your current skills, these roles are within reach
                  </p>
                  <ul className="space-y-2">
                    {careerInsightsQuery.data.potentialRoles.map(
                      ({ role, count }) => (
                        <li
                          key={role}
                          className="flex items-center justify-between rounded-lg bg-slate-800/50 p-2"
                        >
                          <span className="text-sm text-slate-200">{role}</span>
                          <span className="text-xs text-slate-500">
                            {count} openings
                          </span>
                        </li>
                      ),
                    )}
                  </ul>
                </Card>
              )}

              {careerInsightsQuery.data.recommendedSkills.length === 0 &&
                careerInsightsQuery.data.potentialRoles.length === 0 && (
                  <Card className="p-6 text-center text-slate-400 md:col-span-2">
                    Add more skills to your profile to see career insights!
                  </Card>
                )}
            </div>
          ) : null}
        </div>
      </div>
    );
  }

  /* --- VIEW: JOBS --- */
  if (activeTab === "jobs") {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900/50 p-2">
          <Search className="ml-2 text-slate-500" size={20} />
          <input
            placeholder="Search for jobs..."
            className="w-full border-none bg-transparent text-white placeholder-slate-500 outline-none focus:ring-0"
          />
        </div>

        {jobMatchesQuery.isLoading ? (
          <div className="text-center text-slate-400">Loading jobs...</div>
        ) : jobMatchesQuery.data && jobMatchesQuery.data.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {jobMatchesQuery.data.map(({ job, overlap }) => (
              <Card
                key={job.id}
                className="group flex cursor-pointer flex-col justify-between p-5 transition-colors hover:border-emerald-500/30"
              >
                <div>
                  <h4 className="font-semibold text-white transition-colors group-hover:text-emerald-400">
                    {job.title}
                  </h4>
                  <p className="mt-2 text-xs text-slate-400">
                    {job.description || "No description"}
                  </p>
                  {job.skills && job.skills.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1">
                      {job.skills.slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className="rounded bg-slate-800 px-2 py-1 text-xs text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                      {job.skills.length > 3 && (
                        <span className="rounded px-2 py-1 text-xs text-slate-400">
                          +{job.skills.length - 3}
                        </span>
                      )}
                    </div>
                  )}
                  {overlap !== undefined && (
                    <p className="mt-3 text-xs font-medium text-emerald-400">
                      {Math.round(
                        (overlap.length / Math.max(job.skills.length, 1)) * 100,
                      )}
                      % Match
                    </p>
                  )}
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="mt-4 w-full justify-between group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 group-hover:text-emerald-400"
                >
                  View Details <ExternalLink size={14} />
                </Button>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="p-6 text-center text-slate-400">
            No job matches found. Try improving your profile skills!
          </Card>
        )}
      </div>
    );
  }

  /* --- VIEW: EVENTS --- */
  if (activeTab === "events") {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">Recommended Events</h2>
        </div>

        {eventMatchesQuery.isLoading ? (
          <div className="text-center text-slate-400">Loading events...</div>
        ) : eventMatchesQuery.data && eventMatchesQuery.data.length > 0 ? (
          <div className="grid gap-4">
            {eventMatchesQuery.data.map(({ event }) => (
              <Card
                key={event.id}
                className="flex flex-col overflow-hidden p-0 transition-colors hover:border-emerald-500/30 md:flex-row"
              >
                <div className="flex h-24 w-full flex-col items-center justify-center border-b border-slate-700 bg-slate-800 md:h-auto md:w-32 md:border-r md:border-b-0">
                  <Calendar size={32} className="text-emerald-500/50" />
                </div>
                <div className="flex flex-1 flex-col justify-between p-4">
                  <div>
                    <h4 className="font-semibold text-white">{event.title}</h4>
                    <p className="mt-1 text-xs text-slate-400">
                      {formatDateStr(event.startsAt)}
                      {event.endsAt && ` - ${formatDateStr(event.endsAt)}`}
                    </p>
                    {event.location && (
                      <p className="mt-1 text-xs text-slate-500">
                        📍 {event.location}
                      </p>
                    )}
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="mt-3 w-full justify-center hover:border-emerald-500/30 hover:bg-emerald-500/10 hover:text-emerald-400 md:w-auto"
                  >
                    Learn More
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="p-6 text-center text-slate-400">
            No events recommended at this time.
          </Card>
        )}
      </div>
    );
  }

  /* --- VIEW: CERTIFICATES --- */
  if (activeTab === "certificates") {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="flex items-center gap-2 text-xl font-bold text-white">
            <Award size={24} className="text-purple-500" />
            My Certificates
          </h2>
        </div>

        {certificatesQuery.isLoading ? (
          <div className="text-center text-slate-400">
            Loading certificates...
          </div>
        ) : certificatesQuery.data && certificatesQuery.data.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certificatesQuery.data.map((cert) => (
              <Card
                key={cert.id}
                className="group relative overflow-hidden border-purple-500/20 p-0 transition-colors hover:border-purple-500/40"
              >
                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 h-20 w-20 translate-x-10 -translate-y-10 rotate-45 bg-purple-500/10" />

                <div className="relative p-5">
                  {/* Badge */}
                  <div className="mb-3 flex items-start justify-between">
                    <span className="inline-block rounded-full bg-purple-500/20 px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-purple-300 uppercase">
                      {cert.type}
                    </span>
                    <span className="text-[10px] text-slate-500">
                      {formatDateStr(cert.issueDate)}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg font-semibold text-white transition-colors group-hover:text-purple-300">
                    {cert.title}
                  </h3>

                  {/* Issuer */}
                  <p className="mt-2 text-xs text-slate-400">
                    Issued by{" "}
                    <span className="text-slate-300">
                      {cert.organization?.name ?? "Unknown"}
                    </span>
                  </p>

                  {cert.event && (
                    <p className="mt-1 text-xs text-slate-500">
                      Event: {cert.event.title}
                    </p>
                  )}

                  {cert.description && (
                    <p className="mt-3 line-clamp-2 text-xs text-slate-400">
                      {cert.description}
                    </p>
                  )}

                  {/* Footer */}
                  <div className="mt-4 flex items-center justify-between border-t border-slate-800 pt-3">
                    <span className="font-mono text-[10px] text-slate-600">
                      #{cert.id.slice(-8)}
                    </span>
                    <button
                      onClick={() =>
                        window.open(`/verify/${cert.hash}`, "_blank")
                      }
                      className="flex items-center gap-1 text-xs font-medium text-purple-400 hover:text-purple-300"
                    >
                      Verify <ExternalLink size={12} />
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="p-10 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-500/10">
              <Award size={32} className="text-purple-500/50" />
            </div>
            <h3 className="text-lg font-semibold text-white">
              No Certificates Yet
            </h3>
            <p className="mx-auto mt-2 max-w-sm text-sm text-slate-400">
              Certificates you earn from events and organizations will appear
              here. Keep building your verified career footprint!
            </p>
          </Card>
        )}
      </div>
    );
  }

  /* --- VIEW: CHECK-INS --- */
  if (activeTab === "checkins") {
    const recentCheckIns = checkInsQuery.data ?? [];

    return (
      <div className="mx-auto max-w-3xl space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Event Check-in Form */}
          <Card className="p-6">
            <div className="mb-4 flex items-center gap-2">
              <CheckCircle size={20} className="text-emerald-500" />
              <h3 className="text-lg font-semibold text-white">
                Event Check-in
              </h3>
            </div>
            <form onSubmit={handleEventCheckIn} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">
                  Select Event
                </label>
                <select
                  value={eventCheckInId}
                  onChange={(e) => setEventCheckInId(e.target.value)}
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white focus:border-emerald-400 focus:outline-none"
                  required
                >
                  <option value="">Choose an event...</option>
                  {eventMatchesQuery.data?.map(({ event }) => (
                    <option key={event.id} value={event.id}>
                      {event.title} ({formatDateStr(event.startsAt)})
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">
                  Note (Optional)
                </label>
                <textarea
                  value={eventCheckInNote}
                  onChange={(e) => setEventCheckInNote(e.target.value)}
                  placeholder="Add any additional details..."
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white placeholder-slate-500 focus:border-emerald-400 focus:outline-none"
                  rows={3}
                />
              </div>

              <Button
                type="submit"
                className="w-full"
                isLoading={checkInEventMutation.isPending}
                disabled={!eventCheckInId}
              >
                Record Event Check-in
              </Button>

              {checkInEventMutation.isSuccess && (
                <div className="rounded-lg border border-emerald-500/30 bg-emerald-950/50 p-3">
                  <p className="text-xs text-emerald-400">
                    ✓ Check-in recorded successfully
                  </p>
                </div>
              )}
              {checkInEventMutation.error && (
                <div className="rounded-lg border border-red-500/30 bg-red-950/50 p-3">
                  <p className="text-xs text-red-400">
                    Error: {checkInEventMutation.error.message}
                  </p>
                </div>
              )}
            </form>
          </Card>

          {/* Employment Check-in Form */}
          <Card className="p-6">
            <div className="mb-4 flex items-center gap-2">
              <CheckCircle size={20} className="text-blue-500" />
              <h3 className="text-lg font-semibold text-white">Employment</h3>
            </div>
            <form onSubmit={handleEmploymentCheckIn} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">
                  Organization
                </label>
                <Input
                  value={employmentOrgId}
                  onChange={(e) => setEmploymentOrgId(e.target.value)}
                  placeholder="Company name or ID"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">
                  Role Title
                </label>
                <Input
                  value={employmentTitle}
                  onChange={(e) => setEmploymentTitle(e.target.value)}
                  placeholder="e.g. Event Coordinator"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">
                  Start Date
                </label>
                <input
                  type="datetime-local"
                  value={employmentStart}
                  onChange={(e) => setEmploymentStart(e.target.value)}
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white focus:border-emerald-400 focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">
                  Note (Optional)
                </label>
                <textarea
                  value={employmentNote}
                  onChange={(e) => setEmploymentNote(e.target.value)}
                  placeholder="Add any additional details..."
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white placeholder-slate-500 focus:border-emerald-400 focus:outline-none"
                  rows={3}
                />
              </div>

              <Button
                type="submit"
                className="w-full"
                isLoading={checkInEmploymentMutation.isPending}
                disabled={!employmentOrgId || !employmentTitle}
              >
                Record Employment
              </Button>

              {checkInEmploymentMutation.isSuccess && (
                <div className="rounded-lg border border-emerald-500/30 bg-emerald-950/50 p-3">
                  <p className="text-xs text-emerald-400">
                    ✓ Employment recorded successfully
                  </p>
                </div>
              )}
              {checkInEmploymentMutation.error && (
                <div className="rounded-lg border border-red-500/30 bg-red-950/50 p-3">
                  <p className="text-xs text-red-400">
                    Error: {checkInEmploymentMutation.error.message}
                  </p>
                </div>
              )}
            </form>
          </Card>
        </div>

        {/* Recent Check-ins */}
        <Card className="p-6">
          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-white">
            <Clock size={18} className="text-slate-400" />
            Recent Check-ins
          </h3>

          {recentCheckIns.length > 0 ? (
            <div className="space-y-3">
              {recentCheckIns.map((checkIn) => (
                <div
                  key={checkIn.id}
                  className="flex items-start justify-between rounded-lg border border-slate-800 bg-slate-950/50 p-3"
                >
                  <div>
                    <p className="text-sm font-medium text-white">
                      {checkIn.type === "EVENT"
                        ? (checkIn.event?.title ?? "Event Check-in")
                        : "Employment Check-in"}
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      {checkIn.organization?.name ?? "Organization"}
                    </p>
                    {checkIn.note && (
                      <p className="mt-1 text-xs text-slate-500">
                        {checkIn.note}
                      </p>
                    )}
                  </div>
                  <span
                    className={`rounded-full px-2 py-1 text-xs font-medium ${
                      checkIn.verificationStatus === "VERIFIED"
                        ? "bg-emerald-500/20 text-emerald-400"
                        : "bg-slate-700/50 text-slate-400"
                    }`}
                  >
                    {checkIn.verificationStatus}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="py-6 text-center text-sm text-slate-400">
              No check-ins yet. Start recording your attendance and employment!
            </p>
          )}
        </Card>
      </div>
    );
  }

  /* --- VIEW: PROFILE --- */
  return (
    <div className="mx-auto max-w-xl">
      <Card className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">Edit Profile</h2>
          <Button
            variant="ghost"
            onClick={() => setIsEditing(!isEditing)}
            size="sm"
          >
            {isEditing ? <X size={16} /> : <Edit2 size={16} />}
          </Button>
        </div>

        {isEditing ? (
          <form onSubmit={handleSaveProfile} className="space-y-4">
            <Input
              label="Full Name"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              placeholder="e.g. Ali Bin Abu"
            />
            <Input
              label="Headline"
              value={formData.headline}
              onChange={(e) =>
                setFormData({ ...formData, headline: e.target.value })
              }
              placeholder="e.g. Full Stack Developer"
            />
            <TextArea
              label="Bio"
              rows={4}
              value={formData.bio}
              onChange={(e) =>
                setFormData({ ...formData, bio: e.target.value })
              }
              placeholder="Tell us about yourself..."
            />
            <Input
              label="Skills (Comma separated)"
              value={formData.skills}
              onChange={(e) =>
                setFormData({ ...formData, skills: e.target.value })
              }
              placeholder="e.g. React, TypeScript, Node.js"
            />

            <div className="flex items-start gap-3 rounded-lg border border-slate-800 bg-slate-950/50 p-3">
              <input
                type="checkbox"
                id="talentPool"
                checked={formData.consentTalentPool}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    consentTalentPool: e.target.checked,
                  })
                }
                className="mt-1 rounded border-slate-700"
              />
              <label htmlFor="talentPool" className="text-sm text-slate-400">
                Allow organizations to view my profile in the talent pool
              </label>
            </div>

            <Button
              type="submit"
              className="w-full"
              isLoading={profileMutation.isPending}
            >
              <Save size={16} className="mr-2" />
              Save Changes
            </Button>
          </form>
        ) : (
          <div className="space-y-6">
            <div>
              <label className="text-xs font-medium tracking-wider text-slate-400 uppercase">
                Full Name
              </label>
              <p className="mt-1 text-white">{profile.fullName}</p>
            </div>
            <div>
              <label className="text-xs font-medium tracking-wider text-slate-400 uppercase">
                Headline
              </label>
              <p className="mt-1 text-white">{profile.headline || "—"}</p>
            </div>
            <div>
              <label className="text-xs font-medium tracking-wider text-slate-400 uppercase">
                Bio
              </label>
              <p className="mt-1 text-white">{profile.bio || "—"}</p>
            </div>
            <div>
              <label className="text-xs font-medium tracking-wider text-slate-400 uppercase">
                Skills
              </label>
              <div className="mt-2 flex flex-wrap gap-2">
                {profile.skills && profile.skills.length > 0 ? (
                  profile.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-sm text-slate-300"
                    >
                      {skill}
                    </span>
                  ))
                ) : (
                  <span className="text-slate-500">—</span>
                )}
              </div>
            </div>
            <div className="border-t border-slate-800 pt-4">
              <label className="flex items-center gap-2 text-xs font-medium tracking-wider text-slate-400 uppercase">
                <Globe size={14} />
                Talent Pool Visibility
              </label>
              <p
                className={`mt-1 text-sm font-medium ${
                  profile.consentTalentPool
                    ? "text-emerald-400"
                    : "text-slate-500"
                }`}
              >
                {profile.consentTalentPool ? "Visible" : "Hidden"}
              </p>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};